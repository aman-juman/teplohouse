import React from 'react';
import styles from "./Contacts.module.scss";

const Index = () => {
    return (
        <div className={styles.wrap}>
            <video className={styles.video} autoPlay muted loop >
<source src="/background.mp4"/>
            </video>
        </div>
    );
};

export default Index;
