import React, {Component} from 'react';
import Item from "./item";

const style = {
    margin: '20px',
};
const spanStyle1 = {
    width: '50px',
    height: '30px',
    marginLeft: '10px',
    marginRight: '10px',
}
const spanStyle2 = {
    width: '50px',
    height: '30px',
    marginLeft: '10px',
    marginRight: '30px',
}

class Panel extends Component {
    constructor(props) {
        super(props);
        this.onItemUpdate = this.onItemUpdate.bind(this);
        this.state = {
            summaryCH: 0,
            summaryMath: 0,
            summaryEN: 0,
            summaryPhy: 0,
            index: 1,
        }
    }

    render() {
        return (
            <div style={style}>
                <span style={spanStyle1}>name</span>
                <span style={spanStyle2}>语文</span>
                <span style={spanStyle2}>数学</span>
                <span style={spanStyle2}>英语</span>
                <span style={spanStyle2}>物理</span>
                <hr/>
                {this.returnItems()}
                <hr/>
                <span style={spanStyle1}>总计:</span>
                <span style={spanStyle2}>{this.state.summaryCH}</span>
                <span style={spanStyle2}>{this.state.summaryMath}</span>
                <span style={spanStyle2}>{this.state.summaryEN}</span>
                <span style={spanStyle2}>{this.state.summaryPhy}</span>
            </div>
        );
    }

    returnItems() {
        var items = new Array();
        var cap = "小明";
        for (var i = 0; i < this.state.index; i++) {
            var res = cap + (i + 1);
            items.push(<Item onUpdate={this.onItemUpdate} caption={res}/>)
        }
        return items;
    }

    onItemUpdate(value_ch, value_math, value_en, value_phy) {
        this.setState({summaryCH: this.state.summaryCH + ~~value_ch});
        this.setState({summaryMath: this.state.summaryMath + ~~value_math});
        this.setState({summaryEN: this.state.summaryEN + ~~value_en});
        this.setState({summaryPhy: this.state.summaryPhy + ~~value_phy});
        this.setState({index: this.state.index + 1})
    }
}

export default Panel;

