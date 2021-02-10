import React from 'react';

function Header({setVisibleShop,totalQty}){

    function showCart(){
        setVisibleShop(false);
    }
    function hideCart(){
        setVisibleShop(true);
    }
    return(
        <header>
        <p>Welcome To Bench Online Store</p>
        <div className="logo" onClick={hideCart}>
        <h1>Bench/</h1>
        </div>
        <div className="cart">
        <img src="/img/shopping-cart.svg" alt="Cart" onClick={showCart}/>
        <p className="cartsize">{totalQty}</p>
        </div>
        
        </header>
    )
}



export default Header;