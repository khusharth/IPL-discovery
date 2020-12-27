import React from "react";
import Search from "../Assets/search.svg";

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>
                <img className='header__img' src={Search} alt='logo' />
                IPL Discovery
            </h1>
        </header>
    );
};

export default Header;
