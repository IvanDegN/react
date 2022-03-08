import './Profile.module.css';
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";






class ProfileContainer extends React.Component
{
    componentDidMount()
    {



            let userId = this.props.match.params.userId;
            if(!userId)
            {
                userId = 22573;
            }
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);


    }

    render()
    {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
    }


}

export const withRouter = () =>{
    return (props) => {
        const match = useMatch('/profile/*');
        return <ProfileContainer {...props} match={match} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>;
    };
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, status: state.profilePage.status});

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),withRouter,WithAuthRedirect)(ProfileContainer)
