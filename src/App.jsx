import About from "./About/About"
import Bannar from "./Bannar/Bannar"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"


function App() {


  return (
    <>
      <div className="bg-black">
       <Navbar></Navbar>
       <Bannar></Bannar>
      <About></About>
    <Skills></Skills> 
      <Projects></Projects>
      <Contact></Contact> 
      <Footer></Footer>    
      </div>
     
    </>
  )
}

export default App
