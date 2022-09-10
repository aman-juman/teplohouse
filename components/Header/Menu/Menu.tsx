import React from 'react';
import {elastic as BurgerMenu} from "react-burger-menu";


export default props => {
    return (
        <BurgerMenu {...props}>
            <a className="menu-item" href="#">
                Главная
            </a>

            <a className="menu-item" href="#">
                Каталог товаров
            </a>

            <a className="menu-item" href="#">
                Контакты
            </a>
            <a className="menu-item" href="#">
                для Лицензиатов
            </a>
            <a className="menu-item" href="#">
                О нас
            </a>

        </BurgerMenu>
    );
};