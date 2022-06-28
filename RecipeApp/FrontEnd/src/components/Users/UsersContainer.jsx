import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {usersAPI} from "../API/API";
import {setIsFetchingActionCreator, setUsersActionCreator} from "../redux/UsersReducer";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers().then(data => {this.props.setUsers(data);});
        this.props.setIsFetching(false);
    }

    render() {
        return (<>
            <Users usersList={this.props.users}/>
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {
    setUsers: setUsersActionCreator, setIsFetching: setIsFetchingActionCreator
})(UsersContainer);