// home component
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';
// import Bank from '../pictures/Bank.jpg';
    
class Home extends Component {
  render() {
    return (
        <div>
          {/* <img src = {Bank} alt = "Bank"></img> */}
          {/* DONE: FIND different bank image */}

          <Link to ="/userProfile">User Profile</Link>
            <br/>
          <Link to = "/login">Login</Link>
            <br/>
          <Link to ="/credit">Credit</Link>
            <br/>
          <Link to ="/debit">Debit</Link>
            <br/>

          <h1 className = "title">Bank of React</h1>

          <div className = "accountBalance">
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>

          <br/>

          <div className = "image">
            <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFua3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="300" height="200" alt="bank"/>
          </div>
        </div>
    );
  }
}

export default Home;