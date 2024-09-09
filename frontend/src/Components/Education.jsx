import React from "react";
import ExperienceCard from "./ExperienceCard";
import ScrollAnimator from "./ScrollAnimator";
import UNSWLogo from '../assets/UNSW-logo.png'
import PHSLogo from '../assets/PHS-logo.gif'

export default function Education() {
    return (
        <div className=" bg-white dark:bg-slate-800 py-24" id="Education">
            <div className="max-w-6xl mx-auto">
                <h4 className="text-5xl text-center font-bold">Education</h4>
                <ScrollAnimator animation="slide-in-left">
                    <ExperienceCard 
                    title="UNSW"
                    description="Bachelor of Science (Computer Science)"
                    dotPoints={["75.27 WAM (Current)", "Academic Achievement Award (AAA) Scholarship"]}
                    startDate="2021"
                    endDate="2024"
                    type="University"
                    img={UNSWLogo}
                    />
                </ScrollAnimator>
                
                <ScrollAnimator animation="slide-in-left">
                    <ExperienceCard
                    title="Parramatta High School"
                    dotPoints={["98.55 ATAR", "Peer Support Training Volunteer (2019)"]}
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
