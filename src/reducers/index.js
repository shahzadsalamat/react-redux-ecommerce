import { combineReducers } from 'redux';
import cartReducer from './cartReducer'

const allReducer = combineReducers({
    cartReducer: cartReducer
})

export default allReducer;