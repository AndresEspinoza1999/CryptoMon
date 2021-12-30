import React from 'react'
import "./header.css"
import logo from "../components/assests/header/PngItem_4839646.png"
import SearchIcon from "../components/assests/header/search.png"
const Header = () => {
    return (
        <div className='header'>
            <div className="logoContainer">
                <img src={logo} className='pokelogo' alt='logo'/>
             </div>
             <div className="searchBar">
                 <div className="searchIconContainer">
                     <img src={SearchIcon} className="searchicon"/>
                 </div>
                 <div className="searchInput">
                     <input type="text" name="SeachBar" className="inputbar" placeholder='Collelction, item, userS'/>
                 </div>
             </div>
        </div>
        
    )
}

export default Header
