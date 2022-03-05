import { getPaintings } from './modules/getData.js'
import { replace } from './modules/getData.js'
import { dropDown } from './modules/variables.js'


function onRouteChanged() {
  const hash = window.location.hash;
  const img = document.querySelectorAll('img')

  for (let i = 0; i < img.length; i++) {
    if ("#" + (img[i]).id == hash) {

      const largeImage = document.getElementById(img[i].id)
      largeImage.classList.add("mystyle");

      break;
    }
  }
}

window.addEventListener("hashchange", onRouteChanged);

dropDown.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      replace()
      getPaintings()
    }
  });

