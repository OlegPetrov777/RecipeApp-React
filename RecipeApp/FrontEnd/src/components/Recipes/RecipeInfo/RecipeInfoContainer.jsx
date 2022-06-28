import React from 'react';
import {connect} from "react-redux";
import RecipeInfo from "./RecipeInfo";
import {withRouter} from "react-router-dom";
import {recipesAPI} from "../../API/API";
import {setRecipeAC} from "../../redux/RecipeInfoReducer";

class RecipeInfoContainer extends React.Component {

    componentDidMount() {
        let recipeId = this.props.match.params.recipeId

        recipesAPI.getRecipeById(recipeId).then(data => {
            this.props.setRecipeAC(data)
        })
    }

    render() {
        return (
            <div>
                <RecipeInfo recipe={this.props.recipe}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    recipe: state.recipeInfoPage.recipe
})

let RecipeInfoContainerRouter = withRouter(RecipeInfoContainer);

export default connect(mapStateToProps, {
    setRecipeAC
})(RecipeInfoContainerRouter);