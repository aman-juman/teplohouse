import React, {useState} from "react";
import styles from "./Product.module.scss";
import cn from "classnames";
import Image from "next/image";
import Img from "./1.png";

export const Product = () => {
    const [price, setPrice] = useState(2700);
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <Image src={Img}/>
                </div>
                <h3 className={styles.title}>ОЮ</h3>
                <h5 className={styles.subTitle}>Толщина утеплителя</h5>
                <div className={styles.sizes}>
                    <button onClick={()=> setPrice(2700)} className={cn(styles.size, {[styles.active]: price === 2700})}>3 см</button>
                    <button onClick={()=> setPrice(3000)} className={cn(styles.size, {[styles.active]: price === 3000})}>5 см</button>
                </div>
                <div className={styles.option}>
                    <button className={styles.buyBtn}>Выбрать</button>
                    <h4 className={styles.price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸</h4>
                </div>
            </div>
        </div>
    );
};

