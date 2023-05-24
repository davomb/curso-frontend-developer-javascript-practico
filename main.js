/** Desktop Functionality */
const navEmail = document.querySelector('.navbar-email');
const toggleDesktopMenu = () => {
	const isAsideCartContainerClosed =
		asideCartContainer.classList.contains('inactive');

	if (!isAsideCartContainerClosed) {
		asideCartContainer.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
};

const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);

/** Mobile Functionality */
const menuHamIcon = document.querySelector('.menu');
const toggleMobileMenu = () => {
	const isAsideCartContainerClosed =
		asideCartContainer.classList.contains('inactive');

	if (!isAsideCartContainerClosed) {
		asideCartContainer.classList.add('inactive');
	}

    closeProductDetailAside();

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

	const isProductDetailClosed =
		productDetailAside.classList.contains('inactive');

	if (!isProductDetailClosed) {
		productDetailAside.classList.add('inactive');
	}

	asideCartContainer.classList.toggle('inactive');
};

const asideCartContainer = document.querySelector('#shoppingCarContainer');
menuCarIcon.addEventListener('click', toggleCartMenu);

/** Product Detail Functionality */
const openProductDetailAside = () => {
	asideCartContainer.classList.add('inactive');

	productDetailAside.classList.remove('inactive');
};

const productDetailAside = document.querySelector('#productDetail');

/** Products Functionality */
const closeProductDetailAside = () => {
	productDetailAside.classList.add('inactive');
};

const productDetailClose = document.querySelector('.product-detail-close');
productDetailClose.addEventListener('click', closeProductDetailAside);

/** Products Functionality */
const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Pantalla',
	price: 500,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'PC',
	price: 350,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Bike',
	price: 120,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Pantalla',
	price: 500,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'PC',
	price: 350,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/

const renderProducts = (arr) => {
	for (let product of arr) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		// product = {name, price, image} -> product.image
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);
		productImg.addEventListener('click', openProductDetailAside);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

		const productInfoDiv = document.createElement('div');

		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;

		const productName = document.createElement('p');
		productName.innerText = product.name;

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productInfoFigure = document.createElement('figure');
		const productImgCard = document.createElement('img');
		productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.appendChild(productImgCard);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
};

renderProducts(productList);
