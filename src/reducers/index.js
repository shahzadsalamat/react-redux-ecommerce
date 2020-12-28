import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productDataReducer from './productDataReducer'

const allReducer = combineReducers({
    cartReducer: cartReducer,
    productDataReducer: productDataReducer
})

export default allReducer;