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
        const {caption,ch,math,en,phy} = this.props;
        return (
            <div>
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
}

export default Item;

