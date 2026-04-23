import "../component-styles/NavBar.css"
import Image from "next/image";
import DropDown from "./icons8-menu-48.png"
import Logo from "./Yvonne_logo.png"




export default function NavBar() {
    return(
        <div className="nav_div">
            <div className="">
                <nav className="container">
                    <div className="logo_div">
                       <img src="./Yvonne_logo.png" alt="" className="yvonneLogo" />
                       <span className="logoText">vonne.dev</span>
                    </div>
                    <div className="navigation_container">
                        <div className="nav_item">Home</div>
                        <div className="nav_item">About Me</div>
                        <div className="nav_item">Contact Me</div>
                        <div className="nav_item">GitHub Projects</div>
                    </div>
                    <div className="dropdown_div">
                         <img src="./icons8-menu-48.png" alt="" className="dropdown_div" />
                    </div>
                </nav>
            </div>
        </div>
    );
}