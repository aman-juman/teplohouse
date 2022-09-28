import React from "react";
import styles from "./Present.module.scss";
import Img1 from "./images/block1.png";
import Img2 from "./images/block2.png";
import Img3 from "./images/block3.png";
import Img4 from "./images/block4.png";
import Img5 from "./images/block5.png";
import Image from "next/image";
import cn from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Present = () => {

    return (
        <section className={styles.section}>
            <video className={styles.video} autoPlay muted loop >
                <source src="/background2.mp4"/>
            </video>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.content}>
                        <div className={styles.slider}>
                            <Slider />
                        </div>
                        <div className={styles.description}>
                            <h3 className={styles.title}>
                                Утеплительные материалы
                            </h3>
                            <p className={styles.subTitle}>
                                TeploHouse - производим и продаём утеплительные материалы и фасадный декор,
                                по самым современным
                            </p>
                            <a href="#">
                                <button className={styles.btnLink}>
                                    Посмотреть каталог
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


const Slider = () =>{
    return(
        <Swiper
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className={styles.swiper}
        >
            <SwiperSlide><Image src={Img1} alt="блоки"/></SwiperSlide>
            <SwiperSlide><Image src={Img2} alt="блоки"/></SwiperSlide>
            <SwiperSlide><Image src={Img3} alt="блоки"/></SwiperSlide>
            <SwiperSlide><Image src={Img4} alt="блоки"/></SwiperSlide>
            <SwiperSlide><Image src={Img5} alt="блоки"/></SwiperSlide>

        </Swiper>
    );
};

