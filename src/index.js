import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { myStore } from './store';
import { appConnector } from './components/app/connector';

window.store = myStore;

const MyApp = appConnector(TodoApp);

ReactDOM.render(
    <Provider store={ myStore }>
        <MyApp />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
