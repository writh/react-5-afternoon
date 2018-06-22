import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();