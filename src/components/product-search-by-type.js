import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProductByType } from '../actions'

const ProductSearchByType = () => {
    const dispatch = useDispatch();

    const [searchedOptions, setSearchedOptions] = useState({
        phone: false,
        laptop: false
    });

    const handleClick = (e) => {
        const { name, checked } = e.target;

        setSearchedOptions(
            {
                ...searchedOptions,
                [name]: checked
            })


    }

    useEffect(() => {

        const displaySelectedOption = Object.keys(searchedOptions).filter((x) => searchedOptions[x]);

        console.log('searchword:', displaySelectedOption.toString().replace(",", " "));

        dispatch(searchProductByType(displaySelectedOption.toString().replace(",", " ")));

    })


    return (
        <div className="product-search-by-type-container">
            <h6>Category Search</h6>
            <div>
                <label>phone</label>
                <input
                    type="checkbox"
                    name="phone"
                    onClick={handleClick}
                />
            </div>
            <div>
                <label>laptop</label>
                <input
                    type="checkbox"
                    name="laptop"
                    onClick={handleClick}
                />
            </div>
        </div >
    );
}

export default ProductSearchByType;

