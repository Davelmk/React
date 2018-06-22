import { connect } from 'react-redux';
import Game from '../Components/Game';

const mapDispatchToProps = (dispatch) => {
    return {
        move: (pos) => {
            dispatch({
                type: 'MOVE',
                pos: pos
            })
        },
        restart: () => {
            dispatch({
                type: 'RESTART_GAME'
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        gameOver: state.bricks.gameOver
    }
}

const GameControl = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Game)

export default GameControl;