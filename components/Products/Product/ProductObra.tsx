import React, {useState} from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import Img1 from "../images/okon1.jpg";

export const ProductObra = ({title, price}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <Image src={Img1}/>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.option}>
                    <button className={styles.buyBtn}>Выбрать</button>
                    <h4 className={styles.price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸</h4>
                </div>
            </div>
        </div>
    );
};

