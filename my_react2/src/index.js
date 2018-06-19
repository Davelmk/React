import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import Toggle from './event/toggle'
// import Login from './render/Login'
// import Expression from './expression/expression'
// import Page from './hide/hideComponent'
// import ListItems from './list/list'
// import Form from './forms/form'
// import TextForm from './forms/textForm';
// import Select from './forms/select';
// import FileInput from './forms/fileInput';
// import Reservation from './forms/reservation';
// import Temperature from './state/temperature';
// import Dialog from './composition/dialog';
// import SplitPanel from './composition/splitpanel';
import SignUp from './composition/signup';


ReactDOM.render(
    // <Toggle/>,
    // <Login/>,
    // <Expression/>,
    // <Page/>,
    // <ListItems/>,
    // <Form/>,
    // <TextForm/>,
    // <Select/>,
    // <FileInput/>,
    // <Reservation/>,
    // <Temperature/>,
    // <Dialog/>,
    // <SplitPanel/>,
    <SignUp/>,
    document.getElementById('root')
);
registerServiceWorker();