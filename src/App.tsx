import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Difference from "./components/Difference"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <Difference />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
