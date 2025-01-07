import './App.css'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import SideIcons from './components/SideIcons'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <SideIcons />
      <Intro />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
