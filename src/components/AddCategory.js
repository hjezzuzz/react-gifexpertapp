import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        if( inputValue.length > 2){
            setCategories((cat) => [ inputValue, ...cat ]);
            setInputValue('');    
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type = "text" 
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}