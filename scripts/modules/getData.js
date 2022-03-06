import { bodyE } from './bodyElement.js'
import { dropDown } from './variables.js'
import { loading } from './loading.js'
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
            loading()
        })
        .catch(function(){
          bodyList.insertAdjacentHTML('beforebegin', 
            `<p id="error">Error, this page doesn't exist, try another artist!</p>`)
        })
}
