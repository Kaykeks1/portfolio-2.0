import './Hero.css';

type Props = {
  id: string
}

export default function Hero({ id }: Props) {
  document.addEventListener("scroll", function() {
    const heroSection = document.getElementById('hero') as HTMLElement;
    const introSection = document.getElementById('intro') as HTMLElement;
    const imageSection = document.getElementById('image') as HTMLElement;
  
    const partiallyInHero = isElementPartiallyInViewport(heroSection)
    const outHero = isElementCompletelyOutOfViewport(heroSection)

    if (partiallyInHero) {
      // add opacity
      introSection.classList.remove("remove-opacity");
      introSection.classList.add("add-opacity");
      // animate
      introSection.classList.add("animate-intro");
    } else if (outHero) {
      // remove opacity
      introSection.classList.remove("add-opacity");
      introSection.classList.add("remove-opacity");
      // animate
      introSection.classList.remove("animate-intro");
    }
    if (partiallyInHero) {
      // add opacity
      imageSection.classList.remove("remove-opacity");
      imageSection.classList.add("add-opacity");
      // animate
      imageSection.classList.add("animate-image");
    } else if (outHero) {
      // remove opacity
      imageSection.classList.remove("add-opacity");
      imageSection.classList.add("remove-opacity");
      // animate
      imageSection.classList.remove("animate-image");
    }
  });
  
  function isElementPartiallyInViewport(element: HTMLElement) {
    var rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0
    );
  }

  function isElementCompletelyOutOfViewport (element: HTMLElement) {
    var rect = element.getBoundingClientRect();
    
    return (
      rect.bottom <= 0
    );
  }
  
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
