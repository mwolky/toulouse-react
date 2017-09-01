import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import Main from './components/Main';
import Trip from './components/Trip';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { loadTours } from './actions/tourActions';
import { loadPages } from './actions/pageActions';

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(loadTours());
store.dispatch(loadPages());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/trip/:slug' component={Trip} />
                <Route path='/' component={Main} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
