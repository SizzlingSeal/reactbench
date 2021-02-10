import React from 'react';
import CartItem from './CartItem';
function Cart({listCart, setVisibleShop, setTotalQty}){
    var total = 0;

    
    return(
        <div className="cartList">
            <div className="sideone">
            {listCart.map(post => {
                total = total + post.total;
                return(
                    <CartItem 
                    key ={post.id}
                    id ={post.id}
                    name={post.name}
                    price={post.price}
                    imgUrl={post.imgUrl}
                    size={post.size}
                    qty={post.qty}
                    total={post.total}
                    listCart={listCart}
                    setVisibleShop={setVisibleShop}
                    setTotalQty={setTotalQty}
                    />
                )
            })}
            </div>
            <div className="sidetwo">
            <h2>Summary</h2>
            <hr/>
           <h2>Total: ₱{total}</h2>
           <button>CHECKOUT</button>
           </div>
        </div>
    )
   
}
export default Cart;