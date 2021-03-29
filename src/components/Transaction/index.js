import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Transaction = ({ transaction }) => (
    <Wrapper value={transaction.value}>
         Label: {transaction.label}
         <p>Value: {transaction.value}</p>
         <br/>
     </Wrapper>
)
Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}
export default Transaction;