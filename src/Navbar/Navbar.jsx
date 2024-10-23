
import { DiNancy } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
const  Navbar=()=>{
    const links=<div className="flex gap-8 font-serif font-semibold  ">
    <a href="#home" className="hover:text-cyan-200 hover:underline ">Home</a>
    <a href="#About" className="hover:text-cyan-200 hover:underline  ">About</a>
    <a href='#Skills' className="hover:text-cyan-200 hover:underline">Skills</a>
    <a href='#Project' className="hover:text-cyan-200 hover:underline">Project</a>
    <a href='#Contact'className="hover:text-cyan-200 hover:underline">Contact</a>
    </div>
    return(
        <>
        <div className="navbar bg-glass fixed z-[50] flex justify-between ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className=" text-3xl text-cyan-300 font-bold  flex font-serif"><img src="https://i.ibb.co.com/xFmHGbz/code-file-11222847.png" alt="" className="w-10" /> Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {links}
    </ul>
  </div>
  <div className='flex gap-5 text-3xl'>
        <a href='https://www.linkedin.com/in/borshadevinew27198/' className="hover:bg-cyan-400 text-white"><AiFillLinkedin /></a>
        <a href='https://github.com/BorshaDevi' className="hover:text-white text-white"><IoLogoGithub /></a>
        
     </div>
  
</div>
        </>
    )
}
export default Navbar;