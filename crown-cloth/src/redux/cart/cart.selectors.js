// selector used to render particullar component - while change state
// did not invoke mapstoprops, mapsdispatchtoprops
// will increase - performance, by avoiding multiple render
// tutorial - 130

import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);