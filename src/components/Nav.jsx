import React from 'react'
import { Link } from "react-router-dom";

// styles
import '../sass/style.scss'

// media
import hamburger from '../assets/hamburger.svg'

function Nav() {
    function showDropdownMenu() {
        const dropDownMenu = document.getElementById("dropDownMenu")

        if(dropDownMenu.classList.contains("hide")) {
            dropDownMenu.classList.remove("hide")
        } else {
            dropDownMenu.classList.add("hide")
        }
    }

    return (
        <>
            <div className="side-nav">
                <Link to="/" className="side-nav__h1">Ruby Doyle</Link>
                <div className="side-nav__div">
                    <Link to="/about" className="side-nav__li">💁🏼‍♀️ About</Link>
                    <Link to="/web-development" className="side-nav__li">‍💻 Web Development</Link>
                    <Link to="/ux-ui" className="side-nav__li">✨ UX/UI</Link>
                    <Link to="/arcade" className="side-nav__li">👾 Arcade</Link>
                </div>
            </div>

            <div className="top-nav">
                <Link to="/" className="top-nav__heading">Ruby Doyle</Link>
                <img className="top-nav__img" src={hamburger} alt="hamburger menu icon" onClick={showDropdownMenu} />
            </div>

            <div className="menu-dropdown hide" id="dropDownMenu">
                <div className="menu-dropdown__div">
                    <Link to="/about" className="menu-dropdown__li">💁🏼‍♀️ About</Link>
                    <Link to="/web-development" className="menu-dropdown__li">‍💻 Web Development</Link>
                    <Link to="/ux-ui" className="menu-dropdown__li">✨ UX/UI</Link>
                    <Link to="/arcade" className="side-nav__li">👾 Arcade</Link>
                </div>
            </div>
        </>
    )
}

export default Nav
