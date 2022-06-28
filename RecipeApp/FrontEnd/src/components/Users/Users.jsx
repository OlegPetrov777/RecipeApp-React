import React from "react";
import style from "./Users.module.css";
import UsersItem from "./UsersItem/UsersItem";


let Users = ({usersList}) => {
    const users = usersList.map(user => <UsersItem id_={user.id} nickname={user.nickname} email={user.email}/>)
    return (
        <div className={style.users_content}>
            <div className={style.users_content__control_container}>
                <h1>Пользователи</h1>
            </div>
            <div className={style.main_content}>
                {users}
            </div>
        </div>
    )
}

export default Users;