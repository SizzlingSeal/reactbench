import React, { useState } from 'react';
import Header from './Components/Header'
import ListContainer from './Components/ListContainer';
import Categories from './Components/Categories';
import Showcase from './Components/Showcase';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SubCategories from './Components/SubCategories';
import Cart from './Components/Cart';

function App(){
       const [selectedMain, setSelectedMain] = useState('Male');
       const [selectedSub, setSelectedSub] = useState('tshirt');
       const [visibleShop, setVisibleShop] = useState(true);
       const [listCart, addListCart] = useState([]);
       const [totalQty, setTotalQty] = useState(0);
    return(
        <div className="app">
        <Header setVisibleShop={setVisibleShop} totalQty={totalQty}/>
        {visibleShop === true ? 
        <>
        <Categories setSelectedMain={setSelectedMain} setSelectedSub={setSelectedSub}/>
        <Showcase selectedMain={selectedMain}/>
        <SubCategories setSelectedSub={setSelectedSub} selectedMain={selectedMain}/>
        <ListContainer 
        selectedMain={selectedMain} selectedSub={selectedSub} 
        addListCart={addListCart} listCart ={listCart}
        setTotalQty={setTotalQty}/>
        </> :
        <>
        <Cart listCart={listCart} setVisibleShop={setVisibleShop} setTotalQty={setTotalQty}/>
        <hr/>
        </>
        }
        <Contact />
        <Footer />

        </div>
    )
}
export default App;
