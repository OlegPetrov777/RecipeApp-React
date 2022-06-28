const SET_USERS = 'SET_USERS';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    users: [],
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        default: {
            return state;
        }
    }
}

export const setIsFetchingActionCreator = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users}
}

export default usersReducer;