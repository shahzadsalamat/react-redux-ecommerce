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