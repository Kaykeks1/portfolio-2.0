import './App.css';
import Header from './components/header/Header';
import Hero from './sections/hero/Hero';

function App() {
  return (
    <div className="App">
      <div className='hero-section'>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
