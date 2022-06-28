import React from "react";
import Recipes from "./Recipes";
import {connect} from "react-redux";
import {recipesAPI} from "../API/API";
import {setCurrentPageAC,
        setIsFetchingAC,
        setRecipesAC} from "../redux/RecipesReducer";


class RecipesContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        recipesAPI.getRecipes().then(data => {this.props.setRecipes(data);})
        this.props.setIsFetching(false);
    }

    render() {
        return (<>
            <Recipes recipesList={this.props.recipes}/>
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        recipes: state.recipesPage.recipes
    }
}

export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    setIsFetching: setIsFetchingAC,
    setRecipes: setRecipesAC
})(RecipesContainer)