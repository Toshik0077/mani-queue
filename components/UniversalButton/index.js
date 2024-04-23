import './index.css'

function UniversalButton(text, backgroundColor, clickHandler) {
	this.button = document.createElement('button')
	this.button.textContent = text
	const styles = this.colorStyles(backgroundColor)
	Object.assign(this.button.style, styles)
	this.button.classList.add('btn')
	this.button.addEventListener('click', clickHandler)
}
UniversalButton.prototype.render = function (parent) {
	parent.append(this.button)
}
UniversalButton.prototype.colorStyles = function (colorType) {
	if (colorType === 'submit') {
		return { backgroundColor: '#8e8870' }
	} else if (colorType === 'cancel') {
		return { backgroundColor: '#f06360' }
	} else if (colorType === 'disabled') {
		return { backgroundColor: '#7b7575' }
	}
}

export default UniversalButton
