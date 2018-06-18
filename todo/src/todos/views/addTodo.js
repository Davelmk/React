import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

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

class AddTodo extends Component {

    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput1 = this.refInput1.bind(this);
        this.refInput2 = this.refInput2.bind(this);
        this.refInput3 = this.refInput3.bind(this);
        this.refInput4 = this.refInput4.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();

        const input = this.input;
        if (!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        input.value = '';
    }

    refInput1(node) {
        this.input = node;
    }

    refInput2(node) {
        this.input = node;
    }

    refInput3(node) {
        this.input = node;
    }

    refInput4(node) {
        this.input = node;
    }


    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo1" ref={this.refInput1} style={inputStyle}/>&nbsp;
                    <input className="new-todo2" ref={this.refInput2} style={inputStyle}/>&nbsp;
                    <input className="new-todo3" ref={this.refInput3} style={inputStyle}/>&nbsp;
                    <input className="new-todo4" ref={this.refInput4} style={inputStyle}/>
                    <button className="add-btn" type="submit">
                        提交
                    </button>
                    <br/>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text1, text2, text3, text4) => {
            dispatch(addTodo(text1, text2, text3, text4));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);

