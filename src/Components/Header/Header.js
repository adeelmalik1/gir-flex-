import React, { useState } from 'react';
import logoimg from "../../Images/logoimg.svg";
import searchSolid from "../../Images/search-solid.svg";
import SideBar from '../SideBar/SideBar';
import humBar from "../../Images/bars-solid.svg"
const Header = () => {
    const [menuBar, setMenuBar] = useState(false);
    const handleSideBar = () => {
        setMenuBar(!menuBar);
    }
    return(
        <>
            <nav>
               <div className='leftNav'>
               <div className='logo'>
                     <h1>I-plex</h1>
                </div>
               </div>
               
                <div className='rightNav'>
                      <div className='new-navbar'>
                            <ul>
                                <li>
                                    <a>About</a>
                                </li>
                                <li>
                                    <a>Blog</a>
                                </li>
                                <li>
                                    <a>Contact</a>
                                </li>
                            </ul>
                      </div>
                      <img onClick={handleSideBar} src={humBar}/>
                </div>
            </nav>
            <SideBar menuBar={menuBar}/>
        </>
    )
}

export default Header;