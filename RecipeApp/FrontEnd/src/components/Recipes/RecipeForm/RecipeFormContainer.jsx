import React, {Component} from 'react';
import {connect} from "react-redux";
import RecipeForm from "./RecipeForm";
import {recipesAPI} from "../../API/API";


class RecipeFormContainer extends Component {

    createNewRecipe = (state) => {
        recipesAPI.setRecipe(state.name, state.url, state.description, state.manual, this.props.userId).then(data => {
            console.log(data)
        })
    }

    render() {
        return (<>
            <RecipeForm userId={this.props.userId}
                        isAuth={this.props.isAuth}
                        createNewRecipe={this.createNewRecipe}/>
        </>);
    }
}


let mapStateToProps = (state) => ({
    userId: state.profilePage.userId,
    isAuth: state.profilePage.isAuth,
})

export default connect(mapStateToProps, {})(RecipeFormContainer);