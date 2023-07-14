import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="p-4 bg-gray-200">
            <div className="flex flex-row justify-center items-center gap-x-12">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                
            </div>
        </div>
    );
}

export default Header;