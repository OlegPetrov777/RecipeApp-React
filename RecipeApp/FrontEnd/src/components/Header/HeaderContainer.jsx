import React from "react";
import {connect} from "react-redux";
import Header from "./Header";


class HeaderContainer extends React.Component {
    render() {
        return (<>
            <Header isAuth={this.props.isAuth}
                    nickname={this.props.nickname}
                    userId={this.props.userId}
            />
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.profilePage.isAuth,
        nickname: state.profilePage.nickname_main,
        userId: state.profilePage.userId_main
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);