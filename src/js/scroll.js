
import position from './findPosition.js'

export default function(target ,key){
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      const cord =position(target)
      if(keyName ===key){
        window.scrollTo(0,cord.top)
      }
    }, false);
    return target
}    


