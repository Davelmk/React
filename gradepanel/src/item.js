import React, {Component} from 'react';

const inputStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    outline: 'none',
    width: '50px',
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
const buttonStyle = {
    margin: '10px'
};
const spanStyle = {
    width: '50px',
    height: '30px',
    marginLeft: '10px',
    marginRight: '10px',
};

class Item extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        // this.state = {
        //     gradeCH:0,
        //     gradeMath:0,
        //     gradeEN:0,
        //     gradePhy:0,
        // }
    }

    onClickButton() {
        // this.setState({gradeCH: this.refs.chinese.value});
        // this.setState({gradeMath: this.refs.math.value});
        // this.setState({gradeEN: this.refs.english.value});
        // this.setState({gradePhy: this.refs.physics.value});
        console.log("chinese:" + this.refs.chinese.value);
        console.log("math:" + this.refs.math.value);
        console.log("english:" + this.refs.english.value);
        console.log("physics:" + this.refs.physics.value);
        this.updateGrade();
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <span style={spanStyle}>{caption}</span>
                <input style={inputStyle} ref="chinese" type="number"/>
                <input style={inputStyle} ref="math" type="number"/>
                <input style={inputStyle} ref="english" type="number"/>
                <input style={inputStyle} ref="physics" type="number"/>
                <button style={buttonStyle} onClick={this.onClickButton}>确定</button>
            </div>
        );
    }

    updateGrade() {
        const value_ch = this.refs.chinese.value;
        const value_math = this.refs.math.value;
        const value_en = this.refs.english.value;
        const value_phy = this.refs.physics.value;
        this.props.onUpdate(value_ch, value_math, value_en, value_phy);
    }
}

export default Item;

