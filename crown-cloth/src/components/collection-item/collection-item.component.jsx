import React from "react";
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-botton.component';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name"> {name}</span>
                <span className="price"> {'$' + price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    )
};

const mapDispatchToprops = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToprops)(CollectionItem);