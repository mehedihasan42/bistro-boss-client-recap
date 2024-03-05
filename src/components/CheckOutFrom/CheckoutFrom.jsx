import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useOrder from "../hooks/useOrder";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckoutFrom = () => {
  
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)
  const axiosSecure = useAxiosSecure()
  const [clientSecret,setClientSecret] = useState("")
  const {user} = useContext(AuthContext)

  const [orderData] = useOrder();
  const total = orderData.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2)) 

  useEffect(()=>{
   if(price > 0){
    axiosSecure.post("/create-payment-intent",{price})
    .then(res=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
   }
  },[])

  const handleSubmit = async (event) => {
   
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error)
      console.log('[error]', error);
    } else {
      setSuccess('Payment success')
      console.log('[PaymentMethod]', paymentMethod);
    }

   

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      },
    );
  };

    return (
      <form className="w-2/4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm bg-[#BB8506]" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      <p className="text-green-600">{success}</p>
    </form>
    );
};

export default CheckoutFrom;