
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface LocationState {
  clientSecret: string;
  amount: number;
  orderId: string;
}

const Checkout = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [orderItems, setOrderItems] = useState<any[]>([]);

  // Get the state from location
  const state = location.state as LocationState;

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (!orderId) {
      navigate('/');
      return;
    }

    const getOrderDetails = async () => {
      setIsLoading(true);
      try {
        // Get order details
        const { data: order, error: orderError } = await supabase
          .from('orders')
          .select('*')
          .eq('id', orderId)
          .eq('user_id', user.id)
          .single();

        if (orderError) throw orderError;

        if (!order) {
          toast({
            title: "Order not found",
            description: "The requested order could not be found",
            variant: "destructive",
          });
          navigate('/');
          return;
        }

        setOrderDetails(order);

        // Get order items with product details
        const { data: items, error: itemsError } = await supabase
          .from('order_items')
          .select(`
            id,
            quantity,
            price_at_purchase,
            product:products(title, image_url)
          `)
          .eq('order_id', orderId);

        if (itemsError) throw itemsError;
        setOrderItems(items || []);
      } catch (error: any) {
        toast({
          title: "Error loading order",
          description: error.message,
          variant: "destructive",
        });
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    getOrderDetails();
  }, [user, orderId, navigate, toast]);

  // This function would be replaced with actual Stripe integration in a production app
  const handleCompletePayment = async () => {
    // In a real app, you would use Stripe Elements or Stripe Checkout here
    // For demo purposes, we'll just simulate a successful payment

    try {
      // Update order status to paid
      const { error } = await supabase
        .from('orders')
        .update({ status: 'paid' })
        .eq('id', orderId);

      if (error) throw error;

      toast({
        title: "Payment successful",
        description: "Thank you for your purchase!",
      });

      navigate('/order-confirmation', { state: { orderId } });
    } catch (error: any) {
      toast({
        title: "Payment failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-batik-brown"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-batik-brown">Complete Your Purchase</CardTitle>
          <CardDescription>Review your order and proceed with payment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Order Details</h3>
              <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>
              <p className="text-sm text-muted-foreground">
                Date: {new Date(orderDetails?.created_at).toLocaleDateString()}
              </p>
              <p className="text-sm text-muted-foreground">Status: {orderDetails?.status}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Items</h3>
              <div className="space-y-2">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.product.title} × {item.quantity}</span>
                    </div>
                    <span className="text-sm">
                      Rp {(item.price_at_purchase * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-semibold">
                <span>Total Amount:</span>
                <span>Rp {orderDetails?.total_amount.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div className="bg-secondary/50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Payment Details</h3>
              <p className="text-sm text-muted-foreground mb-4">
                In a production app, this would be replaced with a Stripe payment form.
                For this demo, we'll simulate a successful payment.
              </p>
              
              {/* This would be replaced with actual Stripe Elements in production */}
              <div className="border border-dashed border-muted-foreground rounded-md p-4 mb-4 text-center">
                <p className="text-muted-foreground">Stripe Payment Form Placeholder</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button 
            className="bg-batik-brown hover:bg-batik-brown/90 text-white"
            onClick={handleCompletePayment}
          >
            Complete Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
