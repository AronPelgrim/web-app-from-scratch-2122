export function routerChanged() {
	const hash = window.location.hash;
	const li = document.querySelectorAll('li')
	for (let i = 0; i < li.length; i++) {

		if ("#" + (li[i]).id == hash) {

			const liDetail = document.getElementById(li[i].id)
			liDetail.classList.add("detail");

			for (const node of document.querySelectorAll("select, option, label, li:not(.detail), li:not(.detail) img, li:not(.detail) p, main h1, a")) {
				const parent = node.parentNode;
				const children = Array.from(node.children);
				for (const child of children) {
					node.removeChild(child);
					parent.insertBefore(child, node);
				}
				parent.removeChild(node);
			}
			break;
		} 
	}
}