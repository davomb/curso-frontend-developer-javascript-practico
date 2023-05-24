/** Desktop Functionality */
const navEmail = document.querySelector('.navbar-email');

const toggleDesktopMenu = () => {
	const isAsideCartClosed = asideCart.classList.contains('inactive');

	if (!isAsideCartClosed) {
		asideCart.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
};

const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);

/** Mobile Functionality */
const menuHamIcon = document.querySelector('.menu');
const toggleMobileMenu = () => {
	const isAsideCartClosed = asideCart.classList.contains('inactive');

	if (!isAsideCartClosed) {
		asideCart.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');
};

const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

/** Cart Functionality */
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const toggleCartMenu = () => {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}

	asideCart.classList.toggle('inactive');
};

const asideCart = document.querySelector('.product-detail');
menuCarIcon.addEventListener('click', toggleCartMenu);
