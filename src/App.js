import './App.css';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/NavBar/Navbar';
import Skill from './components/Skill/skill';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
