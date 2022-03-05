import { bodyE } from './bodyElement.js'
import { dropDown } from './variables.js'
export function getPaintings() {
    
    const bodyList = bodyE('ul')

    const searchDropdown = dropDown.options[dropDown.selectedIndex].value.toString();

    let url =
      "https://www.rijksmuseum.nl/api/nl/collection?key=S0VK6DCj&q=" +
      searchDropdown +
      "&ps=" + 5

        fetch(url)
        .then(function(response){
            return response.json() 
        })
        .then(function(paintings){   
            bodyList.insertAdjacentHTML('beforebegin', 
            `<h1>${paintings.artObjects[1].principalOrFirstMaker}</h1>`)

            for (let i = 0; i < paintings.artObjects.length; i++) {     
              bodyList.insertAdjacentHTML('afterbegin', 
              `<li id="${paintings.artObjects[i].id}" class=""><a href="#${paintings.artObjects[i].id}"><img src="${paintings.artObjects[i].webImage.url.slice(0, -3)+"=s1000"}"></a><p>${paintings.artObjects[i].longTitle}<p/></li>`) 
            }

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
        })
}

export function replace(){
  for (const node of document.querySelectorAll("li, img, p, main h1, a")) {
    const parent = node.parentNode;
    const children = Array.from(node.children);
    for (const child of children) {
      node.removeChild(child);
      parent.insertBefore(child, node);
    }
    parent.removeChild(node);
  }
}
