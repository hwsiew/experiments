export default function myCreateElement (tag, props, ...children) {

	// to handle custom tag 
	if(typeof tag === 'function') return tag(props, children);

	// create an element as tag
	const element = document.createElement(tag)

	// enlist props to element attributes
	Object.entries(props || {}).forEach(([name, value]) => {
		// add event if props starts with 'on'
		if (name.startsWith('on') && name.toLowerCase() in window) {
			element.addEventListener(name.toLowerCase().substr(2), value)
		} else element.setAttribute(name, value.toString())
	});

	// append children to element
	console.log(children)
	children.forEach((child) => {
		appendChild(element, child)
	})

	return element;
}

const appendChild = (parent, child) => {
	if (Array.isArray(child)){ 
		child.forEach((nestedChild) => appendChild(parent, nestedChild))
	} else {
		// if child has no nodeType it is a text
		// else child is another tag
		parent.appendChild(
			child.nodeType ? child : document.createTextNode(child)
		)
		}
}

