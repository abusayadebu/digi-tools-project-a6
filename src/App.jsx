import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import PremiumTools from './components/PremiumTools'
import Products from './components/Products'
import Stat from './components/Stat'
import Product from './components/Product'



 const fetchProducts = async () => {
  const res = await fetch("/productsData.json")
  return res.json();
 }

function App() {

  const productPromise = fetchProducts();

  return (
    <>
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* stat section */}
      <Stat></Stat>
      {/* premium sools section */}
      <PremiumTools></PremiumTools>
      {/* products section */}
      <Suspense fallback={<p>Loading....</p>}>
        <Products productPromise={productPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
