import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.onClick0Button=this.onClick0Button.bind(this);
        this.onClick1Button=this.onClick1Button.bind(this);
        this.onClick2Button=this.onClick2Button.bind(this);
        this.onClick3Button=this.onClick3Button.bind(this);
        this.onClick4Button=this.onClick4Button.bind(this);
        this.onClick5Button=this.onClick5Button.bind(this);
        this.onClick6Button=this.onClick6Button.bind(this);
        this.onClick7Button=this.onClick7Button.bind(this);
        this.onClick8Button=this.onClick8Button.bind(this);
        this.onClick9Button=this.onClick9Button.bind(this);
        this.onClickAcButton=this.onClickAcButton.bind(this);
        this.onClickDelButton=this.onClickDelButton.bind(this);
        this.onClickDivButton=this.onClickDivButton.bind(this);
        this.onClickAccButton=this.onClickAccButton.bind(this);
        this.onClickSubButton=this.onClickSubButton.bind(this);
        this.onClickMulButton=this.onClickMulButton.bind(this);
        this.onClickResButton=this.onClickResButton.bind(this);
        this.state = {
            res: 0,
            num1: 0,
            num2: 0,
            isFirstNum:1,
            signal:"?",
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h1>计算器</h1>
                </div>
                <div className="Div_Result">
                    <div>
                        {this.state.num1}
                    </div>
                    <div>
                        {this.state.signal}
                    </div>
                    <div>
                        {this.state.num2}
                    </div>
                    <div>
                        =
                    </div>
                    <div>
                        {this.state.res}
                    </div>
                </div>
                <div className="Div_Button">
                    <div>
                        <button className="AC_Button"
                            onClick={this.onClickAcButton}>AC</button>
                        <button className="AC_Button"
                            onClick={this.onClickDelButton}>del</button>
                    </div>
                    <div>
                        <button className="Button"
                            onClick={this.onClick7Button}>7</button>
                        <button className="Button"
                            onClick={this.onClick8Button}>8</button>
                        <button className="Button"
                            onClick={this.onClick9Button}>9</button>
                        <button className="Button"
                            onClick={this.onClickDivButton}>/</button>
                    </div>
                    <div>
                        <button className="Button"
                            onClick={this.onClick4Button}>4</button>
                        <button className="Button"
                            onClick={this.onClick5Button}>5</button>
                        <button className="Button"
                            onClick={this.onClick6Button}>6</button>
                        <button className="Button"
                            onClick={this.onClickMulButton}>*</button>
                    </div>
                    <div>
                        <button className="Button"
                            onClick={this.onClick1Button}>1</button>
                        <button className="Button"
                            onClick={this.onClick2Button}>2</button>
                        <button className="Button"
                            onClick={this.onClick3Button}>3</button>
                        <button className="Button"
                            onClick={this.onClickSubButton}>-</button>
                    </div>
                    <div>
                        <button className="Button"
                            onClick={this.onClick0Button}>0</button>
                        <button className="Res_Button"
                            onClick={this.onClickResButton}>=</button>
                        <button className="Button"
                            onClick={this.onClickAccButton}>+</button>
                    </div>
                </div>
            </div>
        );
    }

    onClick0Button() {
        if(this.state.isFirstNum===1){
            if(this.state.num1!==0){
                this.setState({num1:this.state.num1*10});
            }
        }else {
            if(this.state.num2!==0){
                this.setState({num2:this.state.num2*10});
            }
        }
    }
    onClick1Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+1});
        }else {
            this.setState({num2:this.state.num2*10+1});
        }
    }
    onClick2Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+2});
        }else {
            this.setState({num2:this.state.num2*10+2});
        }
    }
    onClick3Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+3});
        }else {
            this.setState({num2:this.state.num2*10+3});
        }
    }
    onClick4Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+4});
        }else {
            this.setState({num2:this.state.num2*10+4});
        }
    }
    onClick5Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+5});
        }else {
            this.setState({num2:this.state.num2*10+5});
        }
    }
    onClick6Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+6});
        }else {
            this.setState({num2:this.state.num2*10+6});
        }
    }
    onClick7Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+7});
        }else {
            this.setState({num2:this.state.num2*10+7});
        }
    }
    onClick8Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+8});
        }else {
            this.setState({num2:this.state.num2*10+8});
        }
    }
    onClick9Button() {
        if(this.state.isFirstNum===1){
            this.setState({num1:this.state.num1*10+9});
        }else {
            this.setState({num2:this.state.num2*10+9});
        }
    }
    onClickAcButton(){
        this.setState({res:0});
        this.setState({num1:0});
        this.setState({num2:0});
        this.setState({isFirstNum:1});
        this.setState({signal:""});
    }
    onClickDelButton(){
        if (this.state.isFirstNum===1){
            this.setState({num1:(this.state.num1-this.state.num1%10)/10});
        } else if(this.state.num2===0){
            this.setState({signal:"?"});
            this.setState({isFirstNum:1});
        }else {
            this.setState({num2:(this.state.num2-this.state.num2%10)/10});
        }
    }
    onClickDivButton(){
        this.setState({signal:"/"});
        this.setState({isFirstNum:0});
    }
    onClickMulButton(){
        this.setState({signal:"*"});
        this.setState({isFirstNum:0});
    }
    onClickAccButton(){
        this.setState({signal:"+"});
        this.setState({isFirstNum:0});
    }
    onClickSubButton(){
        this.setState({signal:"-"});
        this.setState({isFirstNum:0});
    }
    onClickResButton(){
        switch (this.state.signal){
            case "+":
                this.setState({res:this.state.num1+this.state.num2});
                break;
            case "-":
                this.setState({res:this.state.num1-this.state.num2});
                break;
            case "*":
                this.setState({res:this.state.num1*this.state.num2});
                break;
            case "/":
                if(this.state.num2===0){
                    this.setState({res:0});
                    break;
                }else {
                    this.setState({res:this.state.num1/this.state.num2});
                    break;
                }
            default:
                break;
        }
    }
}

export default App;
