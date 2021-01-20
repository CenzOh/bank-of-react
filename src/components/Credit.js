// credits page
import './Credit.css'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class credit extends Component {
    constructor(props) {
        super(props);
        this.submitThis = this.submitThis.bind(this);
    }

    submitThis(event) {
        event.preventDefault();
        let temporary = [event.target.creditDesc.value,
                        event.target.creditAmount.value,
                        new Date().toLocaleString()]


        this.props.updateCredit(Number(event.target.creditAmount.value));
        this.props.updateCreditInfo(temporary)
    }

    render() {
        return (

            <div>
                <Link to = '/'>Home</Link>
                <br/>
                <Link to = "/userProfile">User Profile</Link>
                <br/>
                <Link to = '/debit'>Debit</Link>
                
                <div>
                    <div style = {{margin:"5%"}}>
                        <h1><div className = "dTitle">Credit: ${(Math.round(this.props.creditAmount * 100) / 100).toFixed(2)}</div></h1>
                    
                        <form onSubmit = {this.submitThis}>
                            <input type = 'text' name = 'creditDesc' placeholder = "Description of Credit"/>
                            <label/>

                            <input type = 'number' name = 'creditAmount' placeholder = "Amount of Credit"/>
                            <br/>

                            <input type = 'submit'/>
                        </form>

                        <br/>

                    </div>
                    {/* end of style */}

                    <div className = "image">
                    <img src = "https://cdn.hswstatic.com/gif/bank-credit-union-1.jpg" width = "300" />
                </div>

                {/* inserting image before info */}

                <div>
                    {this.props.creditInfo.map ((i, index) =>
                    <div className = "creditTable" key = {index}>
                        <p>Description: {i[0]} </p>
                        <p>Amount: ${i[1]} </p>
                        <p>Date: {i[2]} </p>
                        
                </div>
                // end of credit table
                )}
                </div>

                
            </div>
        </div>
        //end under return
        );
    }
}

export default credit;