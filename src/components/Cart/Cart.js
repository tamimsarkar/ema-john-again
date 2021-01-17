import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,product) => total + product.price, 0)
   
    let shipping = 0;
    if(totalPrice> 35) {
        shipping = 0
    }
    else if (totalPrice> 12) {
        shipping = 4.99;
    }
    else if (totalPrice> 0) {
        shipping = 12.99;
    }
    const tax = (totalPrice/ 10);
    console.log(tax)
    const grandTotal = (totalPrice + shipping + tax).toFixed(2)
    // let totalPrice= 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     totalPrice= totalPrice+ product.price
    // }
    return (
        <div>
            <h4>Order Summery </h4>
            <p>Items ordered: {cart.length}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax : {parseFloat(tax).toFixed(2)}</p>
            <p>totalPricePrice : {grandTotal}</p>
        </div>
    );
};

export default Cart;