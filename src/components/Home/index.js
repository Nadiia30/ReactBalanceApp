import { Component } from 'react';

import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import ErrorBoundary from '../ErrorBoundary';

import { Wrapper } from './styles';

import { getItems, addItem } from '../../utils/indexdb';



class Home extends Component {
    constructor(){
        super();
        this.state = {
            balance: 0,
            transactions: []
        }
      
    }
    
    componentDidMount(){
        getItems().then((transactions) => {
            this.setState({
                transactions
            })
        }).catch((e) => {
            debugger
        })

    }
    onChange = ({value, date, comment}) => {
        const transaction = {
            value: +value,
            comment,
            date,
            id: Date.now()
        }
        this.setState((prevState) => ({
            balance: prevState.balance + Number(value),
            transactions: [
                transaction,                
            ...prevState.transactions]
        }))
        addItem(transaction)
    }
    render(){
        
        return (
            <ErrorBoundary>
                <Wrapper>        
                    <Balance balance={this.state.balance}/>    
                    <Form onChange={this.onChange} /> 
                    <hr/>
                    <Transactions transactions={this.state.transactions} />                   
                </Wrapper>
            </ErrorBoundary>
          )
    }
   
}

  export default Home;