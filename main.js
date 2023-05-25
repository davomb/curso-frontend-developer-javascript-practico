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

const asideCartContainer = document.querySelector('#shoppingCartContainer');
menuCarIcon.addEventListener('click', toggleCartMenu);

/** Products Details Close Button Functionality */
const closeProductDetailAside = () => {
	productDetailAside.classList.add('inactive');
};

const productDetailClose = document.querySelector('.product-detail-close');

/** Cart Arrow Close Button  Functionality */
const closeCartDetail = () => {
	asideCartContainer.classList.add('inactive');
};

const cartDetailClose = document.querySelector('.title-container img');
cartDetailClose.addEventListener('click', closeCartDetail);

/** Update navbar Cart Counter Functionality */
let cartCounter = document.querySelector('#navbar-cart-counter');
let counter = 0;

const updateCartCounter = () => {
	counter++;
	cartCounter.innerText = counter.toString();
};

cartCounter.innerText = counter.toString();

/** Remove Cart Item Functionality */
const removeCartItem = (e) => {
	const cartItem = e.target.closest('.cart-item-remove');
	cartItem.remove();
};

/** Add to Cart Functionality */
const addProductToCart = (e) => {
	updateCartCounter();

	const productCard = e.target.closest('.product-card');
	const productImg = productCard
		.querySelector('.product-card img')
		.getAttribute('src');
	const productName = productCard.querySelector(
		'.product-info p:last-child'
	).innerText;

	const productPrice = productCard.querySelector(
		'.product-info p:first-child'
	).innerText;

	const shoppingCart = document.querySelector(
		'.my-order-content .shopping-cart'
	);

	const cartItemFigure = document.createElement('figure');
	const cartItemImg = document.createElement('img');
	cartItemImg.setAttribute('src', productImg);

	const cartItemName = document.createElement('p');
	cartItemName.innerText = productName;
	cartItemName.classList.add('cart-item-name');

	const cartItemPrice = document.createElement('p');
	cartItemPrice.innerText = productPrice;
	cartItemPrice.classList.add('cart-item-price');

	const cartItemRemove = document.createElement('img');
	cartItemRemove.setAttribute('src', './icons/icon_close.png');
	cartItemRemove.setAttribute('alt', 'remove');
	cartItemRemove.classList.add('cart-item-remove');
	cartItemRemove.addEventListener('click', removeCartItem);

	cartItemFigure.appendChild(cartItemImg);
	shoppingCart.appendChild(cartItemFigure);
	shoppingCart.appendChild(cartItemName);
	shoppingCart.appendChild(cartItemPrice);
	shoppingCart.appendChild(cartItemRemove);
};

/**  Show Product Detail */
const productDetailAside = document.querySelector('#productDetail');

const toggleProductDetail = () => {
	asideCartContainer.classList.add('inactive');
	productDetailAside.classList.remove('inactive');
};

/** Product Detail Open Button Functionality */
const openProductDetailAside = (e) => {
	const productCard = e.target.closest('.product-card');
	const productIndex = [...productCard.parentElement.children].indexOf(
		productCard
	);
	const selectedProduct = productList[productIndex];
	const { description } = selectedProduct;

	toggleProductDetail();

	const productImg = productCard
		.querySelector('.product-card img')
		.getAttribute('src');
	const productInfoElements = productCard.querySelectorAll('.product-info p');
	const productName = productInfoElements[1].innerText;
	const productPrice = productInfoElements[0].innerText;

	const productDetail = document.querySelector('#productDetail');
	productDetail.textContent = '';

	const productDetailDivClose = document.createElement('div');
	productDetailDivClose.classList.add('product-detail-close');

	const productDetailImgClose = document.createElement('img');
	productDetailImgClose.src = './icons/icon_close.png';
	productDetailImgClose.alt = 'close';
	productDetailImgClose.addEventListener('click', closeProductDetailAside);

	const productDetailImg = document.createElement('img');
	productDetailImg.src = productImg;

	const productDetailInfo = document.createElement('div');
	productDetailInfo.classList.add('product-info');

	const productDetailName = document.createElement('p');
	productDetailName.innerText = productName;

	const productDetailPrice = document.createElement('p');
	productDetailPrice.innerText = productPrice;

	const productDetailDescription = document.createElement('p');
	productDetailDescription.innerText = description;

	const productDetailButton = document.createElement('button');
	productDetailButton.classList.add('primary-button', 'add-to-cart-button');
	productDetailButton.addEventListener('click', addProductToCart);

	const productDetailBtnImg = document.createElement('img');
	productDetailBtnImg.src = './icons/bt_add_to_cart.svg';
	productDetailBtnImg.alt = 'add to cart';

	const productDetailBtnName = document.createElement('span');
	productDetailBtnName.innerText = 'Add to cart';

	productDetail.appendChild(productDetailDivClose);
	productDetailDivClose.appendChild(productDetailImgClose);
	productDetail.appendChild(productDetailImg);
	productDetail.appendChild(productDetailInfo);
	productDetailInfo.appendChild(productDetailName);
	productDetailInfo.appendChild(productDetailPrice);
	productDetailInfo.appendChild(productDetailDescription);
	productDetailInfo.appendChild(productDetailButton);
	productDetailButton.appendChild(productDetailBtnImg);
	productDetailButton.appendChild(productDetailBtnName);
};

/** Products List Functionality */
const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque quis lacus eu viverra. In hac habitasse platea dictumst. Fusce sit amet nibh id erat porttitor posuere. Sed molestie justo quis arcu consectetur rhoncus. Cras ut blandit sapien. Suspendisse varius, odio vitae vulputate rhoncus, diam risus vestibulum tortor, eu ullamcorper mauris magna in felis.',
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Pantalla',
	price: 500,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque quis lacus eu viverra. In hac habitasse platea dictumst. Fusce sit amet nibh id erat porttitor posuere. Sed molestie justo quis arcu consectetur rhoncus. Cras ut blandit sapien.',
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'PC',
	price: 350,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque quis lacus eu viverra. In hac habitasse platea dictumst. Fusce sit amet nibh id erat porttitor posuere. Sed molestie justo quis arcu consectetur rhoncus.',
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Bike',
	price: 120,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque quis lacus eu viverra. In hac habitasse platea dictumst. Fusce sit amet nibh id erat porttitor posuere. Sed molestie justo quis arcu consectetur rhoncus. Cras.',
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Pantalla',
	price: 500,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque quis lacus eu viverra. In hac habitasse platea dictumst. Fusce sit amet nibh id erat porttitor posuere. Sed molestie justo quis.',
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'PC',
	price: 350,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque quis lacus eu viverra. In hac habitasse platea dictumst. Fusce sit amet nibh id erat porttitor posuere. Sed molestie justo quis arcu.',
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

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
		productImgCard.classList.add('product-cart');
		productImgCard.addEventListener('click', addProductToCart);

		productInfoFigure.appendChild(productImgCard);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
};

renderProducts(productList);
