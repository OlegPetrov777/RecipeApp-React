import React from "react";
import style from './Recipes.module.css';
import RecipesItem from "./RecipesItem/RecipesItem";


let Recipes = ({recipesList}) => {
    const recipes = recipesList.map(recipe => <RecipesItem id_={recipe.id}
                                                           url={recipe.url}
                                                           name={recipe.name}
                                                           description={recipe.description}/>)

    return (
        <div className={style.recipes_content}>
            <div className={style.recipes_content__control_container}>
                <h1>Рецепты</h1>
            </div>
            <div className={style.main_content}>
                {recipes}
            </div>
        </div>
    );
}

export default Recipes;