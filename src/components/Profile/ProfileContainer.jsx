import './Profile.module.css';
import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";

const withRouter = () =>
{
    return (props) => {
        const match = useMatch('/profile/:userId');
        return <ProfileContainer {...props} match={match}/>;
    };
}

class ProfileContainer extends React.Component
{
    componentDidMount()
    {
        let userId = this.props.match.params.userId;
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render()
    {
    return <Profile {...this.props} profile={this.props.profile} />;
    }

}

let UrlData = withRouter(ProfileContainer)

let mapStateToProps = (state) => ({profile: state.profilePage.profile});



export default connect(mapStateToProps, {setUserProfile})(UrlData);
