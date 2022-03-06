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
	dropDown
} from './modules/variables.js'

window.addEventListener("hashchange", routerChanged);

dropDown.addEventListener("keypress", function(e) {
	if (e.key === 'Enter') {
		replace()
		getPaintings()
	}
});