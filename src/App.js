import React, { Component } from 'react';
import './App.css';

var tasks = [
  { id: 101, title: 'Task 0', category: 'frontend', desc: 'Трешовый таск' },
  { id: 102, title: 'Task 1', category: 'frontend', desc: 'Мега трешовый таск' },
  { id: 103, title: 'Task 2', category: 'frontend', desc: 'Супер-мега трешовый таск' },
  { id: 104, title: 'Task 3', category: 'frontend', desc: 'Экстра-супер-мега трешовый таск' }
];

var categories = [
  {
    name: 'Frontend',
    children: [{
      name: 'React',
      children: [{
        name: 'Components',
        children: [{
          name: 'Statefull'
        }, {
          name: 'Stateless'
        }]
      }]
    }, {
      name: 'ES6'
    }, {
      name: 'Redux'
    }, {
      name: 'Angular'
    }]
  }, {
    name: 'Backend'
  }
];

class List extends Component {
  render(){
    return(
      <ul id="to-do-list">
        {
          tasks.map(({ id, title, desc }) => (
            <li key={ id }>
              <input type="checkbox" />
              <span className="task-title">{ title }</span>
              <span>{ desc }</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

class Categories extends Component {
  render(){
    return(
      <ul id="categories">
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
    )
  }
}

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this.getItem = this.getItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  getItem(ev){
    const newItem = document.getElementById('task-field').value;
    this.setState({content: newItem});
    tasks.push({desc: newItem});
    return newItem;
  }

  addItem(ev){
    const list = document.getElementById('to-do-list');
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    const getText = (function () {
      return this;
    }).call(this.getItem());

    if (getText !== ""){
      newLi.appendChild(checkbox);
      const textnode = document.createTextNode(getText);
      newLi.appendChild(textnode);
      list.appendChild(newLi);
    }

    return checkbox;

  }

  render(){
    return(
      <div className="input-wrapp">
        <input
          type="text"
          id="task-field"
          placeholder="Enter item title"
        />
        <button onClick={(event) => {
          this.getItem();
          this.addItem();
        }}>+</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-wrapp">
          <h1>To do list</h1>
          <div className="forms-wrapp">
            <AddTask />
          </div>
          <div className="content-wrapp">
            <Categories />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
