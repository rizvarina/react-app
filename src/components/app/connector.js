import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
      list: state.todolist,
      categories: state.categories
  };
};

export const appConnector = function(component) {
  return connect(mapStateToProps)(component);
};
