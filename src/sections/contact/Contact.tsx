import "./Contact.css"
import { ReactComponent as TwitterLogo } from '../../images/svgs/twitter_link.svg';
import { ReactComponent as GithubLogo } from '../../images/svgs/github_link.svg';
import { ReactComponent as LinkedInLogo } from '../../images/svgs/linkedin_link.svg';
import { ReactComponent as GmailLogo } from '../../images/svgs/gmail_link.svg';

type Props = {
  id: string
}

export default function Contact({ id }: Props) {
  const infoLinks = [
    { logo: TwitterLogo, label: 'TWITTER' },
    { logo: GmailLogo, label: 'GMAIL' },
    { logo: LinkedInLogo, label: 'LINKEDIN' },
    { logo: GithubLogo, label: 'GITHUB' },
  ];
  return (
    <section className='container' id={id}>
      {/* <h1 className='title'>Contact</h1> */}
      <div className="contact-mail">
        Have some questions? Send a mail:<br /><a href="mailto:kayuskeks@gmail.com">kayuskeks@gmail.com</a>
      </div>
      <div className="socials">
        {
          infoLinks.map((item, key) => {
            const Logo = item.logo;
            return (
              <a className="socials-link" key={key} href="#project">
                <Logo className={item.label.toLowerCase()} />
                <p>
                  {item.label}
                </p>
              </a>
            )
          })
        }
      </div>
      <div className="credits">
        <p>
          © 2023 | Created by <span>Kayode</span>
        </p>
      </div>
    </section>
  )
}
