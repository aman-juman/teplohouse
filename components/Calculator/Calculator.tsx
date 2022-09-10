import React, {useState} from 'react';
import styles from "./Calculator.module.scss";
import cn from "classnames";
import Image from "next/image";
import {Result} from "./Result/Result";
import {Thickness} from "./Thickness/Thickness";
import {Input} from "./Input/Input";


export const Calculator = () => {

    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [thickness, setThickness] = useState(3);
    const [windows, setWindows] = useState(0);

    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.calc}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Расчет утепления дома теплофасадом</h3>
                        <Thickness thickness={thickness} setThickness={setThickness} />
                        <div className={styles.option}>
                            <Input title="Длина дома" value={length} setValue={setLength}/>
                            <Input title="Ширина дома" value={width} setValue={setWidth}/>
                            <Input title="Высота дома" value={height} setValue={setHeight}/>
                            <Input title="Количество окон и дверей" value={windows} setValue={setWindows}/>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.result}>
                            <Result height={height} width={width} length={length} windows={windows}
                                    thickness={thickness}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



