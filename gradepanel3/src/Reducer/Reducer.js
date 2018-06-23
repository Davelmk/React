import { combineReducers } from "redux";
import CheckItem from './CheckItem';
import AddItem from './AddItem';

function Reducer(state = {
        Items:[],
        sumCH:0,
        sumMath:0,
        sumEN:0,
        sumPhy:0
    }, action) {
    var ItemsTemp;
    switch (action.type) {
        case 'CHECK':
            console.log("CHECK");
            ItemsTemp=CheckItem(state.Items,action.id);
            return Object.assign({}, state, {
                Items: ItemsTemp,
            });
        case 'ADD':
            console.log("ADD");
            ItemsTemp=AddItem(state.Items,action.item);
            var sumCHTemp=state.sumCH+~~action.item[0];
            var sumMathTemp=state.sumMath+~~action.item[1];
            var sumENTemp=state.sumEN+~~action.item[2];
            var sumPhyTemp=state.sumPhy+~~action.item[3];
            return Object.assign({}, state, {
                Items: ItemsTemp,
                sumCH:sumCHTemp,
                sumMath:sumMathTemp,
                sumEN:sumENTemp,
                sumPhy:sumPhyTemp
            });
        default:
            return state;
    }
}

const reducer=combineReducers({
    grade: Reducer,
})
export default reducer;