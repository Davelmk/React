import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** 标题组件 */
const Title = () => (<div className='title pull-left '>2048</div>);

/** 计分组件 */
class Score extends Component {
    render() {
        return (
            <div className='score pull-right'>
                <span className='score-title'>SCORE</span>
                <span className='detail'>{this.props.score}</span>
            </div>
        )
    }
}

Score.defaultProps = {
    score: 0
};

Score.propTypes = {
    score: PropTypes.number.isRequired
};

/** 按钮组件 */
class ButtonGroup extends Component {
    render() {
        let {restart, undo} = this.props.action;
        return (
            <div className='button-group'>
                <div className='btn' onClick={ restart}> Restart </div>
                <div className='btn pull-right' onClick={ undo}> Undo </div>
            </div>
        )
    }
}

ButtonGroup.propTypes = {
    action: PropTypes.object,
};


export { Title, Score, ButtonGroup};