import React from 'react';
import { connect } from 'react-redux';
import CustomButtom from '../custom-button/custom-botton.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        {/* need to check className - not working */}
        <div className='carts-items' style={{ overflow: "overlay" }}>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                    : <span className='empty-message'> Your cart is empty</span>

            }
        </div>
        <CustomButtom> GO TO CHECKOUT </CustomButtom>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);