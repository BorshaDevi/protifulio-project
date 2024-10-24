import { MdOutlineFileDownload } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import 'animate.css';
import  MyResume from '../assets/React Developer-Resume-file.pdf'
const Bannar=()=>{
    const handleDone = () => {
        console.log(`Done after 10 loops!`)
      }
  return(
    <>
    <div id='home'
  className="hero min-h-screen bg-fixed font-serif"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/FsFvR88/freepik-undefined-202410180613516-VK5.jpg)"
    ,
    
  }}>
  <div  className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  md:grid  md:grid-cols-2 ml-5  ">
    <div className="max-w-md  ">
        <p className="font-bold text-xl text-white mt-8 animate__animated animate__bounce animate__fadeInDown  animate__delay-1s">Hello___</p>
      <h1 className="mb-2 md:mt-5 text-6xl font-bold text-white  animate__animated animate__bounce animate__fadeInDown  animate__delay-2s" >I am <span className="text-cyan-400">Borsha Devi</span></h1>
      
      <p className="text-3xl text-white animate__animated animate__bounce animate__fadeInDown  animate__delay-3s" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        A Junior{' '}
        <span style={{ color: 'cyan', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 
              "Front end Developer",
               "React .js Developer",
               ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
        </span>
      </p>
      <a  href={MyResume} download className="btn  bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-r text-white cursor-pointer text-xl animate__animated animate__bounce animate__fadeInDown animate__delay-4s " >Resume <span className="text-xl animate-bounce"><MdOutlineFileDownload /></span></a>
    </div>
  </div>
</div>
    </>
  )
}
export default Bannar;