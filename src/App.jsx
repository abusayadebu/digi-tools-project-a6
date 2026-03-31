import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import PremiumTools from './components/PremiumTools'
import Products from './components/Products'
import Stat from './components/Stat'
import CartSection from './components/CartSection'
import EmptyCart from './components/EmptyCart'
import { toast, ToastContainer } from 'react-toastify'
import GetStarted from './GetStarted'
import PriceSection from './components/PriceSection'
import Footer from './components/Footer'
import WorkFlow from './components/WorkFlow'


// fetch products
 const fetchProducts = async () => {
  const res = await fetch("/productsData.json")
  return res.json();
 }
// fetch steps data
const fetchStepsData = async ()=>{
    const res = await fetch("/stepsData.json")
    return res.json();
}
// fetch price data
const fetchPriceData = async ()=>{
    const res = await fetch("/priceData.json")
    return res.json();
}



 const productPromise = fetchProducts();

//  step promise
const stepsPromise = fetchStepsData();
// price promise
const pricePromise = fetchPriceData();



function App() {
  
  const [activeBtn, setActiveBtn] = useState(true)
    // toggle buttons
    const handleProducts = () => {
          setActiveBtn(true)
          // checkout stop
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
    toast.success("product added to the cart")
    }
    else{
      toast.warning("sorry, product already added",{
        position: "top-left",
      });
    }
  }

  // remove cart function
  const removeCartFunction = (id) => {
      const updateCart = cart.filter(item => item.id !== id)
      setCart(updateCart)
      toast.warning("Cart Deleted",{
        position: "top-left",
      });

      // removed product find for price
      const removedProduct = cart.find(item => item.id === id)

      // minus
      setTotal(prev=> prev - removedProduct.price)

  }

  // checkout function
  const checkOutHandler = () =>{
    setCheckout(true)
    toast.success("Checkout Success, Thanks",{
        position: "top-center",
      });
    
    // clear cart ans total
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
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
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

      {/* get started section */}
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
      <GetStarted stepsPromise={stepsPromise}></GetStarted>
      </Suspense>

      {/* price Section */}
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <PriceSection pricePromise={pricePromise}></PriceSection>
      </Suspense>

      {/* workflow section */}
      <WorkFlow></WorkFlow>

      {/* footer section */}
      <Footer></Footer>
      
      {/* toast container */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App;