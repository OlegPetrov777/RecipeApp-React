import React from "react";
import {Button, Form} from "react-bootstrap";
import {usersAPI} from "../../API/API";
import {NavLink} from "react-router-dom";
import style from "../Registration/Registration.module.css";


let Registration = () => {

    let state = {
        nickname: "",
        email: "",
        password_1: "",
        password_2: ""
    };

    let postReq = () => {
        if (state.nickname === '' && state.email === '' && state.password_1 === '' && state.password_2 === '') {
            alert("Заполните все поля")
        } else if (state.password_1 === state.password_2) {
            usersAPI.setUser(state.nickname, state.email, state.password_1)
        } else {
            alert("Пороли не совпадают")
        }
    }
    console.log('2132131313')
    return (
        <div className={style.registration_content}>
            <div className={style.registration_content__main_container}>
                <div className={style.main_container__title}>
                    <h1>Регистрация</h1>
                    <NavLink to={'/login'}>Назад</NavLink>
                </div>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicNickname">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control type="name" placeholder="Enter nickname"
                                      onChange={e => state.nickname = e.target.value}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={e => state.email = e.target.value}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      onChange={e => state.password_1 = e.target.value}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat password"
                                      onChange={e => state.password_2 = e.target.value}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={postReq}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Registration;