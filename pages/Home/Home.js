import UniversalButton from '../../components/UniversalButton'
import manicureImg from '../../assets/homeimg/manicure.png'
import pedicureImg from '../../assets/homeimg/piedicure.png'
import homeImg from '../../assets/homeimg/home.svg'
import calendarImg from '../../assets/homeimg/calendar_month.svg'
import instaImg from '../../assets/homeimg/insta.svg'
import portfolioImg from '../../assets/homeimg/portfolio.svg'

function Home() {
	this.parent = document.getElementById('app')
	this.elements = {
		section: document.createElement('section'),
		authTitle: document.createElement('h2'),

		manicureContainer: document.createElement('div'),
		manicureImg: document.createElement('img'),
		manicureBtn: new UniversalButton('Manicure', 'submit', () => {}, 'btn-home-page'),

		pedicureContainer: document.createElement('div'),
		pedicureImg: document.createElement('img'),
		pedicureBtn: new UniversalButton('Pedicure', 'submit', () => {}, 'btn-home-page'),

		cotentContainer: document.createElement('div'),
		asideContainer: document.createElement('aside'),

		asideLinkHome: document.createElement('a'),
		asideLinkHomeIcon: document.createElement('img'),
		asideLinkHomeName: document.createElement('p'),

		asideLinkRecord: document.createElement('a'),
		asideLinkRecordIcon: document.createElement('img'),
		asideLinkRecordName: document.createElement('p'),

		asideLinkPortfolio: document.createElement('a'),
		asideLinkPortfoliIcon: document.createElement('img'),
		asideLinkPortfolioName: document.createElement('p'),

		asideLinkProfile: document.createElement('a'),
		asideLinkProfileIcon: document.createElement('img'),
		asideLinkProfileName: document.createElement('p'),
	}
}
Home.prototype.render = function (parent) {
	this.elements.section.classList.add('home')
	this.elements.cotentContainer.classList.add('cotent-container')
	this.elements.authTitle.classList.add('auth-title')
	this.elements.manicureContainer.classList.add('box')
	this.elements.manicureImg.classList.add('box-picture')
	this.elements.manicureImg.src = manicureImg

	this.elements.pedicureContainer.classList.add('box')
	this.elements.pedicureImg.classList.add('box-picture')
	this.elements.pedicureImg.src = pedicureImg

	this.elements.asideContainer.classList.add('sidebar')

	this.elements.asideLinkHome.classList.add('sidebar-link')
	this.elements.asideLinkHomeIcon.classList.add('sidebar-link-icon')
	this.elements.asideLinkHomeIcon.src = homeImg
	this.elements.asideLinkHomeName.classList.add('sidebar-link-title')
	this.elements.asideLinkHomeName.textContent = 'Home'

	this.elements.asideLinkRecord.classList.add('sidebar-link')
	this.elements.asideLinkRecordIcon.classList.add('sidebar-link-icon')
	this.elements.asideLinkRecordIcon.src = calendarImg
	this.elements.asideLinkRecordName.classList.add('sidebar-link-title')
	this.elements.asideLinkRecordName.textContent = 'Record'

	this.elements.asideLinkPortfolio.classList.add('sidebar-link')
	this.elements.asideLinkPortfoliIcon.classList.add('sidebar-link-icon')
	this.elements.asideLinkPortfoliIcon.src = portfolioImg
	this.elements.asideLinkPortfolioName.classList.add('sidebar-link-title')
	this.elements.asideLinkPortfolioName.textContent = 'Portfolio'

	this.elements.asideLinkProfile.classList.add('sidebar-link')
	this.elements.asideLinkProfileIcon.classList.add('sidebar-link-icon')
	this.elements.asideLinkProfileIcon.src = instaImg
	this.elements.asideLinkProfileName.classList.add('sidebar-link-title')
	this.elements.asideLinkProfileName.textContent = 'Profile'

	this.elements.authTitle.textContent = 'My services:'

	this.elements.manicureContainer.append(this.elements.manicureImg)
	this.elements.manicureBtn.render(this.elements.manicureContainer)
	this.elements.pedicureContainer.append(this.elements.pedicureImg)
	this.elements.pedicureBtn.render(this.elements.pedicureContainer)
	this.elements.asideLinkHome.append(this.elements.asideLinkHomeIcon, this.elements.asideLinkHomeName)
	this.elements.asideLinkRecord.append(this.elements.asideLinkRecordIcon, this.elements.asideLinkRecordName)
	this.elements.asideLinkPortfolio.append(this.elements.asideLinkPortfoliIcon, this.elements.asideLinkPortfolioName)
	this.elements.asideLinkProfile.append(this.elements.asideLinkProfileIcon, this.elements.asideLinkProfileName)

	this.elements.asideContainer.append(this.elements.asideLinkHome, this.elements.asideLinkRecord, this.elements.asideLinkPortfolio, this.elements.asideLinkProfile)

	this.elements.cotentContainer.append(this.elements.authTitle, this.elements.manicureContainer, this.elements.pedicureContainer)

	this.elements.section.append(this.elements.cotentContainer, this.elements.asideContainer)

	this.parent.append(this.elements.section)
}
const homePage = new Home()
homePage.render()
