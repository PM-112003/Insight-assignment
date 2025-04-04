import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Homepage from "./Homepage";
import Miscellaneous from "./Miscellaneous";
import Personal from "./Personal";
import Academics from "./Academics";
import Career from "./Career";

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
            <div className="w-full h-14 bg-[#F4F2E9] flex flex-wrap justify-between fixed top-0 left-0 z-50">
                {/* Logo */}
                {page==="home"?
                    (
                        <img src="./insight_logo.png" 
                            alt="insight logo" 
                            className="h-12 w-[120px] ml-4 mt-1 hover:h-14 hover:w-[140px] hover:cursor-pointer 
                                    transition-all duration-300 ease-in-out"
                            onClick={()=>{setPage("home")}}
                        />
                    ): (
                        <img src="./senior_survey.png" 
                            alt="insight logo" 
                            className="h-12 w-[200px] ml-4 mt-2 hover:h-14 hover:w-[250px] hover:cursor-pointer 
                                    transition-all duration-300 ease-in-out"
                            onClick={()=>{setPage("home")}}
                        />
                    )
                }

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
                        <span className="ml-10 hover:text-amber-900 cursor-pointer" onClick={()=>{setPage("Academics")}}>Academics</span>
                        <span className="ml-10 hover:text-amber-900 cursor-pointer" onClick={()=>{setPage("Career")}}>Career</span>
                        <span className="ml-10 hover:text-amber-900 cursor-pointer" onClick={()=>{setPage("Personal")}}>Personal</span>
                        <span className="ml-10 hover:text-amber-900 cursor-pointer" onClick={()=>{setPage("Miscellaneous")}}>Miscellaneous</span>
                    </div>
                )}
            </div>

            {/* Dropdown Menu (Appears on Click) */}
            {sides && (
                <div className="flex flex-col w-[175px] rounded-xl z-50 p-5 fixed right-2 top-16 text-slate-900 items-center text-lg bg-amber-100 shadow-lg">
                    <span className="cursor-pointer my-2 hover:text-amber-900" onClick={()=>{setPage("Academics")}}>Academics</span>
                    <span className="cursor-pointer my-2 hover:text-amber-900" onClick={()=>{setPage("Career")}}>Career</span>
                    <span className="cursor-pointer my-2 hover:text-amber-900" onClick={()=>{setPage("Personal")}}>Personal</span>
                    <span className="cursor-pointer my-2 hover:text-amber-900" onClick={()=>{setPage("Miscellaneous")}}>Miscellaneous</span>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#F4F2E9] pt-16">
                {page === "home" && <Homepage setPage={setPage}/>}
                {page === "Academics" && <Academics></Academics>}
                {page === "Career" && <Career></Career>}
                {page === "Personal" && <Personal></Personal>}
                {page === "Miscellaneous" && <Miscellaneous></Miscellaneous>}
            </div>
        </>

    );
}