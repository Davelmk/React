import React, { Component } from 'react';

var Bmob =require('./lib/bmob.js');

class BmobApp extends Component {
  render() {
    return (
      <div>
          <h1>hhhhhhh</h1>
          <script>{this.getRank()}</script>
      </div>
    );
  }

  getRank(){
    console.log("HelloWorld");
    Bmob.initialize("d5ee42abe4ca5b264c682077d6154275", "08fd2462e8a25f0cd3fd874bc9a3c593");
    
  }
}

export default BmobApp;
