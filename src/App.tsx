import './App.css';
import Hamburger from './components/hamburger/Hamburger';
import GoToNext from './components/goto-next/GoToNext';
import Menu from './components/menu/Menu';
import SplashScreen from './components/splash-screen/SplashScreen';
import Hero from './sections/hero/Hero';
import Stacks from './sections/stacks/Stacks';
import Projects from './sections/projects/Projects';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import { useState } from 'react';
import appDomManipulations from './helpers/appDomManipulations'

function App() {
  const [loading, setLoading] = useState(true);
  const [ goto, setGoTo ] = useState('#about');

  const finishedLoading = ()=>{
    setLoading(false)
  }

  document.addEventListener("scroll", function() {
    const heroSection = document.getElementById('hero') as HTMLElement;
    const aboutSection = document.getElementById('about') as HTMLElement;
    const stacksSection = document.getElementById('stacks') as HTMLElement;
    const projectsSection = document.getElementById('projects') as HTMLElement;

    if (appDomManipulations.isMoreThanHalfOfTheElementInViewport(heroSection)) {
      setGoTo('#about')
    } else if (appDomManipulations.isMoreThanHalfOfTheElementInViewport(aboutSection)) {
      setGoTo('#stacks')
    } else if (appDomManipulations.isMoreThanHalfOfTheElementInViewport(stacksSection)) {
      setGoTo('#projects')
    } else if (appDomManipulations.isMoreThanHalfOfTheElementInViewport(projectsSection)) {
      setGoTo('#contact')
    } else {
      setGoTo('')
    }
  });

  const onClickOverlay = () => {
    appDomManipulations.toggleMenu()
  } 

  return (
    loading
    ? <SplashScreen finishedLoading={finishedLoading} />
    : <div className="app">
      <Hamburger />
      {
        goto && <GoToNext goto={goto} />
      }
      <Hero id="hero" />
      <About id="about" onView={goto !== '#about'} />
      <Stacks id="stacks" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Menu id="menu" />
      <div id="overlay" onClick={onClickOverlay} />
    </div>
  );
}

export default App;
