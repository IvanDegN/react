import './Profile.module.css';
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {usersAPI} from "../../api/api";





class ProfileContainer extends React.Component
{
    componentDidMount()
    {

        let userId = this.props.match.params.userId;
        usersAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render()
    {
    return <Profile {...this.props} profile={this.props.profile} />;
    }


}

export const withRouter = () =>{
    return (props) => {
        const match = useMatch('/profile/:userId');
        return <ProfileContainer {...props} match={match}/>;
    };
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile});



export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
