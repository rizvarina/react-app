import { connect } from 'react-redux';
import { createConnector } from '../../helpers';
import { deleteItem, addItem, editDesc } from '../../actions';

const mapDispatchToProps = {
    deleteItem,
    addItem,
    editDesc
};

export const itemConnector = function(component) {
    return connect(null, mapDispatchToProps)(component);
};
