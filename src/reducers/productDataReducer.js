import Data from '../data.json';
const initialState = {
    productData: Data
}

const ProductDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH-PRODUCT-BY-KEYWORD':
            state = initialState
            return {
                productData: [
                    ...state.productData.filter(
                        product => {
                            if (action.searchKeyword == null) {
                                return state
                            }
                            else if (product.name.toLowerCase().includes(action.searchKeyword.toLowerCase())) {
                                return product
                            }
                            else {
                                return null
                            }
                        }
                    )
                ]
            }
        case 'SEARCH-PRODUCT-BY-TYPE':
            state = initialState
            return {
                productData: [
                    ...state.productData.filter(
                        product => {
                            if (action.searchKeyword === '') {
                                return state
                            }
                            else if (action.searchKeyword.toLowerCase().includes(product.type.toLowerCase())) {
                                return product
                            }
                            else {
                                return null
                            }
                        }
                    )
                ]
            }


        default:
            return state;
    }

}

export default ProductDataReducer;