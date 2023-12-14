import { useState } from "react"

export const AddCategory = ()=>{
    const [inputValue, setInputValue] = useState(); 
    const onInputValue = ({ target })=>{
        console.log( target.value); 
        setInputValue( target.value );
    }
    const onSubmit = (e)=>{
        e.preventDefault(); 
        console.log( inputValue)
    }
    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gif"
                onChange={ onInputValue }
            />
        </form>
    )
}