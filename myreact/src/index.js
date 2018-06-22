import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BmobApp from './Bmob';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BmobApp/>,
    document.getElementById('root')
);
registerServiceWorker();
