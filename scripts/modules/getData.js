import { bodyE } from './bodyElement.js'
import { url } from './variables.js'

export function getPaintings() {
    
    const bodyList = bodyE('ul')

    fetch(url) 
        .then(function(response){
            return response.json() 
        })
        .then(function(paintings){   
            bodyList.insertAdjacentHTML('beforebegin', 
            `<h1>${paintings.artObjects[1].principalOrFirstMaker}</h1>`)

            for (let i = 0; i < paintings.artObjects.length; i++) {     
            bodyList.insertAdjacentHTML('afterbegin', 
            `<li class=""><img src="${paintings.artObjects[i].webImage.url.slice(0, -3)+"=s1000"}"><p>${paintings.artObjects[i].longTitle}<p/></li>`) 
            }

            const options = {
                threshold: [0.4]
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
        })
}
