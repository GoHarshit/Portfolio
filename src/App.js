import './App.css';
import { Banner } from './Components/Banner.js';
import { NavBar } from './Components/NavBar.js';
import {Skills} from './Components/Skills'
import { Projects } from './Components/Projects.js';
import { Footer } from './Components/Footer.js';
import { InfoForm } from './Components/InfoForm.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Banner />
        <Skills />
        <Projects />
        <InfoForm/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
