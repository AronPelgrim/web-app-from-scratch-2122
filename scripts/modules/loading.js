export function loading(){
    const options = {
        threshold: [0.6]
      };
    const observer = new IntersectionObserver(onEntry, options);
    const elements = document.querySelectorAll('li, main h1');
    
    function onEntry(entry) {
      entry.forEach((change) => {
        if(change.isIntersecting) {
          change.target.classList.add('visible');
        }
      });
    }
    
    for (let elm of elements) {
      observer.observe(elm);
    }
}
