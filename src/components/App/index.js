import { Component } from 'react';

import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';

import { Wrapper, GlobalStyle } from './styles'
let id = 0;
class App extends Component {
    constructor(){
        super();
        this.state = {
            balance: 0,
            transactions: []
        }
      
    }
      
    onChange = (value) => {
        this.setState((prevState) => ({
            balance: prevState.balance + Number(value),
            transactions: [{
                value,
                 label:'change',
                 id: ++id
            },
            ...prevState.transactions]
        }))
    }
    render(){
        
        return (
            <Wrapper>
            <GlobalStyle/>
              <Balance balance={this.state.balance}/>    
              <Form onChange={this.onChange} /> 
              <hr/>

             <Transactions transactions={this.state.transactions} />                   
            </Wrapper>
          )
    }
   
}

  export default App;