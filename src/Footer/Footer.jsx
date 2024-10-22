import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Footer=()=>{
    return(
        <>
        <footer className="footer text-white bg-glass items-center p-4">
  <aside className="grid-flow-col items-center">
  <MdOutlineMarkEmailUnread className="text-2xl" />
  <p>borshadevi27@gmail.com</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
  <a href='https://www.linkedin.com/in/borshadevinew27198/' className="hover:bg-cyan-400 text-white"><AiFillLinkedin /></a>
  <a href='https://github.com/BorshaDevi' className="hover:text-white text-white"><IoLogoGithub /></a>
    
  </nav>
</footer>
        </>
    )
}
export default Footer;