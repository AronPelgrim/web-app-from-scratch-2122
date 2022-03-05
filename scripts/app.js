import { getPaintings } from './modules/getData.js'
import { replace } from './modules/getData.js'
import { dropDown } from './modules/variables.js'

dropDown.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      replace()
      getPaintings()
    }
  });



