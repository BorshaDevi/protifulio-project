import About from "./About/About"
import Bannar from "./Bannar/Bannar"
import Blog from "./Blog/Blog"
import Navbar from "./Navbar/Navbar"
import Projects from "./Projects/Projects"


function App() {


  return (
    <>
      <div>
       <Navbar></Navbar>
       <Bannar></Bannar>
      <About></About>
      <Blog></Blog> 
      <Projects></Projects>      
      </div>
     
    </>
  )
}

export default App
