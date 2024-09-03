import React from "react";
import githubLightLogo from '../assets/github-mark-white.png';
import linkedinLogo from '../assets/LI-In-Bug.png'
import '../App.css';

export default function Home() {
    return (
        <div className="bg-slate-900 text-white">
            <main className="flex flex-col items-center justify-center h-screen gap-10">
                <h1 className="text-6xl font-bold">Hi I'm Jerold</h1>
                <p className="text-3xl">I'm a student🎓 at UNSW studying B Computer Science, set to graduate
                    at the end of 2024.
                </p>
                <div className="flex flex-row gap-5">
                    <a href='https://github.com/jss02' target="_blank"><img src={githubLightLogo} className="h-16 hover:scale-110"></img></a>
                    <a href='https://www.linkedin.com/in/jerold-shin' target="_blank"><img src={linkedinLogo} className="h-16 hover:scale-110"></img></a>
                    <button className="px-16 py-5 bg-blue-500 hover:scale-110 rounded-lg">Resume</button>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <h3 className="text-3xl">Find out more about my education, projects, and skills below.</h3>
                    <button className="hover:scale-110">
                        <svg width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" fill="#3B82F6" r="32"/>
                            <path d="m47.8 30h-7.8v-12c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v12h-7.8c-2.7 0-3.5 1.9-1.7 4.1l14.3 18.1c1.8 2.3 4.7 2.3 6.5 0l14.3-18.1c1.7-2.2 1-4.1-1.8-4.1z" fill="#231f20" opacity=".2"/>
                            <g fill="#fff">
                            <path d="m24 16c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4z"/>
                            <path d="m47.8 28c2.7 0 3.5 1.9 1.7 4.1l-14.2 18.2c-1.8 2.3-4.7 2.3-6.5 0l-14.3-18.2c-1.8-2.3-1-4.1 1.7-4.1z"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </main>
        </div>
    )
}