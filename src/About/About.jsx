import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About=()=>{
    useEffect(()=>{
      AOS.init();
    },[])
    return(
        <>
     <div id='About' className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row"
  >
    <img data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="400"
      src="https://i.ibb.co.com/PhCxbtL/freepik-35mm-film-photography-a-young-caucasian-woman-with-75352.jpg"
      className="md:max-w-xl rounded-lg shadow-2xl" />
      <div   data-aos="fade-left"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine"
     data-aos-duration="500">

    <div className="space-y-4 text-white"
   >
    <p className="font-bold text-xl text-white ">___ABOUT ME</p>
      <h1 className="text-5xl text-cyan-600 font-bold">Who Am I</h1>
     <p className="" >
     Hi, I am Borsha Devi, a Junior React.js and Front-End Developer . I enjoy creating dynamic and responsive websites that give users a great experience. I have strong skills in JavaScript (ES6+), HTML5, CSS3,Tailwind CSS, and frameworks like React.js. I have worked on different projects, including an e-commerce website , where I focus on writing clean code and designing for users.
     <br />
     <span >I also have experience with MongoDB, Node.js and Express.js,   which helps me build full-stack applications and style them effectively. Right now, I am learning Next.js, a React framework, to improve my ability to build faster, server-side rendered websites. I am always excited to learn new technologies and take on challenges to grow my skills. My goal is to work on projects that make a real difference.</span>
     </p>
      
    </div>
      </div>
  </div>
</div>

        </>
    )
}
export default About;