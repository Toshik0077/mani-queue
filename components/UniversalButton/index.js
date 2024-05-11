import './index.css'

function UniversalButton(text, backgroundColor, clickHandler) {
	this.button = document.createElement('button')
	this.button.textContent = text
	this.button.style.backgroundColor = this.getBackgroundColor(backgroundColor)
	this.button.classList.add('btn')
	this.button.addEventListener('click', clickHandler)
}
UniversalButton.prototype.render = function (parent) {
	parent.append(this.button)
}
UniversalButton.prototype.getBackgroundColor = function (colorType) {
	switch (colorType) {
		case 'submit':
			return '#8e8870'
		case 'cancel':
			return '#f06360'
		case 'disabled':
			return '#7b7575'
		default:
			return 'red'
	}
}

export default UniversalButton
