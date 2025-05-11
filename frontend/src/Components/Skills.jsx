import SkillCard from "./SkillCard"

export default function Skills() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 py-24" id="Skills">
            <div className="max-w-3xl mx-auto px-2 xl:px-0 text-center">
                <h5 className="text-5xl text-center font-bold">💻Skills</h5>
                <p className="text-xl my-5">⌨️Languages</p>
                <div className="flex flex-col justify-center gap-4 max-w-4xl">
                    <SkillCard name="Python" level="Proficient" img="https://www.vectorlogo.zone/logos/python/python-icon.svg"/>
                    <SkillCard name="JavaScript" level="Proficient" img="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"/>
                    <SkillCard name="HTML" level="Proficient" img="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"/>
                    <SkillCard name="CSS" level="Proficient" img="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"/>
                    <SkillCard name="C#" level="Intermediate" img="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png"/>
                    <SkillCard name="Java" level="Beginner" img="https://www.vectorlogo.zone/logos/java/java-icon.svg"/>
                    <SkillCard name="C" level="Beginner" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oGpUJuz7DJ6MaH6UmG3uL_n0DbXq6_LDkQ&s"/>
                </div>
                <p className="text-xl my-5">🔧Tools and frameworks</p>
                <div className="flex flex-col justify-center gap-4 max-w-4xl">
                <SkillCard name="ASP.NET" level="Intermediate" img="https://www.vectorlogo.zone/logos/dotnet/dotnet-tile.svg"/>
                    <SkillCard name="React" level="Intermediate" img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/>
                    <SkillCard name="Vue" level="Beginner" img="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"/>
                    <SkillCard name="Visual Studio" level="Intermediate" img="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"/>
                    <SkillCard name="git" level="Proficient" img="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"/>
                    <SkillCard name="Linux" level="Beginner" img="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"/>
                </div>

            </div>
        </div>
    )
}