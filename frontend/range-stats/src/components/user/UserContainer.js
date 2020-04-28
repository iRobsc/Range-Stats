import React from 'react';
import UserSession from "./UserSession"
import NewUserSession from "./NewUserSession";
import "./user.css";

class UserContainer extends React.Component {
    render() {
        return (
            <div className="user-container">
                <div className="user-header">
                    <div>
                        <h2>{this.props.children}</h2>
                    </div>
                    <div>
                        <h3>Total avg: 22.7, All time best: 28</h3>
                    </div>
                </div>
                <UserSession />
                <UserSession />
                <NewUserSession />
            </div>
            );
    }
}

export default UserContainer;
