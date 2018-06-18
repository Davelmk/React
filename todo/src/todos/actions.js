import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text1,text2,text3,text4) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId ++,
  text1: text1,
  text2: text2,
  text3: text3,
  text4: text4,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

