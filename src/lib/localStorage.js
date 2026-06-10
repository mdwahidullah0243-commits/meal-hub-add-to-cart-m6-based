const getFoodItemFromLocalStorage = () => {
    let cart = [];
    const cartJSON = localStorage.getItem('cart');

    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    };

    return cart;
};

const addFoodItemToLocalStorage = (foodItem) => {
    const cart = getFoodItemFromLocalStorage();
    const existingFoodItem = cart.find(item => item.idMeal === foodItem.idMeal);

    if (!existingFoodItem) {
        cart.push(foodItem);
    };

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
};

const removeFoodItemFromLocalStorage = (foodItem) => {
    const cart = getFoodItemFromLocalStorage();
    const filteredFoodCart = cart.filter(item => item.idMeal !== foodItem.idMeal);

    const cartJSON = JSON.stringify(filteredFoodCart);
    localStorage.setItem('cart', cartJSON);
};

const removeAllFoodItemFromLocalStorage = (clear) => {
    let cart = getFoodItemFromLocalStorage();

    if(clear) {
        cart = [];
    };

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
};


export { 
    getFoodItemFromLocalStorage, 
    addFoodItemToLocalStorage, 
    removeFoodItemFromLocalStorage, 
    removeAllFoodItemFromLocalStorage 
};