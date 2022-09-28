import React from 'react';
import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "./logo.png";
import FacebookIcon from "./icons/fb.svg";
import GmailIcon from "./icons/gm.svg";
import InstagramIcon from "./icons/ins.svg";
import WhatsappIcon from "./icons/wh.svg";
import YandexIcon from "./icons/ya.svg";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.menuList}>
                        <div className={styles.menuItem}>
                            О нас
                        </div>
                        <div className={styles.menuItem}>
                            Каталог товаров
                        </div>
                        <div className={styles.menuItem}>
                            Услуги
                        </div>
                        <div className={styles.menuItem}>
                            Результаты
                        </div>
                        <div className={styles.menuItem}>
                            Галерея
                        </div>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.logo}>
                            <Image src={logo}/>
                        </div>

                        <div className={styles.socials}>
                            <div className={styles.socialItem}>
                                <FacebookIcon/>
                            </div>
                            <div className={styles.socialItem}>
                                <YandexIcon/>
                            </div>
                            <div className={styles.socialItem}>
                                <GmailIcon/>
                            </div>
                            <div className={styles.socialItem}>
                                <InstagramIcon/>
                            </div>
                            <div className={styles.socialItem}>
                                <WhatsappIcon/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <h3>TeploHouse</h3>
                        <p>г.Шымкент,мкр. Туран</p>
                        <p>+7 701 404 86 86</p>
                        <p>+7 700 404 86 86</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};