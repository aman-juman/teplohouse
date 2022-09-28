import React from 'react';
import {elastic as BurgerMenu} from "react-burger-menu";


const Menu =(props) => {
    return (
        <BurgerMenu {...props}>
            <a className="menu-item" href="/">
                Главная
            </a>
            <a className="menu-item" href="/about">
                О нас
            </a>

            <a className="menu-item" href="/products">
                Продукция
            </a>
            <a className="menu-item" href="/services">
                Услуги
            </a>
            <a className="menu-item" href="/contacts">
                Контакты
            </a>
        </BurgerMenu>
    );
};
export default Menu;