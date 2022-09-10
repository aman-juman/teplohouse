import React from 'react';
import styles from "./Thickness.module.scss";
import cn from "classnames";


export const Thickness = ({thickness, setThickness}) => {
    return (
        <div className={styles.wrap}>
            <h5 className={styles.title}>Выберите толщину:</h5>
            <div className={styles.group}><input
                className={cn(styles.btn, {
                    [styles.selected]: thickness === 3
                })}
                onClick={() => setThickness(3)}
                type="button"
                value="3.5см - 3 500 тг"
            />
                <input
                    className={cn(styles.btn, {
                        [styles.selected]: thickness === 5
                    })}
                    onClick={() => setThickness(5)}
                    type="button"
                    value="5см - 4 000 тг"
                /></div>
        </div>
    );
};