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

export const removeItemFromCart = (cartItems, cartItemToBeRemoved) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToBeRemoved.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === existingCartItem.id ? { ...cartItem, quantity : cartItem.quantity - 1 } : cartItem
    )
}