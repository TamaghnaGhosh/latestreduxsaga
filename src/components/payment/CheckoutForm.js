/* eslint-disable no-unused-vars */
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Cartsection from "./Cartsection";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (elements == null) {
  //     return;
  //   }

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardElement),
  //   });
  //   console.log(paymentMethod);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Payment Method:", paymentMethod);
      // Process the payment method or take other actions
    }

    const item = {
      name: "Product Name",
      description: "Product Description",
      amount: 1000, // Amount in cents
      currency: "usd",
      quantity: 1,
    };

    // Process the payment method and send the item object
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: item.amount }),
      }
    );

    if (response.ok) {
      console.log("Payment processed successfully");
    } else {
      console.log("Payment processing failed");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Cartsection />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};
