import React, {Component} from 'react';
import './AccountBalance.css';

class AccountBalance extends Component {
    render() {
        return (
            <div className = "accountBalance">
                {/* giving the div a class name to add graphics to css file */}
                Balance: ${this.props.accountBalance}
                {/* $ gives the numbers a $ */}
            </div>
        );
    }
}

export default AccountBalance;