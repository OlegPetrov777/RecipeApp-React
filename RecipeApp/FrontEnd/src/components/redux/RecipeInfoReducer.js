const IS_FETCHING = 'IS_FETCHING';
const SET_RECIPE = 'SET_RECIPE';

let initialState = {
    isFetching: false,
    recipe: {}
}

const recipeInfoReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case SET_RECIPE:
            return {
                ...state, recipe: action.recipe
            }

        default: {
            return state;
        }
    }
}

export const setIsFetchingAC = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const setRecipeAC = (recipe) => {
    return {type: SET_RECIPE, recipe}
}

export default recipeInfoReducer;