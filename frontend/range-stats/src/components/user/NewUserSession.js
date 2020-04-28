import React from 'react';
import Button from '../common/Button'
import "./user.css";

class NewUserSession extends React.Component {
    render() {
        return (
            <div className="new-user-session">
                <div>New Session:</div>
                <textarea className="session-input-container" placeholder="Enter your score here..."></textarea>
                <Button>Submit</Button>
            </div>
            );
    }
}

export default NewUserSession;


