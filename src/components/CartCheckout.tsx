
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartCheckoutProps {
  items: CartItem[];
  onCheckoutComplete: () => void;
}

const CartCheckout = ({ items, onCheckoutComplete }: CartCheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to proceed with checkout",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    setIsProcessing(true);

    try {
      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          total_amount: totalAmount,
          status: 'pending',
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price_at_purchase: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Create Stripe payment intent
      const response = await fetch(`${window.location.origin}/functions/v1/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
          })),
          userId: user.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Redirect to payment page
      navigate(`/checkout/${order.id}`, { 
        state: { 
          clientSecret,
          orderId: order.id,
          amount: totalAmount,
        }
      });

      // Notify success
      toast({
        title: "Checkout initiated",
        description: "Please complete your payment",
      });

      // Clear cart after successful checkout
      onCheckoutComplete();
    } catch (error: any) {
      toast({
        title: "Checkout failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="border-t pt-4 mt-4">
      <div className="flex justify-between font-semibold text-lg mb-4">
        <span>Total:</span>
        <span>Rp {totalAmount.toLocaleString('id-ID')}</span>
      </div>
      <Button 
        className="w-full bg-batik-brown hover:bg-batik-brown/90 text-white" 
        onClick={handleCheckout}
        disabled={isProcessing || items.length === 0}
      >
        {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
      </Button>
    </div>
  );
};

export default CartCheckout;
