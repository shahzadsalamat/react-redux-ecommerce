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
                ...state.cartItems, 
                cartItems: [
                    ...state.cartItems.filter((i) => { return (action.data !== i) })
                ]
            }
        default:
            return state;
    }
}

export default cartReducer;