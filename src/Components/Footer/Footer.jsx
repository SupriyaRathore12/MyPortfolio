import React from "react";
import {FaArrowUp} from "react-icons/fa";
const Footer=()=>{
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
    return(
        <footer className="bg-black text-white text-center py-6 relative">
            <p className="text-sm">
                copyright © 2025 Design by <span className="text-cyan-400 font-bold">Supriya Rathore</span>
            </p>

            <button onClick={scrollToTop} className="absolute right-6 top-1/2 -translate-y-1/2 bg-cyan-500 text-black p-2 rounded-full hover:bg-cyan-400 transition">
            <FaArrowUp />

            </button>
            
        </footer>
    )
}
export default Footer;