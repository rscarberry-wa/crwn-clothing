import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import { ArrowContainer, CheckoutItemContainer, ImageContainer, NameContainer, PriceContainer, QuantityContainer, RemoveButton, ValueContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    
    const dispatch = useDispatch();

    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => dispatch(removeItem(cartItem))}>&#10094;</ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={() => dispatch(addItem(cartItem))}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
