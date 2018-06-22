import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, Score, ButtonGroup} from './HeaderComponents';
import '../index.css';

const mapStateToProps = (state) => {
    return {
        score: state.bricks.score,
        bestScore: state.bricks.bestScore,
        mode: state.main.mode,
        tip: state.main.tip,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        restart: () => {
            dispatch({
                type: 'RESTART_GAME'
            })
        },
        undo: () => {
            dispatch({
                type: 'UNDO'
            })
        }
    }
}
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="title-div">
                    <Title />
                    <Score score={this.props.score} />
                </div>
                <div className="btn-control">
                    <ButtonGroup action={{ restart: this.props.restart, undo: this.props.undo }} />
                </div>
            </div>
        )
    }
}


Header.propTypes = {
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
    mode: PropTypes.string,
    tip:PropTypes.string,
    action: PropTypes.shape({
        restart: PropTypes.func.isRequired,
        undo: PropTypes.func.isRequired
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);