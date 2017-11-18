import { connect } from 'react-redux';
import { deleteItem, addItem, editDesc, changeDesc } from '../../actions';

const mapDispatchToProps = {
    deleteItem,
    addItem,
    editDesc,
    changeDesc
};

export const itemConnector = function(component) {
    return connect(null, mapDispatchToProps)(component);
};
