import './Header.css';

export default function Header() {
  const links = ["Home", "About", "Tech Stack", "Projects", "Contact"];
  return (
    <div className='header'>
      {
        links.map((link) =>
          (<span className='link'>
            {link}
          </span>)
          )
      }
    </div>
  )
}
