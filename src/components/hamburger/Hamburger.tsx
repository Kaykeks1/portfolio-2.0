import './Hamburger.css';
import appDomManipulations from '../../helpers/appDomManipulations'

export default function Hamburger() {
  const showNavigation = () => {
    appDomManipulations.toggleMenu()
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
