import React,{Component} from 'react';

class FileInput extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        alert('Upload');
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload:
                    <input
                    type="file"
                    ref={input=>{this.fileinput=input}}
                    />
                </label>
                <br/>
                <button type="submit">
                Submit
                </button>
            </form>
        );
    }
}
export default FileInput;