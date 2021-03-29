import Transaction from '../Transaction';
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => (
    <div>
        {
            transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)
        }  
    </div>
)

Transactions.propTypes = {
    transactions: PropTypes.array
}
Transactions.defaultProps = {
    transactions: []
}

export default Transactions;