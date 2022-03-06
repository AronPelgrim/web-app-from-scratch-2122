export function routerChanged() {
	const hash = window.location.hash;
	const li = document.querySelectorAll('li')
	for (let i = 0; i < li.length; i++) {

		if ("#" + (li[i]).id == hash) {
			const liHide = document.querySelectorAll("main h1, input, label, li:not(#" + li[i].id + ")" )
            const liDetail = document.getElementById(li[i].id)

            liDetail.classList.add("detail")
            
			for (i = 0; i < liHide.length; i++) {
                liHide[i].className = " hide" 
            }
            

			break;
		}
	}
}