/* eslint-disable no-unused-vars */
import React from 'react'
import { CardElement, CardNumberElement, CardCvcElement, CardExpiryElement, PaymentRequestButtonElement} from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "blue",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#CFD7DF",
            },
        },
        invalid: {
            color: "red",
            ":focus": {
                color: "red",
            },
        },
    },
};

function Cartsection() {
    return (
        <>
            <div>Fill the card data</div>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            {/* <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} /> */}
        </>
    )
}

export default Cartsection