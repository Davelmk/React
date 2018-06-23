function CheckItem(Items,id) {
    var temp=[];
    var len=Items.length;
    for(var i=0;i<len;i++){
        var itemTemp=[];
        for(var j=0;j<6;j++){
            if(i===id&&j===4){
                itemTemp.push(!Items[i][j]);
            }else{
                itemTemp.push(Items[i][j]);
            }
        }
        temp.push(itemTemp);
    }
    console.log("item:"+temp[id][4]);
    return temp;
}
export default CheckItem;