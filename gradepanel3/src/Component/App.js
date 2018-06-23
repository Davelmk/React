import React,{Component} from 'react';
import GradeList from '../Container/GradeList';
import LeftBar from './LeftBar';

class App extends Component{
    render(){
        return(
            <div>
                <hr/>
                <LeftBar/>
                <hr/>
                <GradeList/>
            </div>
        );
    }
}
export default App;