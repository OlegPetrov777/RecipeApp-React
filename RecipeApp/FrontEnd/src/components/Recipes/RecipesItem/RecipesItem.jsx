import React from 'react';
import style from "./RecipesItem.module.css";
import {NavLink} from "react-router-dom";

const RecipesItem = ({id_, url, name, description}) => {
    return (
        <div className={style.card}>
            <img className={style.card__img} src={url}/>
            <h4 className={style.card__title}>{name}</h4>
            <p className={style.card__text}>{description}</p>
            <NavLink className={style.card__button} to={`/recipe/${id_}`}>
                Посмотреть
            </NavLink>
        </div>
    );
};

export default RecipesItem;