import React from 'react';
import styles from "./CalculatorSection.module.scss";


const CalculatorSection = ({setMode}) => {
    return (
        <div id="calculator"  className={styles.wrap}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Калькулятор</h2>
                    <p className={styles.description}>Рассчитайте стоимость утепления теплофасадом</p>
                    <Item setMode={setMode}/>
                </div>
            </div>
        </div>
    );
};


const Item = ({setMode}) =>{
    return(
        <div className={styles.item}>
            <h3> Калькулятор Теплофасад</h3>
            <button className={styles.btn} onClick={() =>setMode(true)}>Рассчитать стоимость</button>
        </div>
    );
};

export default CalculatorSection;
