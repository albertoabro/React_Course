import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = ({ target }) => { //this is a destructuring of event
        setInputValue(target.value) //resume of event.target.value
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const trimInputValue = inputValue.trim();

        if( trimInputValue.length <= 1) return;

        //setCategories((categories) => [...categories,inputValue]);
        onNewCategory( trimInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input
                type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={onChange} //If function's parameter it's an event, it's possible to omitted
            />
        </form>
    )
}

AddCategory.propTypes ={
    onNewCategory: PropTypes.func.isRequired
}