import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    const total = cart.reduce((total, item)=> total + item.price*1, 0)
    const totalPrice = parseInt(total)

    const tax = total/10;
    const toPreciseNumber = (Num)=>{
        const precise = Num.toFixed(2);
        return precise
    }

    const GrandTotal = total + tax;
    return (
        <div>
            <h4>Course Added : {cart.length}</h4>
            <h5>Total Price : {totalPrice.toFixed(2)} </h5>
            <h6>Tax/ Vat : {toPreciseNumber(tax)}</h6>
            <h5>Grand Total : {toPreciseNumber(GrandTotal)}</h5>
            
        </div>
    );
};

export default Cart;