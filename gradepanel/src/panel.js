import React, {Component} from 'react';
import Item from './item';

const style = {
    margin: '20px'
};
const inputStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    outline: 'none',
    width: '60px',
    height: '30px',
    lineHeight: '30px',
    textIndent: '10px',
    fontSize: '18px',
    borderColor: 'red',
    borderStyle: 'solid',
    borderTopWidth: '0px',
    borderRightWidth: '0px',
    borderBottomWidth: '1px',
    borderLeftWidth: '0px',
};
class Panel extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {
            sumCH: 0,
            sumMath: 0,
            sumEN: 0,
            sumPhy: 0,
            num: 0,
            itemArray:[],
            stateArray:[],
        }
    }

    render() {
        return (
            <div style={style}>
                <span>name</span>&emsp;&emsp;
                <span>语文</span>&emsp;&emsp;
                <span>数学</span>&emsp;&emsp;
                <span>英语</span>&emsp;&emsp;
                <span>物理</span>
                <br/>
                &emsp;&emsp;&emsp;&emsp;
                <input style={inputStyle} ref="chinese" type="number"/>
                <input style={inputStyle} ref="math" type="number"/>
                <input style={inputStyle} ref="english" type="number"/>
                <input style={inputStyle} ref="physics" type="number"/>
                <button onClick={this.onClickButton}>确定</button>
                <hr/>
                <span>成绩单：</span><br/>
                {this.returnItems()}
                <hr/>
                <span>总计:</span>&emsp;&emsp;
                <span>{this.state.sumCH}</span>&emsp;&emsp;
                <span>{this.state.sumMath}</span>&emsp;&emsp;
                <span>{this.state.sumEN}</span>&emsp;&emsp;
                <span>{this.state.sumPhy}</span>
            </div>
        );
    }
    onClickButton(){
        this.setState({sumCH:this.state.sumCH + ~~(this.refs.chinese.value)});
        this.setState({sumMath:this.state.sumMath + ~~(this.refs.math.value)});
        this.setState({sumEN:this.state.sumEN + ~~(this.refs.english.value)});
        this.setState({sumPhy:this.state.sumPhy + ~~(this.refs.physics.value)});
        var item=new Array();
        item.push(this.refs.chinese.value,
            this.refs.math.value,
            this.refs.english.value,
            this.refs.physics.value);
        this.setState(preState=>({
            itemArray:preState.itemArray.concat([item])
        }));
        this.setState(preState=>({
            stateArray:preState.stateArray.concat(false)
        }));
        this.setState({num:this.state.num+1});
        this.clearInput();
    }
    clearInput(){
        this.refs.chinese.value='';
        this.refs.math.value='';
        this.refs.english.value='';
        this.refs.physics.value='';
    }
    returnItems() {
        var items =new Array();
        var cap = "小明";
        for (var i=0;i<this.state.num;i++){
            var caption = cap + (i + 1);
            var ch=this.state.itemArray[i][0];
            var math=this.state.itemArray[i][1];
            var en=this.state.itemArray[i][2];
            var phy=this.state.itemArray[i][3];
            var select=this.state.stateArray[i];
            items.push(
                <Item id={i}
                        caption={caption}
                        ch={ch}
                        math={math}
                        en={en}
                        phy={phy}
                        select={select}
                        onUpdate={this.onItemUpdate}
                />)
        }
        return items;
    }
}

export default Panel;

