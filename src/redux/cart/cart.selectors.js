import { createSelector } from 'reselect';

// 2 kinds of selectors, input selectors and output selectors.

// input selector
const selectCart = state => state.cart;

// output selector, which uses createSelector making it a memoized selector
export const selectCartItems = createSelector(
    // 1st arg is an array of selectors
    [selectCart],
    // params here are the outputs of the array of input selectors
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);