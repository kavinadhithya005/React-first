import {Component} from 'react';

class Test extends Component {

    constructor(){
        super()
        this.state = {
            input1:0,
            input2: 1,
            result: 0
        }
    }

    onInput1Change(event) {
        console.log(event.target.value)
        this.setState({
            input1: event.target.value
        })
    }

    onInput2Change(event) {
        console.log("input change calld")
        this.setState({
            input2: event.target.value
        })

    }

    performAdd()
    {
        // this.setState({
        //     result: +this.state.input1 + +this.state.input2
        // })

        this.setState((prevState) => {
            console.log(prevState)
            return ({
                result: +prevState.input1 + +prevState.input2
            })
        })
    }
    render() {
        console.log(this.props);
      //  this.props.name = 'check'// props immutable
        return (
            <div>
                <div>Welcome {this.props.name}</div>
                Input 1 <input type="text" value={this.state.input1} onChange={this.onInput1Change.bind(this)}></input>
                <br/>
                Input 2 <input type="text" value={this.state.input2} onChange={this.onInput2Change.bind(this)}></input>
              <button onClick={this.performAdd.bind(this)}>Add</button>
            <br/>
              <b>{this.state.result}</b>
            </div>
        )
    }
}

export default Test;