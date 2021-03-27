import { Component } from 'react';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            value: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        
      this.props.onChange(this.state.value)
    }

    onChange = (e) => {
        const { value } = e.target;

        this.setState({
            value
        })
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input name="balance" 
                    type="number" 
                    value={this.state.value}
                    placeholder="Enter Sum"
                    onChange = {this.onChange}
                />
                <button>Save</button>
            </form>
        )
    }
}

export default Form;