const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const productValue = getInputValueById('product-name');
    const quantityValue = getInputValueById('product-quantity');
    
    addProductToDisplay(productValue, quantityValue)

    saveCartData(productValue, quantityValue)

};

const getLocalCartData = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveCartData = (product, quantity) => {
    const cartData = getLocalCartData();
    cartData[product] = quantity;
    const cartDataStrigify = JSON.stringify(cartData);

    localStorage.setItem('cart', cartDataStrigify);
}

const addProductToDisplay = (product, quantity) => {
    const olContainer = document.getElementById('ol-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    olContainer.appendChild(li);
}

const displayCartData = () => {
    const cartData = getLocalCartData();
    for(const product in cartData) {
        const quantity = cartData[product];
        addProductToDisplay(product, quantity)
    }
}

displayCartData()