import { Component } from "react";

class Exam extends Component {
    constructor(){
        super()

    }
    onInput1Change(event){
        console.log(event.target.value)
        this.setState({
            Input1:event.target.value
        })
    onInput2Change(event) {
        console.log(event.target.value)
        this.setState({
            Input2:event.target.value
        })
    }
    render(){
        console.log(this.props);
        return(
            <div>
            (<div>Welcome{this.props.name}{this.props.age}</div>)
            Input1 <input type="text" value={this.props.input1} onChange={this.onInput1Change.bind}></input>
            <br/>
            Input2 <input type="text" value={this.props.input2} onChange={this.onInput2Change.bind}></input>
                    </div>
        )
       
    }
}
export default Exam;