function AddItem(Items,item) {
    var itemTemp=[];
    var temp=[];
    for(var i=0;i<item.length;i++){
        itemTemp.push(item[i])
    }
    itemTemp.push(false);
    itemTemp.push(Items.length);
    temp=Items.concat([itemTemp]);
    // console.log("row:"+temp.length);
    // console.log("col:"+temp[0].length);
    return(temp);
}
export default AddItem;