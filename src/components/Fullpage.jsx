import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Homepage from "./Homepage";

export default function Fullpage(){
    const [page, setPage] = useState("home");
    const [sides, setsides] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Function to check screen width
    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    // Listen for window resize
    useEffect(() => {
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return(
        <>
            {/* Navbar */}
            <div className="w-full h-14 bg-[#F4F2E9] flex flex-wrap justify-between  fixed top-0 left-0 z-50">
                {/* Logo */}
                <img src="./insight_logo.png" 
                    alt="insight logo" 
                    className="h-12 w-[120px] ml-4 mt-1 hover:h-14 hover:w-[140px] hover:cursor-pointer 
                            transition-all duration-300 ease-in-out"
                />

                {/* Mobile Menu Icon */}
                {isMobile ? (
                    <FontAwesomeIcon
                        icon={sides ? faTimes : faBars}
                        onClick={() => setsides(!sides)}
                        className="text-slate-800 text-3xl p-2 cursor-pointer"
                    />
                ) : null}

                {/* Navigation Links (Visible on Desktop) */}
                {!isMobile && (
                    <div className="flex flex-wrap w-auto h-14 p-1 text-slate-900 items-center text-xl justify-around">
                        <span className="ml-10 hover:text-amber-900 cursor-pointer">Academics</span>
                        <span className="ml-10 hover:text-amber-900 cursor-pointer">Career</span>
                        <span className="ml-10 hover:text-amber-900 cursor-pointer">Personal</span>
                        <span className="ml-10 hover:text-amber-900 cursor-pointer">Miscellaneous</span>
                    </div>
                )}
            </div>

            {/* Dropdown Menu (Appears on Click) */}
            {sides && (
                <div className="flex flex-col w-[175px] rounded-xl p-5 absolute right-2 top-16 text-slate-900 items-center text-lg bg-amber-100 shadow-lg">
                    <a href="/" className="cursor-pointer my-2 hover:text-amber-900">Academics</a>
                    <a href="/" className="cursor-pointer my-2 hover:text-amber-900">Career</a>
                    <a href="/" className="cursor-pointer my-2 hover:text-amber-900">Personal</a>
                    <a href="/" className="cursor-pointer my-2 hover:text-amber-900">Miscellaneous</a>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#F4F2E9] pt-16">
                {page === "home" && <Homepage />}
            </div>
        </>

    );
}