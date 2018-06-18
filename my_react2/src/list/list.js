import React,{Component} from 'react'

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
function List(props){
    const numbers = props.nums;
    const listItems = numbers.map(
        (number) => <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}
function Blogs(props){
    const sidebar=(
        <ul>
            {props.posts.map((post)=>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    );
    const content=(
        <ul>
            {props.posts.map((post)=>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div> 
            )}
        </ul>
    );
    return(
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
class ListItems extends Component{
    render(){
        return(
            <div>
                <List nums={numbers}/>
                <Blogs posts={posts}/>
            </div>
        );
    }
}
export default ListItems;