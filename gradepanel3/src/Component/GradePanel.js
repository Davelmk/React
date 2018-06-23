import React,{Component} from 'react';
// import LeftBar from './LeftBar';
import AllList from '../Container/AllList';
import '../Style/index.css';

class GradePanel extends Component{
    constructor(props){
        super(props);
        this.onClickButton=this.onClickButton.bind(this);
    }
    render(){
        return(
            <div>
                {/* <LeftBar/> */}
                <div>
                    {/* 表头 */}
                    <span>name</span>&emsp;&emsp;
                    <span>语文</span>&emsp;&emsp;
                    <span>数学</span>&emsp;&emsp;
                    <span>英语</span>&emsp;&emsp;
                    <span>物理</span>
                    <br/>
                    &emsp;&emsp;&emsp;&emsp;
                    {/* 输入栏 */}
                    <input className="inputStyle" ref="chinese" type="number"/>
                    <input className="inputStyle" ref="math" type="number"/>
                    <input className="inputStyle" ref="english" type="number"/>
                    <input className="inputStyle" ref="physics" type="number"/>
                    <button onClick={this.onClickButton}>确定</button>
                    <hr/>
                    {/* 成绩面板 */}
                    <AllList/>
                    <hr/>
                    {/* 分数总计 */}
                    <span>总计:</span>&emsp;&emsp;
                    <span>{this.props.sumCH}</span>&emsp;&emsp;
                    <span>{this.props.sumMath}</span>&emsp;&emsp;
                    <span>{this.props.sumEN}</span>&emsp;&emsp;
                    <span>{this.props.sumPhy}</span>
                </div> 
            </div>
        );
    }
    onClickButton(){
        console.log("提交成绩到store");
        var item=[];
        item.push(this.refs.chinese.value,
            this.refs.math.value,
            this.refs.english.value,
            this.refs.physics.value);
        this.props.submit(item);
        this.clearInput();
    }
    clearInput(){
        this.refs.chinese.value='';
        this.refs.math.value='';
        this.refs.english.value='';
        this.refs.physics.value='';
    }
}
export default GradePanel;