import React, { useState } from 'react';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TodoItemLi, ButtonDeleteItem, TodoItemCheck } from './Todo.styled';

const TodoItem = ({ id, text, index, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TodoItemLi id={id}>
      <TodoItemCheck onClick={() => setIsChecked(!isChecked)}>
        {isChecked && <FontAwesomeIcon icon={faCheck} />}
      </TodoItemCheck>
      {index}. {text}
      <ButtonDeleteItem onClick={deleteItem}>
        <FontAwesomeIcon icon={faTrash} />
      </ButtonDeleteItem>

    </TodoItemLi>
  )
}

export default TodoItem;
