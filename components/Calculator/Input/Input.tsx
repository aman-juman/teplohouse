import styles from "./Input.module.scss";
import React from "react";

export const Input = ({title, value, setValue}) => {
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className={styles.wrap}>
            <label className={styles.label} htmlFor={title}>{title}, м</label>
            <input
                name={title}
                className={styles.input}
                onChange={onChange}
                type="number"
                placeholder="Введите число*"
            />
        </div>
    );
};