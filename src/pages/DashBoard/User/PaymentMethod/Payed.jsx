import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "../../../../components/CheckOutFrom/CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payed = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFrom />
    </Elements>
  );
};

export default Payed;
