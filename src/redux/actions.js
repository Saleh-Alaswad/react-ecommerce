export const ADD_TO_LIST = 'ADD_TO_LIST'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'
export const FIND_BY_ID = 'FIND_BY_ID'
export function addToList(id, size) {
    return { type: ADD_TO_LIST, payload: { id, size } }
}
export function addToCart(id, size, quantity) {
    return { type: ADD_TO_CART, payload: { id, size, quantity } }
}

export function removeFromList(id) {
    return { type: REMOVE_FROM_LIST, payload: id }
}

export function searchByID(id) {
    return { type: FIND_BY_ID, payload: id }
}