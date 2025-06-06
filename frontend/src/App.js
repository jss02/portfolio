import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import Experience from './Components/Experience';

function App() {
    return (
        <div id='App' className="dark dark:text-white">
            <Header></Header>
            <Home></Home>
            <Experience></Experience>
            <Education></Education>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
