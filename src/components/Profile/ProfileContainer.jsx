import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withCustomWithRouter} from "../../HOC/withCustomWithRouter";


class ProfileContainer extends React.Component {

    componentDidMount() {
        const id = this.props.userId
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id ? id : 2}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})


// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(withCustomWithRouter(ProfileContainer));
