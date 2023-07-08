import './Hero.css';

export default function Hero() {
  document.addEventListener("scroll", function() {
    const heroSection = document.getElementById('hero') as HTMLElement;
    const stacksSection = document.getElementById('stacks') as HTMLElement;
    const introSection = document.getElementById('intro') as HTMLElement;
    const imageSection = document.getElementById('image') as HTMLElement;
    var rect = heroSection.getBoundingClientRect();
  
    const fullHero = isElementInViewport(heroSection)
    const outHero = isElementCompletelyOutOfViewport(heroSection)
    const fullStacks = isElementInViewport(stacksSection)
    console.log({fullHero, fullStacks, outHero})

    if (fullHero) {
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
    if (fullHero) {
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
  
  function isElementInViewport(element: HTMLElement) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isElementCompletelyOutOfViewport (element: HTMLElement) {
    var rect = element.getBoundingClientRect();
    
    return (
      rect.bottom <= 0
    );
  }
  
  return (
    <div className="hero" id="hero">
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
    </div>
  )
}
