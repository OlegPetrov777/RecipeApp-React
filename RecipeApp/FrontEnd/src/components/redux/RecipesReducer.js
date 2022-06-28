const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const SET_RECIPES = 'SET_RECIPES';

let initialState = {
    recipes: [],
    currentPage: 1,
    pageSize: 6,
    isFetching: false
}

const recipesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_RECIPES:
            return {
                ...state, recipes: action.recipes
            }
        default: {
            return state;
        }
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const setIsFetchingAC = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const setRecipesAC = (recipes) => {
    return {type: SET_RECIPES, recipes}
}

export default recipesReducer;