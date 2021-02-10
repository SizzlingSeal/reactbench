import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function ListItem(props){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('');
    function openModal() {
        setIsOpen(true);
      }
      function closeModal(){
        
        setIsOpen(false);
      }

      function increase(){
        qty < props.stock && setQty(qty + 1);
      }
      function decrease(){
        qty > 1 && setQty(qty - 1);
      }
      
      function addToCart(){
        if(size === '' && ( props.main === 'Male' || props.main === 'Female' || props.main === 'underwear')){
          alert("Please input size!");
        }else{
          if(props.listCart.some(cart => cart.id === props.productID && cart.size === size)){
            alert("duplicate maybe?");
            props.addListCart(props.listCart.map(cart => {
              if(cart.id === props.productID && cart.size === size){
                return {...cart, qty: cart.qty + qty, total: cart.total + qty * props.price}
              }
              return cart
            }))
          }else if(props.listCart.some(cart => cart.id === props.productID && cart.size !== size)){
        
        props.addListCart(oldCart =>  [...oldCart, {
          id: props.productID + 100 * Math.random(),
          name:props.name,
          price:props.price,
          imgUrl:props.imgUrl,
          qty:qty,
          size: size,
          total: qty * props.price
        }]);
        
        }else{
          props.addListCart(oldCart =>  [...oldCart, {
            id: props.productID,
            name:props.name,
            price:props.price,
            imgUrl:props.imgUrl,
            qty:qty,
            size: size,
            total: qty * props.price
          }]);
        }
        props.setTotalQty(oldQty => oldQty + qty);
        setSize('');
        closeModal();
      }
        
      }



      // function addToCart(){
      //   if(size === ''){
      //     alert("Please input size!");
      //   }else{
      //     if(props.listCart.some(cart => cart.id === props.productID && cart.size === size)){
      //       alert("duplicate maybe?");
      //       props.addListCart(props.listCart.map(cart => {
      //         if(cart.id !== props.productID) return cart
      //         return {...cart, qty: qty + qty}
      //       }))
      //       props.setTotalQty(oldQty => oldQty + qty)
      //     }else{
      //   props.setTotalQty(oldQty => oldQty + qty)
      //   props.addListCart(oldCart =>  [...oldCart, {
      //     id: props.productID,
      //     name:props.name,
      //     price:props.price,
      //     imgUrl:props.imgUrl,
      //     qty:qty,
      //     size: size,
      //     total: qty * props.price
      //   }]);
      //   closeModal();
      //   }
      // }
        
      // }

      function addSize(i){
        setSize(i);
      }
      

    return(
        <div className="listitem">
        <img src={props.imgUrl} alt="product"/>
        <h4>{props.name}</h4>
        <p>₱{props.price}</p>
        <button onClick={openModal}>Add To Cart</button>


        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        >
        <div className="imgCheck"><img src={props.imgUrl} alt="product"/></div>
        <h4>{props.name}</h4>
        <p>₱{props.price}</p>
        <p>Stock:{props.stock}</p>
        {props.sub === 'tshirt'  &&
        <div className="sizes"> 
        <label>Sizes:</label>
          <button onClick={() => addSize('S')}>S</button>
          <button onClick={() => addSize('M')}>M</button>
          <button onClick={() => addSize('L')}>L</button>
          
        </div>}
        {props.sub === 'bra'  &&
        <div className="sizes"> 
        <label>Sizes:</label>
          <button onClick={() => addSize('S')}>S</button>
          <button onClick={() => addSize('M')}>M</button>
          <button onClick={() => addSize('L')}>L</button>
        </div>}
        {props.sub === 'briefs'  &&
        <div className="sizes"> 
        <label>Sizes:</label>
          <button onClick={() => addSize('S')}>S</button>
          <button onClick={() => addSize('M')}>M</button>
          <button onClick={() => addSize('L')}>L</button>
          
        </div>}
        
        <div className="quantity">
            <label>Quantity:</label>
            <button onClick={decrease}>-</button>
            <p>{qty}</p>
            <button onClick={increase}>+</button>
        </div>

        <button className="add" onClick={addToCart}>Add To Cart</button>
        </Modal>


        </div>
    )
}

export default ListItem;