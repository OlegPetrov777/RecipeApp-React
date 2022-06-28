import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


let Header = ({isAuth, nickname, userId}) => {
    return (
        <header className={style.content_header}>
            <NavLink className={style.content_header__logo} to={'/'}><h3>RecipesApp</h3></NavLink>
            <nav className={style.content_header__inner}>
                <NavLink className={style.content_header__link} to={'/recipes'}>Главная</NavLink>
                <NavLink className={style.content_header__link} to={'/users'}>Пользователи</NavLink>
                {isAuth ?
                    <NavLink className={style.content_header__link} to={`/profile/${userId}`}>{nickname}</NavLink> :
                    <NavLink className={style.content_header__link} to={'/login'}>Логин</NavLink>
                }

            </nav>
        </header>
    );
}

export default Header;