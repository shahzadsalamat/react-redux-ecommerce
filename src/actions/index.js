export const addToCart = (data) => {
    return (
        {
            type: 'ADD-TO-CART',
            data: data
        }
    );
}

export const removeToCart = (data) => {
    return (
        {
            type: 'REMOVE-TO-CART',
            data: data
        }
    );
}

export const searchProduct = (searchKeyword) => {
    return (
        {
            type: 'SEARCH-PRODUCT-BY-KEYWORD',
            searchKeyword: searchKeyword
        }
    );
}

export const searchProductByType = (searchKeyword) => {
    return (
        {
            type: 'SEARCH-PRODUCT-BY-TYPE',
            searchKeyword: searchKeyword
        }
    );
}