import './Hero.css';
import appDomManipulations from '../../helpers/appDomManipulations'

type Props = {
  id: string
}

export default function Hero({ id }: Props) {
  appDomManipulations.heroAnimation()
  
  return (
    <section className="hero" id={id}>
      <div className='intro animate-intro' id="intro">
        Hi 👋,<br />
        <div>
          I'm <span className='my-name'>Kayode</span>,
        </div>
        <span>
          and i build things for the web.
        </span>
      </div>
      <div className='image animate-image' id="image" />
    </section>
  )
}
