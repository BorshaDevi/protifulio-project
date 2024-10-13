import { Typewriter } from 'react-simple-typewriter'
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
const About=()=>{
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    return(
        <>
        <div id='About' className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-start flex-col lg:flex-row">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">I am Borsha Devi</h1>
      <p style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        I am a passionate{' '}
        <span style={{ color: 'cyan', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ "Front end Developer",
               "React .js",
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
     
     <div className='flex gap-5'>
        <a href='https://www.linkedin.com/in/borshadevinew27198/'><AiFillLinkedin /></a>
        <a href='https://github.com/BorshaDevi'><IoLogoGithub /></a>
        
     </div>
    </div>
  </div>
</div>
        </>
    )
}
export default About;