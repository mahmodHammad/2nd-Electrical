var cumulativeOffset = function(element) {
    var top = 0
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top
    };
};


export default function(target ,key){
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      const cord =cumulativeOffset(target)
      if(keyName ===key){
        window.scrollTo(0,cord.top)
      }
    }, false);
}    


