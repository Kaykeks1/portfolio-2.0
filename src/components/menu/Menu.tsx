import "./Menu.css"
import { ReactComponent as TwitterLogo } from '../../images/svgs/twitter_link.svg';
import { ReactComponent as GithubLogo } from '../../images/svgs/github_link.svg';
import { ReactComponent as LinkedInLogo } from '../../images/svgs/linkedin_link.svg';
import { ReactComponent as GmailLogo } from '../../images/svgs/gmail_link.svg';

type Props = {
  id: string
}

export default function Menu({ id }: Props) {
  const infoLinks = [
    { logo: TwitterLogo, label: 'Twitter' },
    { logo: GmailLogo, label: 'Gmail' },
    { logo: LinkedInLogo, label: 'LinkedIn' },
    { logo: GithubLogo, label: 'Github' },
  ];
  return (
    <div className='menu' id={id}>
      <ul className='menu-items'>
        <li><a href="#hero">HOME</a></li>
        <li><a href="#project">PROJECTS</a></li>
        <li><a href="#project">RESUME</a></li>
      </ul>

      <div className='info-links'>
        {
          infoLinks.map((item, key) => {
            const Logo = item.logo;
            return (
              <a className='info-link' href="#project" key={key}>
                <Logo className={item.label.toLowerCase()} />
                <span>{item.label}</span>
              </a>
            )}
          )
        }
      </div>
    </div>
  )
}
