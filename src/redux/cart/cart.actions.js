import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => {
    return {
        type : CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

export const addCartItem = (item) => {
    return {
        type : CartActionTypes.ADD_CART_ITEM,
        payload : item
    }
}

export const removeCartItem = (item) => {
    return {
        type : CartActionTypes.REMOVE_CART_ITEM,
        payload : item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type : CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload : item
    }
}