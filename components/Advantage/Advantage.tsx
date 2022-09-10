import React from 'react';
import styles from "./Advantage.module.scss";
import img1 from "./advantage1.png";
import img2 from "./advantage2.png";
import img3 from "./advantage3.png";
import {AdvantageItem} from "./AdvantageItem/AdvantageItem";

export const Advantage = () => {
    const data = [
        {
            icon: img1,
            title: "Сертификация",
            description: "Наша продукция соответствует ТУ и ГОСТ 15588-2014. Процесс производства сырья соответствует международному стандарту ISO-9001."
        },
        {
            icon: img2,
            title: "Помощь в монтаже",
            description: "К нашей продукции прилагаются инструкции по установке. Также, мы предоставляем услуги шеф-монтажа."
        },
        {
            icon: img3,
            title: "Работаем с Вами",
            description: "Нашими клиентами являются и физлица и организации. Обслуживаем заказы от одного килограмма до тысяч кубометров продукции."
        },

    ];

    return (
        <div  className={styles.wrap}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Наши преимущества:</h2>
                    <div className={styles.items}>
                        {data.map((item, i) =>(
                            <AdvantageItem key={i} icon={item.icon} title={item.title}
                                           description={item.description}/>
                        ))}

                    </div>
                </div>
               </div>
        </div>
    );
};