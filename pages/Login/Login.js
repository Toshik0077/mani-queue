function Login() {
	this.parent = document.getElementById('app');
	this.elements = {
		section: document.createElement('section'),

		authTitle: document.createElement('h2'),

		authForm: document.createElement('form'),

		emailInputContainer: document.createElement('div'),
		emailInputlabel: document.createElement('label'),
		emailInput: document.createElement('input'),

		passInputContainer: document.createElement('div'),
		passInputlabel: document.createElement('label'),
		passInput: document.createElement('input'),

		submitBtn: document.createElement('button'),

		emailErrorMessage: document.createElement('p'),
		passErrorMessage: document.createElement('p'),
	};
}
Login.prototype.render = function (parent) {
	this.elements.section.classList.add('verification');

	this.elements.authTitle.classList.add('auth-title');

	this.elements.authForm.classList.add('auth-form');

	this.elements.emailInputContainer.classList.add('email-input-container');
	this.elements.emailInputlabel.classList.add('email-input-label');
	this.elements.emailInput.classList.add('email-input');

	this.elements.passInputContainer.classList.add('pass-input-container');
	this.elements.passInputlabel.classList.add('pass-input-label');
	this.elements.passInput.classList.add('pass-input');

	this.elements.submitBtn.classList.add('submit-btn');
	/*************************************content****************************************** */
	this.elements.authTitle.textContent = 'Open Nails';

	this.elements.emailInputlabel.textContent = 'Email:';
	this.elements.emailInput.setAttribute('type', 'email');
	this.elements.emailInput.id = 'email-input';
	this.elements.emailInputlabel.setAttribute('for', 'email-input');
	this.elements.emailInput.name = 'email';
	this.elements.emailErrorMessage.textContent = 'Please provide a valid email address';
	this.elements.emailErrorMessage.className = 'error_email';

	this.elements.passInputlabel.textContent = 'Password:';
	this.elements.passInput.setAttribute('type', 'password');
	this.elements.passInputlabel.id = 'password-input';
	this.elements.passInputlabel.setAttribute('for', 'password-input');
	this.elements.passInput.name = 'pass';
	this.elements.passErrorMessage.textContent = 'Please provide a valid password ';
	this.elements.passErrorMessage.className = 'error_password';

	this.elements.submitBtn.textContent = 'Iniciar';
	this.elements.submitBtn.setAttribute('type', 'submit');
	this.elements.submitBtn.addEventListener('click', this.handleSubmit.bind(this));

	/************************************ Додаємо всі елементи на сторінку*******************/

	this.elements.emailInputContainer.append(this.elements.emailInputlabel, this.elements.emailInput);

	this.elements.passInputContainer.append(this.elements.passInputlabel, this.elements.passInput);

	this.elements.authForm.append(this.elements.emailInputContainer, this.elements.passInputContainer, this.elements.submitBtn);

	this.elements.section.append(this.elements.authTitle, this.elements.authForm);

	this.parent.append(this.elements.section);
};
Login.prototype.handleSubmit = function (e) {
	e.preventDefault();
	const formData = new FormData(this.elements.authForm);
	const body = { email: formData.get('email'), password: formData.get('pass') };
	console.log(body);
	this.validateEmail();
	this.validatePassword();
};

Login.prototype.validateEmail = function () {
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(this.elements.emailInput.value)) {
		this.elements.emailInputContainer.append(this.elements.emailErrorMessage);

		return false;
	} else {
		this.elements.emailErrorMessage.remove();
		return true;
	}
};
Login.prototype.validatePassword = function () {
	let filterPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
	console.log(filterPassword.test(this.elements.passInput.value));

	if (!filterPassword.test(this.elements.passInput.value)) {
		this.elements.passInputContainer.append(this.elements.passErrorMessage);
		return false;
	} else {
		this.elements.passErrorMessage.remove();
		return true;
	}
};
export default Login;
/************************************************************************************** */
let authLogin = new Login();
// Викликаємо метод render(), щоб вивести елементи на сторінку
authLogin.render();
/************************************ */
