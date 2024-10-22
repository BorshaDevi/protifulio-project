import About from "./About/About"
import Bannar from "./Bannar/Bannar"
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
      </div>
     
    </>
  )
}

export default App
