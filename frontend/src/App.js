import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Projects from './Components/Projects';
import './App.css';
import { useRef } from 'react';

function App() {
    return (
      <div className="App">
          <Header></Header>
          <Home></Home>
          <Education></Education>
          <Projects></Projects>
      </div>
    );
}

export default App;
