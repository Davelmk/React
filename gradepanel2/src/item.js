import React, {Component} from 'react';
const inputStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    outline: 'none',
    width: '40px',
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

class Item extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const {id,caption,ch,math,en,phy,select} = this.props;
        return (
            <div>
                <input id={id} type="checkbox" ref="selected" checked={select} onChange={this.onClick}/>
                <span>{caption}</span>&emsp;
                <input style={inputStyle} ref="chinese" type="number" value={ch} readOnly={true}/>&emsp;&emsp;
                <input style={inputStyle} ref="math" type="number" value={math} readOnly={true}/>&emsp;&emsp;
                <input style={inputStyle} ref="english" type="number" value={en} readOnly={true}/>&emsp;&emsp;
                <input style={inputStyle} ref="physics" type="number" value={phy} readOnly={true}/>
            </div>
        );
    }
    onClick() {
        this.updateState();
    }
    updateState() {
        const state=this.refs.selected.checked;
        const id=this.refs.selected.id;
        this.props.onUpdate(id,state);
    }
}

export default Item;

