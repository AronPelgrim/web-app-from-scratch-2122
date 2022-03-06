import {
	getPaintings
} from './modules/getData.js'
import {
	routerChanged
} from './modules/router.js'
import {
	replace
} from './modules/replaceElements.js'
import {
	inputSearch
} from './modules/variables.js'

window.addEventListener("hashchange", routerChanged);

inputSearch.addEventListener("keypress", function(e) {
	if (e.key === 'Enter') {
		replace()
		getPaintings()
	}
});