import React, {useState} from 'react';
import style from './RecipeInfo.module.css'
import {usersAPI} from "../../API/API";
import {NavLink} from "react-router-dom";


const RecipeInfo = ({recipe}) => {

    const [state, setState] = useState({
        id: '', nickname: '', email: ''
    })

    usersAPI.getUserById(recipe.uid).then(data => {
        setState({...state, id: data.id, nickname: data.nickname, email: data.email})
    })

    return (
        <div className={style.recipe_info_content}>
            <div className={style.recipe_info_container}>
                <h1 style={{fontSize: '48px'}}>{recipe.name}</h1>

                <div className={style.info_container}>
                    <div className={style.author_info}>
                        <h2>Автор</h2>
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to={`/profile/${state.id}`}>
                            <img className={style.avatar}
                                 src={"https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg"}/>
                            <h4>{state.nickname}#{state.id}</h4>
                        </NavLink>
                        <p>{state.email}</p>
                    </div>
                    <div className={style.recipe_info}>

                        <img style={{width: '500px', height: '300px', borderRadius: '35px'}} src={recipe.url} alt=""/>
                        <h3>Описание:</h3>
                        <p>{recipe.description}</p>
                    </div>
                </div>

                <h1>Инструкция по приготовлению</h1>

                <div className={style.main_content}>
                    <p className={style.recipe_info_text}>{recipe.manual}</p>
                    <br/>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default RecipeInfo;