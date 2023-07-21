const toggleMenu = () => {
  const hamburger = document.getElementById('menu-btn') as HTMLElement;
  hamburger.classList.toggle('open');
  const menu = document.getElementById('menu') as HTMLElement;
  menu.classList.toggle('open-menu');
  let overlayShadow = document.getElementById("overlay") as HTMLElement;
  if (overlayShadow.style.opacity === "1") {
    overlayShadow.style.opacity = "0";
    overlayShadow.style.zIndex = "-1";
  } else {
    overlayShadow.style.opacity = "1";
    overlayShadow.style.zIndex = "1";
  }
}

const heroAnimation = () => {
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
}

function isMoreThanHalfOfTheElementInViewport(element: HTMLElement) {
  var rect = element.getBoundingClientRect();
  const midPoint = rect.height / 2;
  return (
    rect.bottom > midPoint
  );
}

const helpers = { toggleMenu, heroAnimation, isMoreThanHalfOfTheElementInViewport }

export default helpers;