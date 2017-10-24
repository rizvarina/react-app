import React, { Component } from 'react';
import './App.css';

const Item = ({ id, title, desc, deleteItem, editDesc, changeDesc }) => (
    <li key={ id }>
      <input type="checkbox" />
      <span className="task-title">{ title }</span>
      <input type="text" onChange={ () => changeDesc(id, desc) } defaultValue={desc} className="edit-desc" disabled/>
      <i onClick={ () => deleteItem(id) } className="fa fa-trash icon-delete" aria-hidden="true"></i>
      <i onClick={ () => editDesc(id, desc) } className="fa fa-pencil icon-edit" aria-hidden="true"></i>
    </li>
);

const Cat = ({ id, name, children }) => (
    <li key={ id }>
      {name}
    </li>
);

const Categories = ({ categories }) => (
  <ul id="categories">
    {
      categories.map(categories => <Cat key={ categories.id } { ...categories } />)
    }
  </ul>
);

const List = ({ list, deleteItem, editDesc, changeDesc}) => (
  <ul id="to-do-list">
    {
      list.map(data => <Item key={ data.id } { ...data } deleteItem={ deleteItem } editDesc={ editDesc } changeDesc={ changeDesc }/>)
    }
  </ul>
);

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

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      list: [
        { id: 101, title: 'Task 1', category: 'frontend', desc: 'Мега трешовый таск' },
        { id: 102, title: 'Task 2', category: 'frontend', desc: 'Супер-мега трешовый таск' },
        { id: 103, title: 'Task 3', category: 'frontend', desc: 'Совсем уж трешовый таск' },
        { id: 104, title: 'Task 4', category: 'frontend', desc: 'Невозможно-трешовый таск' },
        { id: 105, title: 'Task 5', category: 'frontend', desc: 'Кошмарно-трешовый таск' },
        { id: 106, title: 'Task 6', category: 'frontend', desc: 'Безысходно-трешовый таск' },
        { id: 107, title: 'Task 7', category: 'frontend', desc: 'Отчаянно-трешовый таск' }
      ],

      categories: [
        {
          name: 'Frontend',
          children: [{
            name: 'React',
            id: 100,
            children: [{
              name: 'Components',
              id: 101,
              children: [{
                name: 'Statefull',
                id: 102
              }, {
                name: 'Stateless',
                id: 103
              }]
            }]
          }, {
            name: 'ES6',
            id: 104
          }, {
            name: 'Redux',
            id: 105
          }, {
            name: 'Angular',
            id: 106
          }]
        }, {
          name: 'Backend',
          id: 107
        }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editDesc = this.editDesc.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
  }

  deleteItem(id) {
    const { list } = this.state;

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        const copy = this.state.list.slice();
        copy.splice(i, 1);
        this.setState({
          list: copy
        });
      }
    }
  }

  addItem() {
    const { list } = this.state,
          value = document.getElementById('task-field').value,
          copy = this.state.list.slice(),
          i = copy.length + 1,
          newItem = {id: i, title: value, desc: '', category: ''};

    copy.push(newItem);

    this.setState({
      list: copy
    });

  }

  editDesc(id, desc) {
    const input = document.querySelectorAll('.edit-desc');
    console.log(input);

    for (let i = 0; i < input.length; i++){
      if (input[i].value === desc && input[i].disabled === true){
        input[i].disabled = false;
        input[i].style.border = "1px solid green";
      } else {
        input[i].disabled = true;
        input[i].style.border = "none";
      }
    }
  }

  changeDesc( id, desc ) {
    const { list } = this.state;
    const input = document.getElementsByTagName('input');

    for (let i = 0; i < input.length; i++) {
      if( input[i].defaultValue === desc && input[i].value !== desc){
        const newval = input[i].value;

        for (let a = 0; a < list.length; a++) {
          if (list[a].desc === desc) {
            const copy = this.state.list.slice();
            copy[a].desc = newval;
            this.setState({
              list: copy
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main-wrapp">
          <h1>To do list</h1>
          <div className="forms-wrapp">
            <AddItem
              list={ this.state.list }
              addItem={ this.addItem }
            />
          </div>
          <div className="content-wrapp">
            <Categories
              categories={ this.state.categories }
            />
            <List
              list={ this.state.list }
              deleteItem={ this.deleteItem }
              editDesc={ this.editDesc }
              changeDesc={ this.changeDesc }
              className="to-do-list"
            />
          </div>
        </div>
      </div>
    );
  }
};

// const TodoDetails = ({ item }) => <h4>{ item.desc }</h4>;

// var categories = [
//   {
//     name: 'Frontend',
//     children: [{
//       name: 'React',
//       id: 100,
//       children: [{
//         name: 'Components',
//         id: 101,
//         children: [{
//           name: 'Statefull',
//           id: 102
//         }, {
//           name: 'Stateless',
//           id: 103
//         }]
//       }]
//     }, {
//       name: 'ES6',
//       id: 104
//     }, {
//       name: 'Redux',
//       id: 105
//     }, {
//       name: 'Angular',
//       id: 106
//     }]
//   }, {
//     name: 'Backend',
//     id: 107
//   }
// ];



// class AddTask extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { content: '' };
//     this.getItem = this.getItem.bind(this);
//     this.addItem = this.addItem.bind(this);
//   }
//
//   getItem(ev){
//     const tasks = ['1', '20', '3'];
//     const newItem = document.getElementById('task-field').value;
//     this.setState({content: newItem});
//     tasks.push({desc: newItem});
//     return newItem;
//   }
//
//   addItem(ev){
//     const list = document.getElementById('to-do-list');
//     const newLi = document.createElement('li');
//     const checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox');
//
//     const getText = (function () {
//       return this;
//     }).call(this.getItem());
//
//     if (getText !== ""){
//       newLi.appendChild(checkbox);
//       const textnode = document.createTextNode(getText);
//       newLi.appendChild(textnode);
//       list.appendChild(newLi);
//     }
//
//     return checkbox;
//
//   }
//
//   render(){
//     return(
//       <div className="input-wrapp">
//         <input
//           type="text"
//           id="task-field"
//           placeholder="Enter item title"
//         />
//         <button onClick={(event) => {
//           this.getItem();
//           this.addItem();
//         }}>+</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="main-wrapp">
//           <h1>To do list</h1>
//           <div className="forms-wrapp">
//             <AddTask />
//           </div>
//           <div className="content-wrapp">
//             <Categories />
//             <List />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Добавить айдишники каждой категории
//
// class List extends Component {
//   render(){
//     return(
//       <ul id="to-do-list">
//         {
//           tasks.map(({ id, title, desc }) => (
//             <li key={ id }>
//               <input type="checkbox" />
//               <span className="task-title">{ title }</span>
//               <span>{ desc }</span>
//             </li>
//           ))
//         }
//       </ul>
//     )
//   }
// }

export default App;
