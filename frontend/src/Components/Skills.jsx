import SkillCard from "./SkillCard"
import MousePositionWrapper from "./MousePositionWrapper"

export default function Skills() {
    return (
        <div className="bg-white dark:bg-slate-800 py-24" id="Skills">
            <div className="max-w-6xl mx-auto">
                <h5 className="text-5xl text-center font-bold">Skills</h5>
                <p className="text-xl my-5">Skills and technologies that I am familiar with:</p>
                <div className="flex flex-wrap justify-start gap-4">
                    <MousePositionWrapper>
                        <SkillCard name="Python" img="https://www.vectorlogo.zone/logos/python/python-icon.svg"/>
                        <SkillCard name="JavaScript" img="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg"/>
                        <SkillCard name="HTML" img="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"/>
                        <SkillCard name="CSS" img="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"/>
                        <SkillCard name="React" img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/>
                        <SkillCard name="Git" img="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"/>
                        <SkillCard name="Material UI" img="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"/>
                        <SkillCard name="C" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9Hm6YzVDnc31jkaaU3Wej-CaUeWXD4ljOw&s"/>
                        <SkillCard name="Tailwind CSS" img="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"/>
                        <SkillCard name="Java" img="https://www.vectorlogo.zone/logos/java/java-icon.svg"/>
                        <SkillCard name="Jira" img="https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"/>
                        <SkillCard name="Node.js" img="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"/>
                        <SkillCard name="Pytest" img="https://www.vectorlogo.zone/logos/pytest/pytest-icon.svg"/>
                        <SkillCard name="Flask" img="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"/>
                    </MousePositionWrapper>
                </div>
            </div>
        </div>
    )
}