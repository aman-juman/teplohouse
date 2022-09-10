import React from 'react';
import styles from "./BeforeAfter.module.scss";
import ReactCompareImage from "react-compare-image";
import before from "/before.jpg";
import after from "/after.jpg";



export const BeforeAfter = () => {
    return (
        <div className="container">
            <div className={styles.mainWrapper}>
                <div className={styles.contentWrapper}>
                    <ReactCompareImage leftImage="/before.jpg" rightImage="/after.jpg"/>
                </div>
            </div>
        </div>
    );
};