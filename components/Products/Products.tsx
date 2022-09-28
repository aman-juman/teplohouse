import React, {useState} from 'react';
import styles from "./Products.module.scss";
import cn from "classnames";
import {ProductTeplo} from "./Product/ProductTeplo";
import OiyuImg from "./images/1.png";
import KosaImg from "./images/2.png";
import {ProductObra} from "./Product/ProductObra";

const data = [
    {
        name: 'Termo',
        collection: [
            {
                title: 'ОЮ',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'Коса',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'ОЮ',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'Коса',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'ОЮ',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'Коса',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'ОЮ',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
            {
                title: 'Коса',
                sizes: [
                    {size: 3, price: 2700},
                    {size: 5, price: 3000}
                ],
                images: [
                    'oiu.png'
                ]
            },
        ]
    },
    {
        name: 'Obra',
        collection: [
            {
                title: 'Оконное обрамление #1 (с замком)',
                price: 8000,
                images: [
                    'okon.png'
                ]
            },
            {
                title: 'Оконное обрамление #2 (с замком)',
                price: 8000,
                images: [
                    'okon.png'
                ]
            },
        ]
    },

]

export const Products = () => {
    const [variant, setVariant] = useState<Variant>(Variant.Teplo);
    return (
        <section className={styles.wrap} >
            <div className="container">
                <div className={styles.content}>
                    <h3 className={styles.title}>Каталог товаров:</h3>
                    <div className={styles.variants}>
                        <div className={cn(styles.variant, {
                            [styles.selected]: variant === Variant.Teplo
                        })} onClick={() => setVariant(Variant.Teplo)}>
                            Теплофасад на базе пенопласта
                        </div>
                        <div className={cn(styles.variant, {
                            [styles.selected]: variant === Variant.Obra
                        })} onClick={() => setVariant(Variant.Obra)}>
                            Фасадный декор и оконные обрамления
                        </div>
                    </div>
                    <div className={styles.productList}>
                        { variant === Variant.Teplo && data[0].collection.map((item, i) =>(
                            <div key={i}>
                                <ProductTeplo title={item.title} />
                            </div>
                        ))}
                        { variant === Variant.Obra && data[1].collection.map((item, i) =>(
                            <div key={i}>
                                <ProductObra title={item.title} price={item.price}/>
                            </div>
                        ))}
                    </div>



                </div>
            </div>

        </section>
    );
};


enum Variant{
    Teplo,
    Obra
}