import React from 'react';
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const UsersItem = ({id_, nickname, email}) => {
    return (
        <Card style={{width: '10rem', margin: '10px'}}>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to={`/profile/${id_}`}>
                <Card.Img variant="top" src="https://i.pinimg.com/236x/1c/c0/23/1cc02399ae7e80f35136eac50e13456a.jpg"/>
                <Card.Body>
                    <Card.Title>
                        {nickname}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                    <Button variant="primary">Подписаться</Button>
                </Card.Body>
            </NavLink>
        </Card>
    );
};

export default UsersItem;