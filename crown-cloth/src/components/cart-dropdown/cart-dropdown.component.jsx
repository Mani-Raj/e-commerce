import React from 'react';

import CustomButtom from '../custom-button/custom-botton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='carts-item' />
        <CustomButtom> GO TO CHECKOUT </CustomButtom>
    </div>
);

export default CartDropdown;