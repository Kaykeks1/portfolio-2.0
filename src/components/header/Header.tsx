import './Header.css';

export default function Header() {
  const links = [{ name: "About", to: "#about"}, { name: "Tech Stack", to: "#stacks"}, { name: "Projects", to: "#projects"}, { name: "Contact", to: "#contact"}];
  return (
    <div className='header'>
      {
        links.map((item, key) =>
          (<a className='link' href={item.to} key={key}>
            {item.name}
          </a>)
          )
      }
    </div>
  )
}
