import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Stat from './components/Stat'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      {/* stat section */}
      <Stat></Stat>
    </>
  )
}

export default App
