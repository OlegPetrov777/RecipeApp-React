import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {usersAPI} from "../../API/API";
import {setAlertMessageAC, setAuthUserDataAC} from "../../redux/ProfileReducer";


class LoginContainer extends React.Component {
    checkUserLogin = (state) => {
        let inputData = state
        usersAPI.getUserByNickname(state.nickname).then(data => {
            let serverData = data.shift()
            // if (state.nickname === '' && state.email === '' && state.password === '') {
            //     this.props.setAlertMessageAC("Заполните все поля")
            // } else
            if (inputData.nickname === serverData.nickname && inputData.email === serverData.email && inputData.password === serverData.password) {
                this.props.setAuthUserDataAC(serverData.id, serverData.nickname, serverData.email, serverData.password, serverData.recipes)
            }
        })
    }

    render() {
        return (<>
            <Login setUserIdAC={this.props.setUserIdAC}
                   setNicknameAC={this.props.setNicknameAC}
                   setEmailAC={this.props.setEmailAC}
                   setPasswordAC={this.props.setPasswordAC}
                   checkUserLogin={this.checkUserLogin}
                   setAuthUserDataAC={this.props.setAuthUserDataAC}
                   isAuth={this.props.isAuth}
            />
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.profilePage.isFetching,
        isAuth: state.profilePage.isAuth,
        alertMessage: state.profilePage.alertMessage
    }
}

export default connect(mapStateToProps, {
    setAuthUserDataAC, setAlertMessageAC
})(LoginContainer);