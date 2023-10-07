import './App.css';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/NavBar/Navbar';
import Project from './components/Project/project';
import Skills from './components/Skill/skills';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
