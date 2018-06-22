import React,{Component} from 'react';
import {view as TopBar} from './TopBar'; 

class NotFound extends Component{
    render(){
        return(
            <div>
                <TopBar/>
                <h1>404</h1>
            </div>
        );
    }

}
export default NotFound;