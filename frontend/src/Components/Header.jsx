 import React from "react";
 import "../App.css";

 function Header() {
    const scrollToComponent = (element) => {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    return (
        <header className="bg-slate-700 text-white py-5 px-16 fixed w-full z-10">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl" >Jerold Shin</h2>
                <nav>
                    <div className="flex items-center">
                        <ul className="flex flex-row text-xl gap-10">
                            <li className="cursor-pointer"><button onClick={() => scrollToComponent(document.getElementById('Home'))} className="hover:bg-blue-500 px-3 py-2 rounded-md">Home</button></li>
                            <li className="cursor-pointer"><button onClick={() => scrollToComponent(document.getElementById('Education'))} className="hover:bg-blue-500 px-3 py-2 rounded-md">Education</button></li>
                            <li className="cursor-pointer"><button onClick={() => scrollToComponent(document.getElementById('Projects'))} className="hover:bg-blue-500 px-3 py-2 rounded-md">Projects</button></li>
                            <li className="cursor-pointer"><button className="hover:bg-blue-500 px-3 py-2 rounded-md">Skills</button></li>
                            <li className="cursor-pointer"><button className="hover:bg-blue-500 px-3 py-2 rounded-md">Contact</button></li>
                        </ul>
                        <div className="ml-10">ds</div>
                    </div>
                </nav>
                
            </div>
            
        </header>
    )
 }

 export default Header