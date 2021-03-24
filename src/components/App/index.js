import { Component } from 'react';
import Balance from '../Balance';

class App extends Component {
    constructor(){
        super();
        this.state = {
            balance: 0
        }
    }
    render(){
        return (
            <div>
              <Balance balance={this.state.balance}/>                            
            </div>
          )
    }
   
}

  export default App;