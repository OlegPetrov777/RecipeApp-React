const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE';
const SET_RECIPES = 'SET_RECIPES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const EXIT = 'EXIT';


let initialState = {
    userId_main: null,
    nickname_main: null,
    password: null,
    isAuth: false,

    userId: null,
    nickname: null,
    email: null,
    recipes: [],

    isFetching: false,
    alertMessage: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        case SET_RECIPES:
            return {
                ...state, recipes: action.recipes,
            }

        case SET_ALERT_MESSAGE:
            return {
                ...state, alertMessage: action.alertMessage,
            }

        case EXIT:
            return {
                ...state, ...action.data, isAuth: false,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        default: {
            return state;
        }
    }
}

export const setAuthUserDataAC = (userId_main, nickname_main, email, password) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId_main, nickname_main, email, password}
})

export const setUserDataAC = (userId, nickname, email) => ({
    type: SET_USER_DATA,
    data: {userId, nickname, email}
})

export const exitAC = (userId_main, nickname_main, email, password) => ({
    type: EXIT,
    data: {userId_main, nickname_main, email, password}
})


export const setUserRecipesAC = (recipes) => {
    return {type: SET_RECIPES, recipes}
}

export const setAlertMessageAC = (alertMessage) => {
    return {type: SET_ALERT_MESSAGE, alertMessage}
}

export const setIsFetchingAC = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default profileReducer;