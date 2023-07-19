import "./Menu.css"
import { ReactComponent as TwitterLogo } from '../../images/svgs/twitter.svg';

type Props = {
  id: string
}

export default function Menu({ id }: Props) {
  const infoLinks = [
    { logo: TwitterLogo, label: 'Twitter' },
    { logo: TwitterLogo, label: 'LinkedIn' },
    { logo: TwitterLogo, label: 'Github' },
    { logo: TwitterLogo, label: 'Gmail' },
  ];
  return (
    <div className='menu' id={id}>
      <ul className='menu-items'>
        <li>Home</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>

      <div className='info-links'>
        {
          infoLinks.map((item, key) => {
            const Logo = item.logo;
            return (
              <a className='info-link' key={key}>
                <Logo />
                <span>{item.label}</span>
              </a>
            )}
          )
        }
      </div>
    </div>
  )
}
