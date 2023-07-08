import './App.css';
import Header from './components/header/Header';
import SplashScreen from './components/splash-screen/SplashScreen';
import Hero from './sections/hero/Hero';
import Stacks from './sections/stacks/Stacks';
import Projects from './sections/projects/Projects';
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
    : <div className="App">
      <div className='hero-section'>
        <Header />
        <Hero />
      </div>
      <Stacks />
      <Projects />
    </div>
  );
}

export default App;
