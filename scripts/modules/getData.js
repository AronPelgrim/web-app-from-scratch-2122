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

export function getPaintings() {
	const bodyList = bodyE('ul')
	const search = inputSearch.value
	const apiKey = "S0VK6DCj&q="
	let url = "https://www.rijksmuseum.nl/api/nl/collection?key=" + apiKey + search + "&ps=" + 5

	fetch(url).then((response) => {
		return response.json()
	}).then((paintings) => {
		bodyList.insertAdjacentHTML('beforebegin', `<h1>${paintings.artObjects[1].principalOrFirstMaker}</h1>`)
		for (let i = 0; i < paintings.artObjects.length; i++) {
			let titlePainting = paintings.artObjects[i].title;
			titlePainting = titlePainting.replace('’', '')
			titlePainting = titlePainting.replace('‘', '')
			titlePainting = titlePainting.replace(',', '')
			titlePainting = titlePainting.replace('.', '')
			titlePainting = titlePainting.replace('ë', 'e')
			titlePainting = titlePainting.split(" ").join("-")
			bodyList.insertAdjacentHTML('afterbegin', `<li id="${titlePainting}" class=""><button>X</button><a href="#${titlePainting}"><img src="${paintings.artObjects[i].webImage.url.slice(0, -3)+"=s1000"}"></a><p>${paintings.artObjects[i].longTitle}<p/></li>`)
		}
		visibleAnimation()
	}).then(() => {
		const buttons = document.querySelectorAll('li button')
		buttons.forEach(button => {
			button.addEventListener("click", back)
		});
	}).catch(() => {
		bodyList.insertAdjacentHTML('beforebegin', `<p id="error">Error, this page doesn't exist, try another artist!</p>`)
	})
}