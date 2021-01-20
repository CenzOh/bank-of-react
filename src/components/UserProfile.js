import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './UserProfile.css';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Link to ="/">Home</Link><br/>
                <Link to = "/credit">Credit</Link><br/>
                <Link to = "/debit">Debit</Link><br/>

                <h1>User Profile</h1>
                {/* heading underneath the links */}

                <div className = "userN">Username: {this.props.userName}</div>
                <div className = "memberS">Member Since: {this.props.memberSince}</div>
                    <br/>
                <div className = "image">
                    {/* add img */}
                </div>
            </div>
        );
    }
}

export default UserProfile;