import React,{Component} from 'react';
import LeftBar from './LeftBar';
import '../Style/index.css';

class NotFound extends Component{
    render(){
        return(
            <div>
                <LeftBar/>
                <div className="not-found">
                    <h1>404</h1>
                </div>
            </div>
        );
    }

}
export default NotFound;