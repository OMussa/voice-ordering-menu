import { useState,useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';



function App() {
 const [cart, setCart] = useState([]) //cart is state and setCart is a function that will update cart, useState is taking the argumentn ([]) which is the inital value of cart
 const [menuItems, setMenuItems] = useState([])

 useEffect(() => {
  alanBtn({
      key: 'a40b38879e68d02f35bd2e3925bfb34f2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        console.log(commandData)
        if(commandData.command === 'getMenu'){
          setMenuItems(commandData.data)
        }else if(commandData.command === 'addToCart'){
          addToCart(commandData.data)
        }
      }
  });
}, []);

const addToCart = (menuItem) => { {/*takes the menuItem */}
setCart((oldCart) => {      
return [...oldCart, menuItem]  
{/* sets the cart to a new array that has all the elements of the old cart using the spread operator "..." and adding the new menuItem  */}
})
}


  return (
    <div className="App">
      {menuItems.map(menuItem =>(  //mapping through menuItems
        <li key={menuItem.name}>
          {menuItem.name} - ${menuItem.price} - {menuItem.category}
          <button onClick={()=> addToCart(menuItem)}>add to cart</button>   {/*calls the addToCart function and runs it onClick */}
          </li> 

  ))} 
      <h2>Cart</h2>
      {cart.map((cartItem) => (
        <li key={cartItem.name} >
       {cartItem.name} - ${cartItem.price} - {cartItem.category}
        </li>
      ))}
   </div>
  ) 
}

export default App;
