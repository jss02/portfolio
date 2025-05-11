import React from "react";
import ExperienceCard from "./ExperienceCard";
import ScrollAnimator from "./ScrollAnimator";
import UNSWLogo from '../assets/UNSW-logo.png'
import PHSLogo from '../assets/PHS-logo.gif'

export default function Education() {
    return (
        <div className=" bg-slate-50 dark:bg-slate-900 py-24" id="Education">
            <div className="max-w-6xl mx-auto px-2 xl:p-0">
                <h4 className="text-5xl text-center font-bold">📚Education</h4>
                <ScrollAnimator animation="slide-in-left">
                    <ExperienceCard 
                    title="UNSW"
                    description="Bachelor of Science (Computer Science)"
                    dotPoints={["Distinction WAM", "Academic Achievement Award (AAA) Scholarship"]}
                    startDate="2021"
                    endDate="2024"
                    type="University"
                    img={UNSWLogo}
                    />
                </ScrollAnimator>
                <hr className="md:hidden rounded-lg mx-10 bg-black dark:bg-white"></hr>
                <ScrollAnimator animation="slide-in-left">
                    <ExperienceCard
                    title="Parramatta High School"
                    dotPoints={["98.55 ATAR", "Peer Support Training Volunteer"]}
                    startDate="2015"
                    endDate="2020"
                    type="Secondary Education"
                    img={PHSLogo}
                    />
                </ScrollAnimator>
                
            </div>
            
        </div>
    )
}
