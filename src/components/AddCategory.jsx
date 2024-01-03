import { useState } from "react"
import { PropTypes } from "prop-types"

export const AddCategory = ({ onNewCategory })=>{
    
    const [inputValue, setInputValue] = useState(""); 
    const onInputValue = ({ target })=>{
        setInputValue( target.value );
    }
    const onSubmit = (e)=>{

        e.preventDefault(); 
        if( inputValue.trim().length <= 1) return 
        onNewCategory(inputValue.trim());
        setInputValue(""); 
    }
    return (
      <form onSubmit={onSubmit}>
        <input
          value={inputValue}
          type="text"
          placeholder="Search gif"
          onChange={onInputValue}
        />
        <button onClick={ onSubmit }>Search gif </button>
      </form>
    );
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func,
}