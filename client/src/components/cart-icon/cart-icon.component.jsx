import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from "./cart-icon.styles";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIconContainer className='shopping-icon' />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    );
}

export default CartIcon;