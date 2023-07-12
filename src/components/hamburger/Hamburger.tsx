import { click } from '@testing-library/user-event/dist/click';
import './Hamburger.css';

export default function Hamburger() {
  const showNavigation = () => {
    const hamburger = document.getElementById('menu-btn') as HTMLElement;
    hamburger.classList.toggle('open');
  }
  return (
    <div className='hamburger-container' id="menu-btn" onClick={showNavigation}>
      <div className="hamburger">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
    </div>
  )
}
