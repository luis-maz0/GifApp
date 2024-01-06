import { useState } from "react"
import { PropTypes } from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState("");
  const onInputValue = ({ target }) => {
    setInputValue(target.value);
  }
  const onSubmit = (e) => {

    e.preventDefault();
    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim());
    setInputValue("");
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="search-container">
        <input
          value={inputValue}
          type="text"
          placeholder="Example: One Piece"
          onChange={onInputValue}
        />
        <button className="btn" onClick={onSubmit}>Search</button>
      </div>
    </form>
  );
}
AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
}