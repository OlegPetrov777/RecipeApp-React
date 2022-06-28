import {combineReducers, createStore} from "redux";
import RecipesReducer from "./RecipesReducer";
import UsersReducer from "./UsersReducer";
import ProfileReducer from "./ProfileReducer";
import RecipeInfoReducer from "./RecipeInfoReducer";


let reducers = combineReducers({
    recipesPage: RecipesReducer,
    usersPage: UsersReducer,
    profilePage: ProfileReducer,
    recipeInfoPage: RecipeInfoReducer
});

let store = createStore(reducers);
export default store;