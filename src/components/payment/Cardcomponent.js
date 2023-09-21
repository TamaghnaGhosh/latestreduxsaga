import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51MwJmMSFs3tQlw7jSAXVjCd1hOtlXD2JyXHr51HNIc32HIM8NHeqr8G2sy3fWbosUwKLg7okaNL9jqCGj4MIEyC900LzuDlNXB');

function Cardcomponent() {


    return (


        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>

    )
}

export default Cardcomponent