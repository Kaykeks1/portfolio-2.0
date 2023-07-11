import { useEffect } from 'react';
import './SplashScreen.css';

export default function SplashScreen() {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    let interval:any = null;
  
    let iteration = 0;
    
    clearInterval(interval);
    const h1Element = document.querySelector("h1")
    // let h1Text = h1Element?.textContent as any;
    const h1DataValue = h1Element?.dataset.value as any;


    interval = setInterval(() => {
      if (!h1Element) return
      // h1Element.textContent = h1Text
      h1Element.textContent = h1DataValue
        .split("")
        .map((letter:any, index:any) => {
          if(index < iteration) {
            return h1DataValue[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= h1DataValue.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 5;
    }, 50);
  }, [])
  return (
    <div className="splash-screen">
      {/* <h1 data-value="WELCOME">WELCOME</h1> */}
      <h1 data-value="WELCOME"></h1>
    </div>
  )
}
