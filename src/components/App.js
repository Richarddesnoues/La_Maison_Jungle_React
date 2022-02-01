import React, { useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
//import PlantItem from './PlantItem'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
//import QuestionForm from './QuestionForm'
import { useState } from 'react'




export default function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart):[])
  console.log(savedCart)
 useEffect(() => {
   localStorage.setItem('cart', JSON.stringify(cart, ))
 }, [cart] )

  // ToDo se renseigner sur JSON.stringify
  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
      
    </div>
  )

}

