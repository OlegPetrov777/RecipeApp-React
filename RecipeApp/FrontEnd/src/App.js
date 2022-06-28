import './App.css';
import {Route} from "react-router-dom";
import RecipesContainer from "./components/Recipes/RecipesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Profile/Login/LoginContainer";
import Registration from "./components/Profile/Registration/Registration";
import Prewie from "./components/Prewie/Prewie";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import RecipeFormContainer from "./components/Recipes/RecipeForm/RecipeFormContainer";
import RecipeInfoContainer from "./components/Recipes/RecipeInfo/RecipeInfoContainer";


function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className="block">
                <Route path={'/'} exact render={() => <Prewie/>}/>
                <Route path={'/recipes'} render={() => <RecipesContainer/>}/>
                <Route path={'/recipe/:recipeId'} render={() => <RecipeInfoContainer/>}/>
                <Route path={'/recipe-create'} render={() => <RecipeFormContainer/>}/>

                <Route path={'/users'} render={() => <UsersContainer/>}/>

                <Route path={'/login'} render={() => <LoginContainer/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
            </div>
        </div>
    );
}

export default App;
