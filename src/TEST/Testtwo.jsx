import React from "react";

class Testtwo extends React.Component{
    constructor(props){
        super(props);
        this.state={defaultvalue:"this is the value from child"};
        
        }changeHandler = () =>{
            this.setState({defaultvalue:new Date().toLocaleString()})
            this.props.parentcallback("this updated from child");
        }
        render() {
            return (
                <div>
                <h1>
                    {this.state.defaultvalue}
                </h1>
                <h1>
                    {this.props.parentvalue}
                </h1>
                <button type='Button' onClick={this.changeHandler}>submit</button>
                </div>
            )
        }
    } 

export default Testtwo;