import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import Main from './containers/Main';
import TripPage from './components/TripPage';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { loadTours } from './actions/tourActions';
import { loadPages } from './actions/pageActions';
const history = createHistory();
let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))));

store.dispatch(loadTours());
store.dispatch(loadPages());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/trip/:slug' component={TripPage} />
                <Route path='/' component={Main} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
