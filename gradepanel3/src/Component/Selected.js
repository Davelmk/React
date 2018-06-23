import React,{Component} from 'react';
import ItemContainer from '../Container/ItemContainer';

class Selected extends Component{
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
            if(this.props.items[i][4]){
                var name="小明"+i;
                views.push(
                    <ItemContainer caption={name}
                        index={i}/>
                );
            }
        }
        return views;
    }
}
export default Selected;