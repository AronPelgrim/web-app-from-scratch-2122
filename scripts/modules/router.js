// Checks ihash, if hash is title of painting, this painting gets class detail, the rest gets class hide
export function routerChanged() {
	const hash = window.location.hash;
	const li = document.querySelectorAll('li')
	
	for (let i = 0; i < li.length; i++) {
		if ("#" + (li[i]).id == hash) {
			const liHide = document.querySelectorAll("main h1, input, label, li:not(#" + li[i].id + ")")
			const liDetail = document.getElementById(li[i].id)
			
			liDetail.classList.add("detail")
			
			for (i = 0; i < liHide.length; i++) {
				if (liHide[i].className === "visible") {
					liHide[i].className = "visible hide"
				} else {
					liHide[i].className = " hide"
				}
			}
		}
	}
}