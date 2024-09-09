import ProjectCard from "./ProjectCard"
import ReactLogo from '../assets/React-Logo.png'
import twitterx from '../assets/twitterx.png'
import bettingIcon from '../assets/betting-icon.jpg'
import flaskLogo from '../assets/flask-logo.png'

export default function Projects() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 py-24" id="Projects">
            <div className="max-w-6xl mx-auto">
                <h5 className="text-5xl text-center font-bold">Projects</h5>
                <ProjectCard
                title="Portfolio website"
                description="Portfolio website made with React and Tailwind CSS."
                dotPoints={[]}
                languages={["HTML", "CSS", "JavaScript"]}
                libraries={[]}
                link="https://github.com/jss02/portfolio"
                date="2024"
                img={ReactLogo}
                />
                <ProjectCard
                title="Value Betting Software"
                description="Software that identifies live bookmaker pricings with positive expected value."
                dotPoints={["Calculating true odds of events using Pinnacle's odds", 
                    "Scraping dynamic websites with JavaScript-generated API data",
                    "Parsing html text into dictionaries containing odds, team names, match name, and datetime object of event",
                    "Matching events across different bookmakers with fuzzywuzzy"
                ]}
                languages={["Python"]}
                libraries={["Selenium", "BeautifulSoup4", "webdriver-manager, pytest, fuzzywuzzy"]}
                link="https://github.com/jss02/Value-betting-software"
                date="2024"
                img={bettingIcon}
                />
                <ProjectCard
                title="Twitter Fake News Detection Software"
                description="Fake news detector plugin for twitter/X using LLMs in a team of 5."
                dotPoints={["Developed software to scrape live website contents of top google search results",
                    "Worked on parsing scraped contents into list of readable strings for model training",
                    "Practiced scrum (agile) framework"
                ]}
                languages={["Python"]}
                libraries={["BeautifulSoup4", "NewsPlease", "Requests"]}
                date="2023"
                img={twitterx}
                />
                <ProjectCard
                title="UNSW Streams messaging app"
                description="Python backend server for Microsoft Teams replica 'UNSW Streams' in a team of 5."
                dotPoints={["Developed user authentication and session management with JWT",
                    "Implemented API endpoints featuring JWT authentication",
                    "Built password reset functionality with email reset code using smtplib",
                    "Created user profile picture upload function and user file management",
                    "Wrote unit tests for API endpoints with high coverage using pytest"
                ]}
                languages={["Python"]}
                libraries={["Flask", "pytest", "requests", "jwt"]}
                date="2021"
                img={flaskLogo}
                />
            </div>
        </div>
    )
}