import * as constants from '../actions/constants';

const initialState = [
  { id: 101, title: 'Task 1', category: 'frontend', desc: 'Мега трешовый таск' },
  { id: 102, title: 'Task 2', category: 'frontend', desc: 'Супер-мега трешовый таск' },
  { id: 103, title: 'Task 3', category: 'frontend', desc: 'Совсем уж трешовый таск' },
  { id: 104, title: 'Task 4', category: 'frontend', desc: 'Невозможно-трешовый таск' },
  { id: 105, title: 'Task 5', category: 'frontend', desc: 'Кошмарно-трешовый таск' },
  { id: 106, title: 'Task 6', category: 'frontend', desc: 'Безысходно-трешовый таск' },
  { id: 107, title: 'Task 7', category: 'frontend', desc: 'Отчаянно-трешовый таск' }
];

export const todolist = (state = initialState, action) => {

    switch (action.type) {
        case constants.DELETE_ITEM:
          const copy = state.filter(val => val.id !== action.payload);
          return copy;

        case constants.ADD_ITEM:
          const value = document.getElementById('task-field').value;
          const copy2 = state.slice();
          const i = copy2.length + 1;
          const newItem = {id: i, title: value, desc: '', category: ''};
          copy2.push(newItem);
          return copy2;

        case constants.EDIT_DESC: {
            const input = document.querySelectorAll('.edit-desc');

            for (let i = 0; i < input.length; i++){
              const id = state[i].id;
              if (id === action.payload && input[i].disabled === true){
                input[i].disabled = false;
                input[i].style.border = "1px solid green";
              } else {
                input[i].disabled = true;
                input[i].style.border = "none";
              }
          };

          return state;

        }

        case constants.CHANGE_DESC: {

        const newVal = document.querySelector('.edit-desc:enabled').value;

        const copy = state.filter(function(val, i, arr) {
          if ( val.id === action.payload ){
            val.desc = newVal;
            return newVal;
          } else {
            return val;
          }

        });

        return copy;

      }
    }

    return state;
};
