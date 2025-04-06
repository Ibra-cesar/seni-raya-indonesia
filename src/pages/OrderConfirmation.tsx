
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const orderId = location.state?.orderId;

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
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('id', orderId)
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setOrderDetails(data);
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-batik-brown"></div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <p className="mb-6">We couldn't find the order you're looking for.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-muted-foreground mb-6">
          Your order has been confirmed and will be processed soon.
        </p>
        
        <div className="bg-secondary/50 p-4 rounded-lg mb-6 text-left">
          <h2 className="font-semibold mb-2">Order Details</h2>
          <div className="space-y-1">
            <p className="text-sm flex justify-between">
              <span>Order Number:</span>
              <span className="font-medium">{orderId?.substring(0, 8)}</span>
            </p>
            <p className="text-sm flex justify-between">
              <span>Date:</span>
              <span className="font-medium">
                {new Date(orderDetails.created_at).toLocaleDateString()}
              </span>
            </p>
            <p className="text-sm flex justify-between">
              <span>Total Amount:</span>
              <span className="font-medium">
                Rp {orderDetails.total_amount.toLocaleString('id-ID')}
              </span>
            </p>
            <p className="text-sm flex justify-between">
              <span>Status:</span>
              <span className="font-medium capitalize">{orderDetails.status}</span>
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/account/orders">
              View My Orders
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link to="/">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
