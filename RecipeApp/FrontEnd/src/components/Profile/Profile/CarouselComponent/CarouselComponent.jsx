import React from 'react';
import style from './CarouselComponent.module.css'
import {Button, Carousel} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const CarouselComponent = ({recipesList}) => {
    // <NavLink to={'/recipe-create'}>
    //     <Button variant="outline-secondary"><b>Редактировать</b></Button>
    // </NavLink>
    // <NavLink to={'/recipe-create'}>
    //     <Button variant="outline-danger">Удалить</Button>
    // </NavLink>
    return (
        <Carousel>
            {recipesList.map(r => (
                    <Carousel.Item>
                        <NavLink className={style.nav_link} to={`/recipe/${r.id}`}>
                            <img
                                className={style.recipe_image}
                                src={`${r.url}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className={style.recipe_container_text}>
                                    <b>{r.name}</b>
                                    <p>{r.description}</p>
                                </div>
                            </Carousel.Caption>
                        </NavLink>
                    </Carousel.Item>
                )
            )}
        </Carousel>
    )
};

export default CarouselComponent;