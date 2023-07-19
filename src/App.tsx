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
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [ goto, setGoTo ] = useState('#about');
  const sections = ['#about', '#stacks', '#projects', '#contact']

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  document.addEventListener("scroll", function() {
    const heroSection = document.getElementById('hero') as HTMLElement;
    const aboutSection = document.getElementById('about') as HTMLElement;
    const stacksSection = document.getElementById('stacks') as HTMLElement;
    const projectsSection = document.getElementById('projects') as HTMLElement;

    if (isElementPartiallyInViewport(heroSection)) {
      setGoTo('#about')
    } else if (isElementPartiallyInViewport(aboutSection)) {
      setGoTo('#stacks')
    } else if (isElementPartiallyInViewport(stacksSection)) {
      setGoTo('#projects')
    } else if (isElementPartiallyInViewport(projectsSection)) {
      setGoTo('#contact')
    } else {
      setGoTo('')
    }
  });

  function isElementPartiallyInViewport(element: HTMLElement) {
    var rect = element.getBoundingClientRect();
    const midPoint = rect.height / 2;
    return (
      rect.bottom > 0
      && rect.bottom > midPoint
    );
  }

  const onClickPageBody = () => {} 

  return (
    loading
    ? <SplashScreen />
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
      <div id="overlay" onClick={onClickPageBody} />
    </div>
  );
}

export default App;
