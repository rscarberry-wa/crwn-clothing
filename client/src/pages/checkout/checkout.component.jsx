import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CheckoutHeader, CheckoutHeaderBlock, CheckoutPageContainer, TotalContainer, TestWarning } from './checkout.styles';

const CheckoutPage = () => {
    
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <TotalContainer>TOTAL: {total}</TotalContainer>
            <TestWarning>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 -- CVC: 123
            </TestWarning>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    );
}

export default CheckoutPage;