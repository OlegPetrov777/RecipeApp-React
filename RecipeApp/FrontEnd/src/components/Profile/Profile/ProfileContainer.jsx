import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {recipesAPI, usersAPI} from "../../API/API";
import Profile from "./Profile";
import {exitAC, setIsFetchingAC, setUserDataAC, setUserRecipesAC} from "../../redux/ProfileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetchingAC(true)
        let userId = this.props.match.params.userId

        // ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
        usersAPI.getUserById(userId).then(data => {
            this.props.setUserDataAC(data.id, data.nickname, data.email)
        })

        // ПОЛУЧЕНИЕ РЕЦЕПТОВ ТЕКУЩЕГО ЮЗЕРА
        recipesAPI.getRecipesByUserId(userId).then(data => {
            this.props.setUserRecipesAC(data)
        })

        this.props.setIsFetchingAC(false)
    }

    logOut = () => {
        this.props.exitAC(null, null, null, null )
    }

    render() {
        return (<>
            {this.props.isFetching && this.props.recipes === [] ? <></> : <Profile userId={this.props.userId}
                                                                                   nickname={this.props.nickname}
                                                                                   email={this.props.email}
                                                                                   isAuth={this.props.isAuth}
                                                                                   recipesList={this.props.recipes}
                                                                                   userId_main={this.props.userId_main}
                                                                                   logOut={this.logOut}

            />}
        </>)
    }
}

let mapStateToProps = (state) => ({
    userId: state.profilePage.userId,
    nickname: state.profilePage.nickname,
    email: state.profilePage.email,
    isFetching: state.profilePage.isFetching,
    isAuth: state.profilePage.isAuth,
    recipes: state.profilePage.recipes,
    userId_main: state.profilePage.userId_main,
})

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserDataAC,
    setIsFetchingAC,
    setUserRecipesAC,
    exitAC
})(ProfileContainerWithRouter);