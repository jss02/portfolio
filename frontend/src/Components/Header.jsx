 import React from "react";
 import "../App.css";

 function Header() {
    return (
        <header className="bg-slate-700 text-white py-6 px-16 fixed w-full">
            <div className="flex justify-between items-center">
                <h2 className="text-4xl" >Jerold Shin</h2>
                <nav>
                    <div className="flex items-center">
                        <ul className="flex flex-row text-2xl gap-10">
                            <li className="cursor-pointer"><a className="hover:bg-blue-500 px-3 py-2 rounded-md">Home</a></li>
                            <li className="cursor-pointer"><a className="hover:bg-blue-500 px-3 py-2 rounded-md">Education</a></li>
                            <li className="cursor-pointer"><a className="hover:bg-blue-500 px-3 py-2 rounded-md">Projects</a></li>
                            <li className="cursor-pointer"><a className="hover:bg-blue-500 px-3 py-2 rounded-md">Skills</a></li>
                            <li className="cursor-pointer"><a className="hover:bg-blue-500 px-3 py-2 rounded-md">Contact</a></li>
                        </ul>
                        <div className="ml-10">ds</div>
                    </div>
                </nav>
                
            </div>
            
        </header>
    )
 }

 export default Header