import React, { Component } from 'react';
import Header from './Header';
import GameDesk from './GameDesk';
import './Game.css';

var x=0;
var y=0;
class Game extends Component {
  componentDidMount() {
    var self = this;
    document.addEventListener('keydown', function (event) {
      var keycode = event.keyCode;
      if (keycode === 87 || keycode === 38) {
        self.props.move('up');
      }
      else if (keycode === 83 || keycode === 40) {
        self.props.move('down');
      }
      else if (keycode === 65 || keycode === 37) {
        self.props.move('left');
      }
      else if (keycode === 68 || keycode === 39) {
        self.props.move('right');
      }
    });
    document.getElementById("game").addEventListener("touchstart",function(event){
      x=event.touches[0].clientX;
      y=event.touches[0].clientY;
    });
    document.getElementById("game").addEventListener("touchend",function(event){
      var X=event.changedTouches[0].clientX-x;
      var Y=event.changedTouches[0].clientY-y;
      if(X>=0&&Y>=0){
        //右下
        if(X>Y){
          //右
          console.log("右");
          self.props.move('right');
        }else{
          //下
          console.log("下");
          self.props.move('down');
        }
      }else if(X>=0&&Y<0){
        //右上
        if(X>(-Y)){
          //右
          console.log("右");
          self.props.move('right');
        }else{
          //上
          console.log("上");
          self.props.move('up');
        }
      }else if(X<0&&Y>=0){
        //左下
        if((-X)>Y){
          //左
          console.log("左");
          self.props.move('left');
        }else{
          //下
          console.log("下");
          self.props.move('down');
        }
      }else{
        //左上
        if((-X)>(-Y)){
          //左
          console.log("左");
          self.props.move('left');
        }else{
          //上
          console.log("上");
          self.props.move('up');
        }
      }
      x=0;
      y=0;
    });
  }
  render() {
    return (
      <div id="game" className="Game">
        <div>
            <Header/>
        </div>
        <div className="GameDiv">
            <GameDesk/>
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    if(this.props.gameOver) {
        alert('游戏已结束，是否重新开始？');
    }
  }
}
export default Game;