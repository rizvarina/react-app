// import * as constants from '../actions/constants';

const initialState = [
    {id: 'c-01', name: 'Cat', sub: ['c-05'], parentId: null},
    {id: 'c-02', name: 'Cat', sub: [], parentId: null},
    {id: 'c-03', name: 'Cat', sub: [], parentId: null},
    {id: 'c-04', name: 'Cat', sub: [], parentId: null},
    {id: 'c-05', name: 'Sub cat', sub: ['c-06', 'c-07'], parentId: 'c-01'},
    {id: 'c-06', name: 'Sub cat', sub: [], parentId: 'c-05'},
    {id: 'c-07', name: 'Sub cat', sub: [], parentId: 'c-05'},
];

export const categories = (state = initialState, action) => {

  switch (action.type) {
    default:
      return state;
  }

};
