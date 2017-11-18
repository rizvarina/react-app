import React from 'react';
import { PropTypes } from 'prop-types';
import { itemConnector } from './connector';
import './index.css';

export const Item = ({ id, title, desc, deleteItem, editDesc, changeDesc }) => (
    <li key={ id }>
      <input type="checkbox" />
      <span className="task-title">{ title }</span>
      <input type="text" onChange={ () => changeDesc(id, desc) } defaultValue={desc} className="edit-desc" disabled/>
      <i onClick={ () => deleteItem(id) } className="fa fa-trash icon-delete" aria-hidden="true"></i>
      <i onClick={ () => editDesc(id, desc) } className="fa fa-pencil icon-edit" aria-hidden="true"></i>
    </li>
);

Item.propTypes = {
  id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
  ]).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export const TodoItem = itemConnector(Item);
