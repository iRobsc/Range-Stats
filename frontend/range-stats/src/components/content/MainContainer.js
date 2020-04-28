import React from 'react';
import UserContainer from '../user/UserContainer'
import '../../App.css';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="main-container">
                <UserContainer>Pawel</UserContainer>
                <UserContainer>Rob</UserContainer>
                <UserContainer>Henke</UserContainer>
                <UserContainer>Andreas</UserContainer>
                <UserContainer>Karutshi</UserContainer>
                <UserContainer>Treedreamer</UserContainer>
            </div>
            );
    }
}

export default MainContainer;
