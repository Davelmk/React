import React,{Component} from 'react';
import LeftBar from './LeftBar';
import UnSelectedList from '../Container/UnSelectedList';

class CheckedList extends Component{
    render(){
        return(
            <div>
                <hr/>
                <LeftBar/>
                <div>
                    {/* 表头 */}
                    <span>name</span>&emsp;&emsp;
                    <span>语文</span>&emsp;&emsp;
                    <span>数学</span>&emsp;&emsp;
                    <span>英语</span>&emsp;&emsp;
                    <span>物理</span>
                    <hr/>
                    {/* 成绩面板 */}
                    <UnSelectedList/>
                </div> 
            </div>
        );
    }
}
export default CheckedList;