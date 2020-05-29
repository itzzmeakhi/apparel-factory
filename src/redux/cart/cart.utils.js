export const addItemToCart = (cartItems, itemToBeAdded) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToBeAdded.id);

    if(existingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === itemToBeAdded.id ?
             {...cartItem, quantity : cartItem.quantity + 1}
             : cartItem
        ))
    } else {
        return [...cartItems, {...itemToBeAdded, quantity : 1}]
    }
}