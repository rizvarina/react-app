import { connect } from 'react-redux';

export const createConnector = (mapStateToProps, actions = {}) =>
    Component => {
        return connect(
            state => typeof mapStateToProps === 'function' ? mapStateToProps(state) : {},
            actions
        )(Component);
    };

export const createAction = type => payload => ({
    type, payload
});
