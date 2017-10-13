import React, { Component } from 'react';
import './App.css';

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
      const textnode = document.createTextNode(getText);
      newLi.appendChild(textnode);
      newLi.appendChild(checkbox);
      list.appendChild(newLi);
    }

    return checkbox;
  }

  render(){
    return(
      <div className="main-wrapp">
        <h1>To do list</h1>
        <div className="input-wrapp">
          <input
            type="text"
            id="task-field"
          />
          <button onClick={(event) => {
            this.getItem();
            this.addItem();
          }}>Add</button>
        </div>

        <ul id="to-do-list">
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTask />
      </div>
    );
  }
}

export default App;
