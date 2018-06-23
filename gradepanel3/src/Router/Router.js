import React,{Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import App from '../Component/App';
import CheckedList from '../Component/CheckedList';
import UnCheckedList from '../Component/UnCheckedList';
import NotFound from '../Component/NotFound';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={App}/>
                    <Route path="/checked" component={CheckedList}/>
                    <Route path="/unchecked" component={UnCheckedList}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }

}
export default Router;