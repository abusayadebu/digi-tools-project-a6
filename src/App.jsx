import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import PremiumTools from './components/PremiumTools'
import Products from './components/Products'
import Stat from './components/Stat'
import Product from './components/Product'
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
    }
    const handleCart = () => {
          setActiveBtn(false)
    }

  
  // add to cart state
  let [cart, setCart] = useState([]);

  // cart function
  const addToCart = (product) => {
    // exist or not
    const isExist = cart.find(item => item.id === product.id)
    if(!isExist){
    setCart([...cart, product]);
    console.log(cart);
    alert("cart added")
    }
    else{
      alert("already added")
    }
  }

  return (
    <>
      <Navbar cart={cart}></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* stat section */}
      <Stat></Stat>
      {/* premium sools section */}
      <PremiumTools activeBtn={activeBtn} handleProducts={handleProducts} handleCart={handleCart} cart={cart}></PremiumTools>

      {/* products section */}
      <Suspense fallback={<p>Loading....</p>}>
      {
          activeBtn ? (
            <Products 
              addToCart={addToCart} 
              productPromise={productPromise}>
            </Products>
          ) : (
            cart.length === 0 ? <EmptyCart></EmptyCart> :
            <CartSection cart={cart}></CartSection>
          )
      }
      </Suspense>
    </>
  )
}

export default App




/*  const addToCart = (product)=>{

const exist = cart.find(item=>item.id === product.id);

if(!exist){
setCart([...cart,product]);
}

}
*/
