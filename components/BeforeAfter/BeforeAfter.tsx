import React from 'react';
import styles from "./BeforeAfter.module.scss";
import ReactCompareImage from "react-compare-image";
import before from "/before.jpg";
import after from "/after.jpg";



export const BeforeAfter = () => {
    return (
        <div className="container">
            <div className={styles.mainWrapper}>
                <h3>Теплофасад До и После</h3>
                <h5>
                    Преображение дома теплофасадом, наглядно:
                </h5>

                <div className={styles.contentWrapper}>
                    <ReactCompareImage leftImage="/before.jpg" rightImage="/after.jpg"/>
                </div>
            </div>
        </div>
    );
};