import ProjectCard from "./ProjectCard"
import ReactLogo from '../assets/React-Logo.png'
import twitterx from '../assets/twitterx.png'
import bettingIcon from '../assets/betting-icon.jpg'
import flaskLogo from '../assets/flask-logo.png'
import edstemLogo from '../assets/edstem.png'
import presentation from '../assets/presentation.png'
import nrlLogo from '../assets/nrl-logo.png'

export default function Projects() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 py-24" id="Projects">
            <div className="max-w-6xl mx-auto">
                <h5 className="text-5xl text-center font-bold">Projects</h5>
                <ProjectCard
                title="NRL.com Data Scraper"
                description="Web scraper that extracts data and stats from NRL.com"
                dotPoints={[" Implemented web scraper that extracts match details, team statistics, and player statistics from NRL.com",
                    "Designed and developed PostgreSQL storage solution for match data",
                    "Developed bulk scraping functionality to retrieve match data for multiple seasons or rounds",
                    "Addressed content variability through adaptive parsing by identifying potential missing data points and assigning appropriate default values"
                ]}
                languages={["Python"]}
                libraries={["BeautifulSoup4", "requests", "psycopg2"]}
                link="https://github.com/jss02/NRL-scraper"
                date="2025"
                img={nrlLogo}
                />
                
                <ProjectCard
                title="Portfolio website"
                description={<a href="https://jeroldshin.vercel.app/" target="_blank" rel='noreferrer' className="underline text-blue-600">https://jeroldshin.vercel.app</a>}
                dotPoints={["Responsive portfolio website developed with React and Tailwind CSS",
                    "EmailJS integration for serverless emails",
                    "Dark mode feature",
                    "Deployed on vercel"
                ]}
                languages={["HTML", "CSS", "JavaScript"]}
                libraries={["React", "EmailJS", "react-scroll"]}
                link="https://github.com/jss02/portfolio"
                date="2024"
                img={ReactLogo}
                />
                <ProjectCard
                title="Arbitrage Betting Software"
                description="Software that identifies live bookmaker pricings with positive expected value."
                dotPoints={["Developed software to scrape live odds of sports events from bookmakers using selenium and BeautifulSoup4", 
                    "Implemented parsing functionality to convert raw html text into dictionaries containing odds, team names, and datetime objects of events",
                    "Calculated true odds of events using Pinnacle's odds to find value in other bookmakers' pricings",
                    "Created robust error handling mechanisms to manage the dynamic issues caused  by changing website structures and content variability"
                ]}
                languages={["Python"]}
                libraries={["Selenium", "BeautifulSoup4", "webdriver-manager, pytest, fuzzywuzzy"]}
                link="https://github.com/jss02/Value-betting-software"
                date="2024"
                img={bettingIcon}
                />
                <ProjectCard
                title="Presentation Maker Frontend"
                description="React app for making presentations"
                dotPoints={["Developed a Single Page Application with user authentication, presentation management, and slide customization features",
                    "Built modular and reusable React components to enhance maintainability and development efficiency",
                    "Utilized the Axios library for API interactions with backend for CRUD operations",
                    "Created unit tests for components using Jest and React Testing Library and developed UI tests with Cypress to ensure app functionality and reliability"
                ]}
                languages={["JavaScript", "HTML", "CSS"]}
                libraries={["React", "MaterialUI", "Axios", "Cypress"]}
                date="2024"
                img={presentation}
                />
                <ProjectCard
                title="EdStem Forum Replica Frontend"
                description="Single Page Application for EdStem forum replica in Vanilla JavaScript"
                dotPoints={["Designed and developed responsive frontend with dynamic DOM manipulation",
                    "Integrated frontend with RESTful API backend using fetch for asynchronous data handling",
                    "Implemented key features: User Authentication, Thread management, Comments & replies, User profiles",
                    "Managed user state and session data with localStorage"
                ]}
                languages={["JavaScript", "HTML", "CSS"]}
                libraries={[]}
                date="2024"
                img={edstemLogo}
                />
                <ProjectCard
                title="Twitter Fake News Detection Software"
                description="Fake news detector plugin for twitter/X using LLMs in a team of 5."
                dotPoints={["Developed software to scrape live website contents of top google search results",
                    "Parsed scraped contents into lists of readable strings for model input",
                    "Practiced scrum (agile) framework"
                ]}
                languages={["Python"]}
                libraries={["BeautifulSoup4", "NewsPlease", "Requests"]}
                date="2023"
                img={twitterx}
                />
                <ProjectCard
                title="UNSW Streams messaging app"
                description="Python backend server for Microsoft Teams replica 'UNSW Streams' in a team of 4."
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