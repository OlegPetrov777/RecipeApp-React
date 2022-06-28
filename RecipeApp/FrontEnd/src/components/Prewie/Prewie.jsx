import React from "react";
import style from './Prewie.module.css'
import {NavLink} from "react-router-dom";

let Prewie = () => {
    return (
        <div className={style.prewie_content}>
            <div className={style.prewie_content__text_container}>
                <h1 className={style.text_container__title}>
                    Удобный сайт для прочтения и размещения своих рецептов — <b><i>Recipe App</i></b>
                </h1>
                <p className={style.text_container__text}>
                    Сделано людьми из группы ПИ19-2 для домашней работы по Прикладной Информатике. Надеемся получилось
                    хорошо
                </p>
                <NavLink className={style.text_container__button} to={'/recipes'}>
                    Перейти на главную
                </NavLink>
            </div>
            <div className={style.img_berry_1}></div>
            <div className={style.img_berry_2}></div>
            <div className={style.img_leaf}></div>
        </div>)
}

export default Prewie;