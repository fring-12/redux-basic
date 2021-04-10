import { createStore } from 'redux'
import reducer from './reducers'
import cartItems from '../cart-items'

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 6
}

const store = createStore(reducer, initialStore)

export default store