import { connect } from 'react-redux';
// import { createConnector } from '../../helpers';
import { addItem } from '../../actions';

const mapDispatchToProps = {
    addItem
};

export const addConnector = function(component) {
    return connect(null, mapDispatchToProps)(component);
};
