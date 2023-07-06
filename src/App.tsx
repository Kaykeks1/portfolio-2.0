import './App.css';
import Header from './components/header/Header';
import Hero from './sections/hero/Hero';
import Stack from './sections/stacks/Stack';

function App() {
  return (
    <div className="App">
      <div className='hero-section'>
        <Header />
        <Hero />
      </div>
      <Stack />
    </div>
  );
}

export default App;
