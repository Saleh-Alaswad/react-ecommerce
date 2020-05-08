import { combineReducers } from 'redux'
import { ADD_TO_LIST, REMOVE_FROM_LIST, FIND_BY_ID, ADD_TO_CART } from './actions'
import DUMMY_DATA from '../assets/DUMMY'

const initFavorites = [
    { id: 112, size: 's' },
    { id: 113, size: 'm' }
]
const initShoppingCart = [
    { id: 115, size: 's', quantity: 2 },
    { id: 121, size: 'm', quantity: 1 }
]

function favorites(state = initFavorites, action) {
    switch (action.type) {
        case ADD_TO_LIST:
            return [
                ...state,
                action.payload
            ]
        case REMOVE_FROM_LIST:
            return state.filter(id => id !== action.payload)
        default:
            return state
    }
}
function shoppingCart(state = initShoppingCart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        // case REMOVE_FROM_LIST:
        //     return state.filter(id => id !== action.payload)
        default:
            return state
    }
}

function products(state = DUMMY_DATA, action) {
    switch (action.type) {
        case FIND_BY_ID:
            return state.men.filter(product => product.id === action.payload)
        default:
            return state
    }
}
const eCommerceApp = combineReducers({
    favorites, products, shoppingCart
})

export default eCommerceApp