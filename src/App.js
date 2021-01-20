import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
// import axios from 'axios';
import Credit from './components/Credit';
import Debit from './components/Debit';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,

      debitInfo: [],
      debitAmount: 0,

      creditInfo: [],
      creditAmount: 0,

      currentUser: {
        userName: 'philly_billy',
        memberSince: '09/13/99',
        }
      }

      this.updateDebit = this.updateDebit.bind(this)
      this.updateCredit = this.updateCredit.bind(this)
      this.updateDebitInfo = this.updateDebitInfo.bind(this)
      this.updateCreditInfo = this.updateDebitInfo.bind(this)
    }
  // }

  // componentDidMount = () => {
  //   axios.get("https://moj-api.herokuapp.com/debits")
  //     .then((response) => {
  //       const data = response.data;

  //       let temporary = [];

  //       for(let i = 0; i < data.length; i++) {
  //         temporary = [data[i].description, data[i].amount, data[i].date];
  //         this.setState ({
  //           debitInfo: [...this.state.debitInfo, temporary],
  //           accountBalance: this.state.accountBalance - data[i].amount,
  //           debitAmount: this.state.debitAmount + data[i].amount
  //         });

  //       }
  //     })

  //     .catch((err) => console.log(err));

  //     axios.get("https://moj-api.herokuapp.com/credits")
  //       .then((response) => {
  //         const data = response.data;
  //         let temporary = [];
  //         for(let i = 0; i < data.length; i ++) {

  //           temporary = [data[i].description, data[i].amount, data[i].date];
  //           this.setState ({
  //             creditInfo: [...this.state.creditInfo, temporary],
  //             accountBalance: this.state.accountBalance + data[i].amount,
  //             creditAmount: this.state.creditAmount + data[i].amount
  //           });

  //         }
  //       })

  //       .catch((err) => console.log(err));
  // }

  // Debit

  updateDebit(e) {
    this.setState({
      accountBalance: this.state.accountBalance - e,
      debitAmount: this.state.debitAmount + e
    })
  }

  updateDebitInfo(e) {
    this.setState({
      debitInfo:[e, ...this.state.debitInfo]
    })
  }

  // Credit

  updateCredit(e) {
    this.setState({
      accountBalance: this.state.accountBalance + e,
      creditAmount: this.state.creditAmount + e
    })
  }

  updateCreditInfo(e) {
    this.setState({
      creditInfo: [e, ...this.state.creditInfo]
    })
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance = {this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince} />)
    const LogInComponent = () => (<LogIn user = {this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)

    const DebitComponent = () => (<Debit updateDebit = {this.updateDebit} updateDebitInfo = {this.updateDebitInfo} debitInfo = {this.state.debitInfo} debitAmount = {this.state.debitAmount}/>);
    const CreditComponent = () => (<Credit updateCredit = {this.updateCredit} updateCreditInfo = {this.updateCreditInfo} creditInfo = {this.state.creditInfo} creditAmount = {this.state.creditAmount}/>);

    //    );
    
    return (
        <Router>
          <Switch>
            <Route exact path = "/" render={HomeComponent}/> 
            {/* Now the balance shows up!! */}
            <Route exact path = "/userProfile" render = {UserProfileComponent}/>

            <Route exact path = "/login" render = {LogInComponent}/>

            <Route exact path = "/debit" render = {DebitComponent}/>

            <Route exact path = "/credit" render = {CreditComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;