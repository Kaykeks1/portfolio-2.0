import './App.css';
import Header from './components/header/Header';
import Hamburger from './components/hamburger/Hamburger';
import GoToNext from './components/goto-next/GoToNext';
import SplashScreen from './components/splash-screen/SplashScreen';
import Hero from './sections/hero/Hero';
import Stacks from './sections/stacks/Stacks';
import Projects from './sections/projects/Projects';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    loading
    ? <SplashScreen />
    : <div className="app">
      <Hamburger />
      <GoToNext />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
