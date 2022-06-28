import React, {useState} from "react";
import style from './Login.module.css';
import {Form, Button} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";



let Recipes = ({isAuth, checkUserLogin}) => {

    const [state, setState] = useState({
        nickname: '', email: '', password: ''
    })

    if (isAuth) {
        return <Redirect to={"/"}/>
    }

    return (
        <div className={style.login_content}>
            <div className={style.login_content__main_container}>
                <div className={style.main_container__title}>
                    <h1>Вход</h1>
                    <NavLink to={'/registration'}>Регистрация</NavLink>
                </div>

                <div className={style.main_container__form}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="name" placeholder="Enter nickname"
                                          onChange={e => setState({...state, nickname: e.target.value})}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                          onChange={e => setState({...state, email: e.target.value})}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={e => setState({...state, password: e.target.value})}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>

                        <Button  variant="primary" type="submit" onClick={(e) => {
                            e.preventDefault()
                            checkUserLogin(state)
                        }}>
                            Войти
                        </Button>
                    </Form>
                </div>
            </div>
        </div>);
}

export default Recipes;