// selector used to render particullar component - while change state
// did not invoke mapstoprops, mapsdispatchtoprops
// will increase - performance, by avoiding multiple render

import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)