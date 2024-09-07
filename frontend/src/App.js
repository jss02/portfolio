import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import './App.css';

function App() {
    return (
      <div className="App">
          <Header></Header>
          <Home></Home>
          <Education></Education>
          <Projects></Projects>
          <Skills></Skills>
      </div>
    );
}

export default App;
