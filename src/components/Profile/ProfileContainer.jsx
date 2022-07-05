import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withCustomWithRouter} from "../../HOC/withCustomWithRouter";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.userId
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(withCustomWithRouter(AuthRedirectComponent));
