const navEmail = document.querySelector('.navbar-email');


const toggleDesktopMenu = () => {
    // console.log('click');
	desktopMenu.classList.toggle('inactive');
};

const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);

// console.log('Funciona');
