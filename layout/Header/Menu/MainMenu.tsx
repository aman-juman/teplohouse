import React from 'react';
import styles from "./Menu.module.scss";
import cn from "classnames";
import {ActiveLink} from "../../../components/ActiveLink";

export const MainMenu = () => {
    const menu = [
        {
            name:   "Главная",
            href: "/"
        },
        {
            name: "О нас",
            href: "/about"
        },
        {
            name:      "Продукция",
            href: "/products"
        },
        {
            name: "Услуги",
            href: "/services"
        },
        {
            name:      "Контакты",
            href: "/contacts"
        }
    ];
    return (
            <ul className={styles.lists}>
                {menu.map((item, i) => (
                    <ActiveLink key={i} href={item.href}>
                        <li className={cn(styles.item, {[styles.selected]: false})}>{item.name}</li>
                    </ActiveLink>
                ))}
            </ul>
    );
};