import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import style from "./Profile.module.css";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import {Button} from "react-bootstrap";


let Profile = ({userId, nickname, email, isAuth, recipesList, userId_main, logOut}) => {
    if (isAuth === false) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={style.profile_content}>
            {/*<div className={style.profile_content__header}>*/}
            {/*</div>*/}

            <div className={style.profile_container}>
                <div className={style.profile_container__info}>
                    <h1>{nickname} #{userId}</h1>
                    <img className={style.avatar}
                         src={"https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg"}/>
                    <h5>email: {email}</h5>
                </div>

                <div className={style.profile_container__sidebar}>
                    <h2>Мои рецепты</h2>
                    <div>
                        {userId_main === userId ? <NavLink to={'/recipe-create'}>
                            <Button variant="outline-success"><b>Добавить</b></Button>
                        </NavLink> : <br/>}
                    </div>
                    <br/>
                    <CarouselComponent recipesList={recipesList}/>
                </div>
            </div>

            {/*<div className={style.profile_content__footer}>*/}
            {/*</div>*/}
        </div>
    )
}

export default Profile;