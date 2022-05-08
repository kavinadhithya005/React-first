import React from "react";
// import Testone from "./Testone";
import Testtwo from "./Testtwo";
class TEST extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            testData:"the value from parent state",
        };
        
    }
    changeHandler = (data) =>{
            this.setState({testData:data})}
    render()
    {
        return(
        <div>
            <h1>
                hello///
                {this.state.testData}
            </h1>
            <Testtwo parentvalue = {this.state.testData} parentcallback={this.changeHandler} />
            </div>
            )
    }
}
export default TEST;
