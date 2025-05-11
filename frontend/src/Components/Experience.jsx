import React from "react";
import ExperienceCard from "./ExperienceCard";
import ScrollAnimator from "./ScrollAnimator";
import EYBLogo from '../assets/EYB-Logo.png'

export default function Experience() {
    return (
        <div className="bg-white dark:bg-slate-800 py-24" id="Experience">
            <div className="max-w-6xl mx-auto px-2 xl:p-0">
                <h4 className="text-5xl text-center font-bold">💼Experience</h4>
                <ScrollAnimator animation="slide-in-left">
                    <ExperienceCard 
                    title="Junior Full Stack Developer"
                    description="EYB Solutions"
                    dotPoints=
                    {[
                        "Developed responsive and interactive frontend components from Figma designs using HTML, CSS, JavaScript, and jQuery.", 
                        "Built API endpoints within Razor Page Models to handle data operations and server-side logic in ASP.NET.",
                        "Refactored and maintained existing codebase by organizing functionality into reusable partial pages and backend objects.",
                        "Debugged, validated, and manually tested front-end and back-end functionalities to ensure accurate behavior and seamless integration"
                    ]}
                    startDate="2025"
                    img={EYBLogo}
                    />
                </ScrollAnimator>
            </div>
        </div>
    )
}
