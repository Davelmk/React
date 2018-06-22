import React,{Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import App from './Components/App';
import Rank from './Components/Rank';
import NotFound from './Components/Pag404';

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={App}/>
                    <Route path="/rank" component={Rank}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }

}
export default Routes;