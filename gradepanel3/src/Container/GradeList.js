import { connect } from 'react-redux';
import GradePanel from '../Component/GradePanel';

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (item) => {
            dispatch({
                type: 'ADD',
                item:item
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        sumCH:state.grade.sumCH,
        sumMath:state.grade.sumMath,
        sumEN:state.grade.sumEN,
        sumPhy:state.grade.sumPhy
    }
}

const GradeList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(GradePanel)

export default GradeList;