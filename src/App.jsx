import About from "./About/About"
import Bannar from "./Bannar/Bannar"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"


function App() {


  return (
    <>
      <div>
       <Navbar></Navbar>
       <Bannar></Bannar>
      <About></About>
    <Skills></Skills> 
      <Projects></Projects>  
      <Footer></Footer>    
      </div>
     
    </>
  )
}

export default App
