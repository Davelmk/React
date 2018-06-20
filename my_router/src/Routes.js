import React,{Component} from 'react';
import {BrowserRouter, Route,Redirect,Switch} from 'react-router-dom'; 
import Home from './pages/Home';
import Rank from './pages/Rank';
import NotFound from './pages/Pag404';

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/rank" component={Rank}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }

}
export default Routes;