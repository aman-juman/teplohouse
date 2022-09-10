import React from 'react';
import styles from "./AdvantageItem.module.scss";
import Image from "next/image";


export const AdvantageItem = ({icon, title, description}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.icon}>
                <Image src={icon} alt="icon"/>
            </div>

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
};