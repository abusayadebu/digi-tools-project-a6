import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import PremiumTools from './components/PremiumTools'
import Products from './components/Products'
import Stat from './components/Stat'
import CartSection from './components/CartSection'
import EmptyCart from './components/EmptyCart'



 const fetchProducts = async () => {
  const res = await fetch("/productsData.json")
  return res.json();
 }

 const productPromise = fetchProducts();

function App() {
  
  const [activeBtn, setActiveBtn] = useState(true)
    // toggle buttons
    const handleProducts = () => {
          setActiveBtn(true)
          setCheckout(false)
    }
    const handleCart = () => {
          setActiveBtn(false)
          
    }

  
  // add to cart state
  let [cart, setCart] = useState([]);
  // total state
  let [total, setTotal] = useState(0);
  // checkout state
  const [isCheckout, setCheckout] = useState(false)

  // cart function
  const addToCart = (product) => {
    // exist or not
    const isExist = cart.find(item => item.id === product.id)
    if(!isExist){
    setCart([...cart, product]);
    
    // total price add
    setTotal(prev=> prev + product.price)
    alert("cart added")
    }
    else{
      alert("already added")
    }
  }

  // remove cart function
  const removeCartFunction = (id) => {
      const updateCart = cart.filter(item => item.id !== id)
      setCart(updateCart)

      // removed product find for price
      const removedProduct = cart.find(item => item.id === id)

      // minus
      setTotal(prev=> prev - removedProduct.price)

  }

  // checkout function
  const checkOutHandler = () =>{
    setCheckout(true)
    setCart([])
    setTotal(0);
  }



  return (
    <>
      <Navbar cart={cart}></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* stat section */}
      <Stat></Stat>
      {/* premium sools section */}
      <PremiumTools activeBtn={activeBtn} handleProducts={handleProducts} handleCart={handleCart} cart={cart} isCheckout={isCheckout}></PremiumTools>

      {/* products section */}
      <Suspense fallback={<p>Loading....</p>}>
      {
          activeBtn ? (
            <Products 
              addToCart={addToCart} 
              productPromise={productPromise}>
            </Products>
          ) : (
            isCheckout || cart.length === 0 ? <EmptyCart></EmptyCart> :
            <CartSection checkOutHandler={checkOutHandler} isCheckout={isCheckout} total={total}  cart={cart} removeCartFunction={removeCartFunction}></CartSection>
          )
      }
      </Suspense>
    </>
  )
}

export default App;