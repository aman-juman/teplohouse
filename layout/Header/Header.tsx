import Image from "next/image";
import Logo from "./logo.png";
import styles from "./Header.module.scss";
import cn from "classnames";
import LocationIcon from "./icons/location.svg";
import PhoneIcon from "./icons/phone.svg";
import TimeIcon from "./icons/time.svg";
import {MainMenu} from "./Menu/MainMenu";


export const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={cn('container', styles.wrap)}>
                <div className={styles.wrapLogo}>
                    <Image
                        src={Logo}
                        className={styles.logo}
                        width={100}
                        height={70}

                    />
                    <div className={styles.logoText}>
                        <h1>TEPLO<span>House</span></h1>
                    </div>
                </div>
                <ul className={styles.contacts}>
                   <li className={styles.item}>
                       <div className={styles.iconWrap}>
                           <a href="tel:+77014048686"><span className={styles.icon}><PhoneIcon /></span></a>
                       </div>
                       <div className={styles.description}>
                           <a href="tel:+77014048686"><h5 className={styles.first}>+7 701 404 86 86</h5></a>
                           <a href="tel:+77004048686"><h5 className={styles.second}>+7 700 404 86 86</h5></a>
                       </div>
                   </li>
                    <li className={styles.item}>
                       <div className={styles.iconWrap}>
                           <a className={styles.icon} href="https://www.google.com/maps/place/42%C2%B023'48.3%22N+69%C2%B038'23.7%22E/@42.39675,69.6399167,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x2d0f65dee6a9449e!8m2!3d42.3967476!4d69.6399231?hl=ru"><span ><LocationIcon/></span></a>
                       </div>
                       <div className={styles.description}>
                           <h5 className={styles.first}>г.Шымкент,мкр. Туран</h5>
                           <h5 className={styles.second}>zakaz@teplohouse.kz</h5>
                       </div>
                   </li>

                    <li className={styles.item}>
                       <div className={styles.iconWrap}>
                           <span className={styles.icon}><TimeIcon /></span>
                       </div>
                       <div className={styles.description}>
                           <h5 className={styles.first}>8:00 - 22:00</h5>
                           <h5 className={styles.second}>Пн-Вс</h5>
                       </div>
                   </li>
                </ul>
                <MainMenu />
            </div>
        </header>
    );
};