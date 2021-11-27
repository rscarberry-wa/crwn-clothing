import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from "./cart-dropdown.styles";
import { useDispatch } from "react-redux";

// cartItems comes from mapStateToProps, history from withRouter.
const CartDropdown = () => {
    
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartItemsContainer> 
            {
                cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : 
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }         
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }
            }>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    );
}

export default CartDropdown;