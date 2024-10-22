import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const Skills=()=>{
    useEffect(()=>{
        AOS.init();
      },[])
    return (
        <>
        <div id='Skills' >
       
        <Marquee pauseOnHover={true}
        
        >
        <div className="flex gap-5">
        <div className="border  hover:border-orange-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-orange-600 bg-gradient-to-r from-orange-700 to-orange-400 grid justify-center items-center p-6 w-40 h-1/2 rounded-tl-[30px] ">
            <img  className='rounded-full w-16' src="https://i.ibb.co.com/MZLVz2M/png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbn.png" alt="html" />
            <br />
            <p className="font-bold font-serif text-white">HTML</p>
        </div>
        <div className="border hover:border-blue-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-blue-600 bg-gradient-to-r from-blue-700 to-blue-400 grid justify-center items-center p-6 w-40 h-1/2 rounded-tl-[30px] ">
            <img className='rounded-full w-16' src="https://i.ibb.co.com/4j1PS3w/png-transparent-web-development-cascading-style-sheets-css3-computer-icons-css-miscellaneous-blue-an.png" alt="css" />
            <br />
            <p className="font-bold font-serif text-white">CSS</p>
        </div>
        <div className="border hover:border-cyan-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-cyan-600 bg-gradient-to-r from-cyan-700 to-blue-400 grid justify-center items-center p-6 w-40 h-40 rounded-tl-[30px] ">
            <img  className='rounded-full w-16'src="https://i.ibb.co.com/BnPX0Pz/png-transparent-tailwind-css-hd-logo-thumbnail.png" alt="Tailwind" />
            <br />
            <p className="font-bold font-serif text-white">Tailwind</p>
        </div>
       
        <div className="border hover:border-yellow-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-yellow-600 bg-gradient-to-r from-yellow-700 to-yellow-400 grid justify-center items-center p-6 w-40 h-1/2 rounded-tl-[30px] ">
            <img  className='rounded-full w-16'src="https://i.ibb.co.com/3kkZqqn/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="js" />
            <br />
            <p className="font-bold font-serif text-white">JavaScript</p>
        </div>
        <div className="border hover:border-cyan-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-cyan-600 bg-gradient-to-r from-cyan-700  to-cyan-400 grid justify-center items-center p-6 w-40 h-1/2 rounded-tl-[30px] ">
            <img className='rounded-full w-16 ' src="https://i.ibb.co.com/GM8pqz9/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react" />
            <br />
            <p className="font-bold font-serif text-white">React</p>
        </div>
        <div className="border hover:border-green-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-green-600 bg-gradient-to-r from-green-700 to-green-400 grid justify-center items-center p-6 w-40 h-40 rounded-tl-[30px] ">
            <img className='rounded-full w-16' src="https://i.ibb.co.com/cYnf7H1/png-transparent-node-js-javascript-hazelcast-openshift-runtime-system-node-js-angle-text-logo-thumbn.png" alt="node" />
            <br />
            <p className="font-bold font-serif text-white">Node</p>
        </div>
        <div className="border hover:border-slate-700 hover:border-t-4 hover:border-r-4 hover:border-l-4 border-slate-600 bg-gradient-to-r from-slate-700 to-slate-400 grid justify-center items-center p-6 w-40 h-3/4 rounded-tl-[30px] ">
            <img className='rounded-full w-16' src="https://i.ibb.co.com/MBZ3pLh/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png" alt="ex" />
            <br />
            <p className="font-bold font-serif text-white">Express</p>
        </div>
        <div className="border hover:border-t-4 hover:border-r-4 hover:border-l-4 border-green-600 bg-gradient-to-r from-green-700 to-green-400 grid justify-center items-center p-6 w-40 h-1/2 rounded-tl-[30px] ">
            <img  className='rounded-full w-16' src="https://i.ibb.co.com/yFDQRJ8/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="mongodb" />
            <br />
            <p className="font-bold font-serif text-white">MongoDB</p>
        </div>
        </div>
        </Marquee>
        <div className="mx-auto text-center"
        >
        <p>HTML</p>
         <input type="range"  min={0} max="100" defaultValue="100" className="range range-xs [--range-shdw:cyan] w-1/3" 
     
      />
         <p>CSS</p>
         <input type="range" min={0} max="100" defaultValue="60" className="range range-xs [--range-shdw:cyan] w-1/3" 
   
      />
         <p>Tailwind</p>
         <input type="range" min={0} max="100" defaultValue="100" className="range range-xs [--range-shdw:cyan] w-1/3"  
     
     />
         <p>JavaScript</p>
         <input type="range" min={0} max="100" defaultValue="50" className="range range-xs [--range-shdw:cyan] w-1/3" 
    
      />
         <p>React</p>
         <input type="range" min={0} max="100" defaultValue="50" className="range range-xs [--range-shdw:cyan] w-1/3" 
    
      />
        </div>
        </div>
        
        </>

    )
}
export default Skills;