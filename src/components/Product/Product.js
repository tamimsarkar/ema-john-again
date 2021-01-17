import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, seller, price, stock } = props.product
    const addToCartHandler = props.addtoCart;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>

                <p>${price}</p>
                <p>Only {stock} available</p>
                <button onClick={() => addToCartHandler(props.product)} className='add-cart-button'>  <FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
            </div>
        </div>
    );
};

export default Product;