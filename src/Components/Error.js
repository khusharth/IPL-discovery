import React from "react";
import SadSvg from "../Assets/sad.svg";

const Error = ({ message }) => {
    return (
        <div className='error'>
            <img className='error__icon' src={SadSvg} alt='error' />
            <span className='error__message'>{message}</span>
        </div>
    );
};

export default Error;
