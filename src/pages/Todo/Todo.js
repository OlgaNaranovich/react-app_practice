import React, { useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = new FormData(e.target).get("todo");
    if (newTodo) {
      const newTodoList = !!todoList.length ? [...todoList].concat(newTodo) : [newTodo];
      setTodoList(newTodoList);
      setInputValue('');
    }     
  }

  const deleteTodoItem = (e) => {
    const target = e.target.closest('li').id;
    const newList = todoList.filter(item => item !== target);
    setTodoList(newList);
  }

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <h2>What do I need to do?</h2>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" value={inputValue} onChange={onChange} />
        <button type={"submit"}>Add to list</button>
      </form>

      <ul>
        {todoList.map((text, index) => (
          <TodoItem 
            key={text} 
            id={text} 
            text={text} 
            index={index + 1} 
            deleteItem={deleteTodoItem} 
          />
        ))}
      </ul>
    </>
  )
}

export default Todo;

