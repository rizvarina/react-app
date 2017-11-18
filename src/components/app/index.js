import React from 'react';
import { List } from '../todolist';
import { NewItem } from '../additem';
import { Categories } from '../categories';
import PropTypes from 'prop-types';
import './index.css';

// const categories = [
//     {id: 'c-01', name: 'Cat 1', sub: ['c-05'], parentId: null},
//     {id: 'c-02', name: 'Cat 2', sub: [], parentId: null},
//     {id: 'c-03', name: 'Cat 3', sub: [], parentId: null},
//     {id: 'c-04', name: 'Cat 4', sub: [], parentId: null},
//     {id: 'c-05', name: 'Sub cat', sub: ['c-06', 'c-07'], parentId: 'c-01'},
//     {id: 'c-06', name: 'Sub cat 2', sub: [], parentId: 'c-05'},
//     {id: 'c-07', name: 'Sub cat 3', sub: [], parentId: 'c-05'},
// ];

const TodoApp = (props) => {

  const { list } = props;
  const { addItem } = NewItem;
  const { categories } = props;

  return (
    <div className="App">
      <div className="main-wrapp">
        <h1>To do list</h1>
        <NewItem
          list={ list }
          addItem={ addItem }
        />
        <div className="content-wrapp">
          <aside id="categories">
            <Categories tree={ categories } source={ categories }/>
          </aside>
          <List
            list={ list }
            className="to-do-list"
          />
        </div>
      </div>
    </div>
  );
};

TodoApp.propTypes = {
    list: PropTypes.array.isRequired
};

export default TodoApp;
