import React, {useState} from "react";
import style from './RecipeForm.module.css'
import {Redirect} from "react-router-dom";


const RecipeForm = ({isAuth, createNewRecipe}) => {
    if (isAuth === false) {
        return <Redirect to={"/login"}/>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState({
        name: '', url: '', description: '', manual: ''
    })


    return (
        <div className={style.content_recipe_form}>
            <form className={style.content_recipe_form__form}>
                <h1>Новый рецепт</h1>
                <div className={style.form_input_container}>
                    <div className={style.input_container__item}>
                        <label>Название блюда:</label>
                        <input type="text" className={style.input_container__input}
                               onChange={e => setState({...state, name: e.target.value})}></input>
                    </div>

                    <div className={style.input_container__item}>
                        <label>Ссылка на картинку:</label>
                        <input type="text" id={'input_url'} className={style.input_container__input}
                               onChange={e => setState({...state, url: e.target.value})}></input>
                    </div>

                    <div className={style.input_container__item}>
                        <label>Краткое описание:</label>
                        <textarea className={style.input_container__input} rows={2}
                                  onChange={e => setState({...state, description: e.target.value})}></textarea>
                    </div>

                    <div className={style.input_container__item}>
                        <label>Инструкция по приготовлению</label>
                        <textarea className={style.input_container__input} rows={10}
                                  onChange={e => setState({...state, manual: e.target.value})}></textarea>
                    </div>

                    <button onClick={e => {
                        e.preventDefault()
                        createNewRecipe(state)

                    }}>Создать</button>
                </div>
            </form>
        </div>
    );
};

export default RecipeForm;