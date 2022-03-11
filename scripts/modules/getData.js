import {
	bodyE
} from './bodyElement.js'
import {
	inputSearch
} from './searchBar.js'
import {
	visibleAnimation
} from './animationShow.js'
import {
	back
} from './hideDetail.js'

//Get the data from API
export function getPaintings() {
	const bodyList = bodyE('ul')
	const search = inputSearch.value
	const apiKey = "S0VK6DCj&q="
	let url = "https://www.rijksmuseum.nl/api/nl/collection?key=" + apiKey + search + "&ps=" + 5

	fetch(url).then((response) => {
		return response.json()
	})
	//filters the artObjects to check if search is existing artist
	.then((paintings) => {
		const filterP = paintings.artObjects.filter(painting => {
			const searchValue = search.toUpperCase()
			return painting.principalOrFirstMaker.toUpperCase().includes(searchValue)
		})
		console.log(filterP);
		bodyList.insertAdjacentHTML('beforebegin', `<h1>${paintings.artObjects[1].principalOrFirstMaker}</h1>`)
		//replaces certain characters from the title for the hash
		for (let i = 0; i < filterP.length; i++) {
			let titlePainting = filterP[i].title;
			titlePainting = titlePainting.replace('’', '')
			titlePainting = titlePainting.replace('‘', '')
			titlePainting = titlePainting.replace(',', '')
			titlePainting = titlePainting.replace('.', '')
			titlePainting = titlePainting.replace('ë', 'e')
			titlePainting = titlePainting.split(" ").join("-")
			bodyList.insertAdjacentHTML('afterbegin', `<li id="${titlePainting}" class=""><button>X</button><a href="#${titlePainting}"><img src="${filterP[i].webImage.url.slice(0, -3)+"=s1000"}"></a><p>${filterP[i].longTitle}<p/></li>`)
		}
		//Activates intersection observer function
		visibleAnimation()
	})
	//Adds eventlistener click to all buttons in li
	.then(() => {
		const buttons = document.querySelectorAll('li button')
		buttons.forEach(button => {
			button.addEventListener("click", back)
		});
	})
	//Gives error if artist is not found
	.catch(() => {
		bodyList.insertAdjacentHTML('beforebegin', `<p id="error">Error, this page doesn't exist, try another artist!</p>`)
	})
}