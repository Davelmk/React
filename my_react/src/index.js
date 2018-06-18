import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './HelloWorld/App'
import registerServiceWorker from './registerServiceWorker';

//时间
// function tick(){
//     const element=(
//         <div>
//             <h1>Hello World！</h1>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
// }
// setInterval(tick,1000);

//Welcome组件
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//         </div>
//     );
// }

//props
// function formatDate(date){
//     return date.toLocaleDateString();
// }
// function Avatar(props){
//     return (
//         <img className="Avatar"
//         src={props.user.avatarUrl}
//         alt={props.user.name}
//       />
//     );
// }
// function UserInfo(props) {
//     return (
//       <div className="UserInfo">
//         <Avatar user={props.user} />
//         <div className="UserInfo-name">
//           {props.user.name}
//         </div>
//       </div>
//     );
// }
// function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo user={props.author} />
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };

//函数式Clock
// function Clock(props){
//     return(
//         <div>
//             <h1>Hello World</h1>
//             <h2>{props.time.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
// function tick(){
//     ReactDOM.render(
//         <Clock time={new Date()}/>,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();