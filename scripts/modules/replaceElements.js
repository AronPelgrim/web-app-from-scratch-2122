//Bron: https://stackoverflow.com/questions/58984494/javascript-how-to-replace-multiple-html-nodes?noredirect=1&lq=1
export function replace() {
	for (const node of document.querySelectorAll("li, img, p, main h1, button, main a")) {
		const parent = node.parentNode;
		const children = Array.from(node.children);
		
		for (const child of children) {
			node.removeChild(child);
			parent.insertBefore(child, node);
		}
		
		parent.removeChild(node);
	}
}