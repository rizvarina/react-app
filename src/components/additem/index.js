import React from 'react';
// import { PropTypes } from 'prop-types';
import { addConnector } from './connector';
import './index.css';

const AddItem = ({list, addItem}) => (
  <div className="input-wrapp">
    <input
      type="text"
      id="task-field"
      placeholder="Enter item title"
    />
    <button onClick={ () => addItem() }>+</button>
  </div>
);

export const NewItem = addConnector(AddItem);
