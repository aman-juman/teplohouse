import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./Gallery.module.scss";
import {Navigation, Pagination} from "swiper";
import img1 from"./img1.png";
import Image from "next/image"

const Gallery = () => {
    return (
        <div className={styles.galleryWrap}>
            <div className="container">
                <h3 className={styles.title}>Галерея</h3>
                <p className={styles.description}>Галерея готовых проектов, с использованием нашего теплофасада:</p>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.mySwiper}

                >
                    <SwiperSlide className={styles.slide}><Image src={img1} alt="sdfsdf"/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><Image src={img1} alt="sdfsdf"/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><Image src={img1} alt="sdfsdf"/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><Image src={img1} alt="sdfsdf"/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><Image src={img1} alt="sdfsdf"/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><Image src={img1} alt="sdfsdf"/></SwiperSlide>

                    {/*<SwiperSlide className={styles.slide}>2</SwiperSlide>*/}
                    {/*<SwiperSlide className={styles.slide}>3</SwiperSlide>*/}
                    {/*<SwiperSlide className={styles.slide}>4</SwiperSlide>*/}
                    {/*<SwiperSlide className={styles.slide}>5</SwiperSlide>*/}
                    {/*<SwiperSlide className={styles.slide}>6</SwiperSlide>*/}

                </Swiper></div>
        </div>
    );
};

export default Gallery;
