import datas from'../json'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects=()=>{
    useEffect(()=>{
        AOS.init();
      },[])
    console.log(datas)
    return(
        <>
        <div id='Project' className='mt-10 '>
        <h1 className="font-serif font-bold text-xl text-center text-white " data-aos="fade-up">__My Projects</h1>
        <div className=' grid lg:grid-cols-3 md:ml-10 grid-cols-1 ml-3 relative'>
           {
            datas.map(data => <div key={data.id} className="card bg-base-100 w-96 shadow-xl mt-5">
                <figure>
                  <img
                    src={data.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body absolute  opacity-0 hover:opacity-100 duration-1000 hover:duration-1000 hover:bg-cyan-800 hover:mt-32 hover:rounded-l-lg z-10">
                  <h2 className="card-title text-cyan-500">
                    {data.title}
                   
                  </h2>
                  <p className='text-white'>{data.description.slice(0,200)}...</p>
                  <div className="card-actions justify-end text-cyan-300">
                    <div className="border p-1 hover:text-cyan-100"><a href={data.liveLink}>Live Link</a></div>
                    <div className="border p-1 hover:text-cyan-100"><a href={data.githubLink}>Client Github</a></div>
                    <div className="border p-1 hover:text-cyan-100"><a href={data.servesitGitHubLink}>Sever Github</a></div>
                  </div>
                </div>
              </div>)
           }
        </div>
        </div>
       
        </>
    )
}
export default Projects;