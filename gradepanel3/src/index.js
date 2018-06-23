import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Component/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./Reducer/Reducer";
import Router from './Router/Router';

let  store = createStore(reducer);
// store.dispatch({
//     type: 'ADD',
//     item:[100,100,100,100,false,0]
//   });
//   store.dispatch({
//     type: 'ADD',
//     item:[10,10,10,10,false,1]
//   });

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
