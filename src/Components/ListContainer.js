import React from 'react';
import ListItem from './ListItem';
import  shopData from '../Data/shopData.json';

function ListContainer({selectedMain, selectedSub, addListCart, setCartQty, listCart,setTotalQty}){
    const data = shopData.filter(post => post.main === selectedMain && post.sub === selectedSub)
   
    return(
    <div className="listcontainer">
        {data.map(post => {
            return(
            
                <ListItem 
                key ={post.id}
                productID ={post.id}
                main = {post.main}
                sub ={post.sub}
                name = {post.name}
                stock = {post.stock}
                price = {post.price}
                sizes = {post.sizes}
                color = {post.color}
                imgUrl = {post.imgUrl}
                addListCart ={addListCart}
                setCartQty={setCartQty}
                listCart={listCart}
                setTotalQty={setTotalQty}
                />
           
            )
        })
        }
    </div>

)   

}


export default ListContainer;











// import React from 'react';
// import ListItem from './ListItem';
// import  shopData from '../Data/shopData.json';
// function ListContainer(){
//     return(
//     <div>
//         {shopData.map(post => {
//             return(
//                 <> 
//                 <ListItem 
//                 key ={post.id}
//                 gender = {post.gender}
//                 category ={post.category}
//                 name = {post.name}
//                 stock = {post.stock}
//                 price = {post.price}
//                 sizes = {post.sizes}
//                 color = {post.color}
//                 imgUrl = {post.imgUrl}
//                 />
//                 </>
//             )
//         })
//         }
//     </div>

// )   
    
// }


// export default ListContainer;

