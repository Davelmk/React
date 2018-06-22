import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import reducers from "./Reducers"
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

let  store = createStore(reducers);

store.dispatch({
  type: 'INIT_GAME',
  brickNumberPerRow: 4
});

ReactDOM.render(
    <Provider store={store}>
        <Routes>
            <App/>
        </Routes>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
