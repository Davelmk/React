import React, {PropTypes} from 'react';

const TodoItem = ({onToggle, onRemove, completed, text1,text2,text3,text4}) => {
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
      <label className="text">{text1}</label>&nbsp;
      <label className="text2">{text2}</label>&nbsp;
      <label className="text3">{text3}</label>&nbsp;
      <label className="text4">{text4}</label>
      <button className="remove" onClick={onRemove}>×</button>
    </li>
  )
};


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
};

export default TodoItem;
