// Debits page
import './Debit.css'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debit extends Component {
    constructor(props) {
        super(props);
        this.submitThis = this.submitThis.bind(this);
    }

    submitThis(event) {
        event.preventDefault();
        let temporary = [event.target.debitDesc.value,
                        event.target.debitAmount.value,
                        new Date().toLocaleString()]


        this.props.updateDebit(Number(event.target.debitAmount.value));
        this.props.updateDebitInfo(temporary)
    }

    render() {
        return (

            <div>
                <Link to = '/'>Home</Link>
                <br/>
                <Link to = "/userProfile">User Profile</Link>
                <br/>
                <Link to = '/credit'>Credit</Link>
                
                <div>
                    <div style = {{margin:"5%"}}>
                        <h1><div className = "dTitle">Debit: ${(Math.round(this.props.debitAmount * 100) / 100).toFixed(2)}</div></h1>
                    
                        <form onSubmit = {this.submitThis}>
                            <input type = 'text' name = 'debitDesc' placeholder = "Description of Debit"/>
                            <label/>

                            <input type = 'number' name = 'debitAmount' placeholder = "Amount of Debit"/>
                            <br/>

                            <input type = 'submit'/>
                        </form>

                        <br/>

                    </div>
                    {/* end of style */}

                    <div className = "image">
                    <img src = "https://www.globaldata.com/wp-content/uploads/2018/12/banking.jpg" width = "600" />
                </div>

                {/* inserting image before info */}

                <div>
                    {this.props.debitInfo.map ((i, index) =>
                    <div className = "debitTable" key = {index}>
                        <p>Description: {i[0]} </p>
                        <p>Amount: ${i[1]} </p>
                        <p>Date: {i[2]} </p>
                        
                </div>
                // end of debit table
                )}
                </div>

                
            </div>
        </div>
        //end under return
        );
    }
}

export default Debit;