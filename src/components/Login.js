import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        const updatedUser = {...this.state.user}
        const inputField = e.target.name
        // .name is used for = "userName" and "password"
        const inputValue = e.target.inputValue
        updatedUser[inputField] = inputValue

        this.setState({user: updatedUser})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.user)
        this.setState({redirect: true})
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to = "/userProfile"/>)
        }

        return (
            <div>
                <Link to = "/">Home</Link><br/>
                <Link to = "/credit">Credit</Link><br/>
                <Link to = "/debit">Debit</Link><br/>


                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">Username: </label>
                        <input type = "text" name = "userName" onChange = {this.handleChange} value = {this.state.user.userName} placeholder="Enter your username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" placeholder = "Enter your password" />
                    </div>
                    <button className = "button">Log In</button>
                </form>

                <br/>
                <div className = "image">
                    <img src = "https://lh3.googleusercontent.com/proxy/cpQddnsDuJ8gS6qZulFjYLhX6jlSoB7_Zhn1AN-2YP8m9WQJpWZjhJ6275_DkNL_sH3T9BsSDnTpBQkWhCAXu2R68YvrM_STrmrG8aIIt8sJX-OTkEHTkipINCwEuEke5gGRwIUTSWUVfw" width = "300"/>
                </div>
            </div>
        )
    }
}

export default LogIn