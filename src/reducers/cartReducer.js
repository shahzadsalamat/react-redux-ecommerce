const initialState = {
        cartItems: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TO-CART':
            return {
                cartItems: [
                    ...state.cartItems, 
                    action.data]
            }
        case 'REMOVE-TO-CART':
            return  {
                cartItems: [ 
                    ...state.cartItems.filter((i) => {return i !== action.data})
                ]
            }
        default:
            return state;
    }
}

export default cartReducer;