export function back() {
	const li = document.querySelectorAll('li')
	const hash = window.location.hash;
	
	for (let i = 0; i < li.length; i++) {
		if ("#" + (li[i]).id == hash) {
			const liShow = document.querySelectorAll("main h1, input, label, li:not(#" + li[i].id + ")")
			const liDetail = document.getElementById(li[i].id)
			liDetail.classList.remove("detail")
			for (i = 0; i < liShow.length; i++) {
				liShow[i].classList.remove("hide")
			}
		}
		
		window.location.hash = "";
	}
}