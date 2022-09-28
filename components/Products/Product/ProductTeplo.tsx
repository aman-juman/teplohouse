import React, {useState} from "react";
import styles from "./Product.module.scss";
import cn from "classnames";
import Image from "next/image";
import Img1 from "../images/teplo1.png";
import Img2 from "../images/teplo2.png";

export const ProductTeplo = ({title}) => {
    const [price, setPrice] = useState(2700);
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <Image src={title === "ОЮ" ? Img1 : Img2}/>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <h5 className={styles.subTitle}>Толщина утеплителя</h5>
                <div className={styles.sizes}>
                    <button onClick={()=> setPrice(2700)} className={cn(styles.size, {[styles.active]: price === 2700})}>3 см</button>
                    <button onClick={()=> setPrice(3000)} className={cn(styles.size, {[styles.active]: price === 3000})}>5 см</button>
                </div>
                <div className={styles.option}>
                    <a href={`https://wa.me/77014048686?text=Здравствуйте!%20Меня%20интересует%20Термопанели%20для%20утепления%20дома%20"${title}"-${price}тг`}>
                        <button className={styles.buyBtn}>Выбрать</button>
                    </a>
                    <h4 className={styles.price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸</h4>
                </div>
            </div>
        </div>
    );
};

