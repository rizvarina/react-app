import React from 'react';
import { TodoItem } from '../todo-item';

export const List = ({ list, deleteItem, editDesc, changeDesc}) => (
  <ul id="to-do-list">
    {
      list.map(data => <TodoItem key={ data.id } { ...data } deleteItem={ deleteItem } editDesc={ editDesc } changeDesc={ changeDesc }/>)
    }
  </ul>
);
