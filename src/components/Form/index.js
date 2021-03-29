import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            value: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

      this.props.onChange(this.state.value);
      this.setState({
          value: ""
      })
    }

    onChange = (e) => {
        const { value } = e.target;

        this.setState({
            value: +value
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

Form.propTypes = {
    onChange: PropTypes.func
  };

export default Form;