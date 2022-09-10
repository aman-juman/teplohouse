import React, {useEffect, useState} from 'react';
import styles from "./Result.module.scss";

export const Result = ({length, width, height, windows, thickness}) => {
    const [areaHouse, setAreaHouse] = useState(0);
    const [glue, setGlue] = useState(0);
    const [silicon, setSilicon] = useState(0);
    const [sumGlueSilicon, setSumGlueSilicon] = useState(0);
    const [sumTeplofasad, setSumTeplofasad] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(()=>{
        //*** Here calculate only Area ***//
        const res = Number(((length * 2 + width * 2) * height - (2.1 * windows)).toFixed(2));
        setAreaHouse(res);
    }, [length, width, height, windows]);
    useEffect(() => {
        //*** Here calculate only Sum with thickness  ***//
        const resTeplofasad = areaHouse * (thickness ? (thickness == 3 && 3500 || thickness == 5 && 4000) : 0);
        const resSum =resTeplofasad + sumGlueSilicon;
        setSumTeplofasad(resTeplofasad);
        setSum(resSum);

    }, [thickness, areaHouse, sumGlueSilicon]);

    useEffect(() => {
        //*** Here calculate Everyone sum ***//
        const resGlue = Math.floor(areaHouse/3);
        const resSilicon = Number((areaHouse/5).toFixed(2));
        const resSumGlueSilicon = areaHouse * 900;
        setGlue(resGlue);
        setSilicon(resSilicon);
        setSumGlueSilicon(resSumGlueSilicon);
    }, [areaHouse, thickness]);
    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <h5 className={styles.title}>Необходимое количество теплофасада:</h5>
                <div className={styles.value}>{areaHouse} м2</div>
            </div>
            <div className={styles.block}>
                <h5 className={styles.title}>Общая стоимость необходимого количества теплофасада:</h5>
                <div className={styles.value}>{sumTeplofasad.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} тг</div>
            </div>
            <div className={styles.block}>
                <h5 className={styles.title}>Необходимое количество клея:</h5>
                <div className={styles.value}>{glue} мешков</div>
            </div>
            <div className={styles.block}>
                <h5 className={styles.title}>Необходимое количество силиконового герметика:</h5>
                <div className={styles.value}>{silicon} тюбиков</div>
            </div>
            <div className={styles.sum}>
                <h5 className={styles.title}>Общая стоимость с учетом клея, герметика и теплофасада:</h5>
                <div style={{fontSize: "20px"}} className={styles.value}>{sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} тг</div>
            </div>
            <span className={styles.comment}>*Рассчеты сделаны с усредненым размером окон 1.5*1.4</span>

        </div>
    );
};

