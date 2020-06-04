import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 1.38;
  const publishableKey = 'pk_test_51Gq9fhGcJnbT8xgKq34WlsAM6O905mFUQ1UvLEa9nvjgcxR8XFwV9LOvXQg1lWwCtrTHOTZSNyTavOnFRXCgaZqu00Rfrk2BgR';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Apparel Factory'
      billingAddress
      shippingAddress
      description={`Your total is Rs. ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;