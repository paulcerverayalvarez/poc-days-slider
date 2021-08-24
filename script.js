const data = ["0", "1", "2", "3"]

const addData = (end) => {
	const parent = document.querySelector('.parent')
	data.forEach(elt => {
		const div = document.createElement('div')
		const eltText = document.createTextNode(elt);
		div.appendChild(eltText);
		if (end) {
			parent.append(div)
		} else {
			parent.prepend(div)
		}
		div.addEventListener('click', onClick)
	} )
}

const onClick = (event) => {
	event.srcElement.scrollIntoView({inline: 'nearest', behavior: 'smooth'})
}

const onScroll = (event) => {
	/*if (event.srcElement.scrollLeft === 0) {
		console.log('Scroll to the start')
		document.querySelector('.loader').style.display = 'block'
		setTimeout(() => { 
			addData(false)
			document.querySelector('.loader').style.display = 'none'
		}, 1000);
		
	} else*/ if (event.srcElement.scrollWidth - event.srcElement.scrollLeft - event.srcElement.offsetWidth === 0) {
		console.log('Scroll to the end')
		document.querySelector('.loader').style.display = 'block'
		setTimeout(() => { 
			addData(true)
			document.querySelector('.loader').style.display = 'none'
		}, 1000);
	}
}

window.onload = () => {
	addData(true)
	document.querySelector('.parent').addEventListener('scroll', onScroll)
}
