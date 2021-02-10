import React from 'react';

function CartItem(props){

    
    function remove(div, qty){
        var elem = document.getElementById(div);
        elem.parentNode.removeChild(elem);
        var index = props.listCart.map(a => {return a.id}).indexOf(div);
        props.listCart.splice(index , 1);
        props.setVisibleShop(true);
        setTimeout(() => {props.setVisibleShop(false);}, 1);
        props.setTotalQty(oldQty => oldQty - qty);

    }
    return(
        <div id={props.id} className="cartItem">

       <div className="imgContainer"> <img src={props.imgUrl} alt="cartImg"/></div>

       <div className="text">
        <div className="name">
        <h3>{props.name}</h3>
        <h3>-{props.size}</h3>
        </div>

        <div className="price">
        <h3 className="priceNo">₱{props.price}</h3>
        <h3 className="qty">x{props.qty}</h3>
        
        </div>
        <div className="total">
        <h3>₱{props.total}</h3>
        </div>
        <button onClick={() => remove(props.id,props.qty)}>Remove From Cart</button>
        
        </div>


        
        </div>
    )
}


export default CartItem;