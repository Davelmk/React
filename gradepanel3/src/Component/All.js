import React,{Component} from 'react';
import ItemContainer from '../Container/ItemContainer';

class All extends Component{
    render(){
        return(
            <div>
                {this.returnItems()}
            </div>
        );
    }
    returnItems(){
        var len=this.props.items.length;
        var views=[];
        for(var i=0;i<len;i++){
            var name="小明"+i;
            views.push(
                <ItemContainer caption={name}
                    index={i}/>
            );
        }
        return views;
    }
}
export default All;