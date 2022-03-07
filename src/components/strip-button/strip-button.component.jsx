import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 
        'pk_test_51KVSgGD7CazOpHNOw3FqcU4kDneg6ex9ktdnX3QSRCXnVF6rw9LgbfrmCcARcZH5j3a4A7IZN0cbBZ2e5dDZsSbk00JBkrQGQv';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful.');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Easy Donation Ltd'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;