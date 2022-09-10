import Image from "next/image";
import Logo from "./logoDark.png";
import styles from "./Header.module.scss";
import cn from "classnames";
import Menu from "./Menu/Menu";


export const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={cn('container', styles.wrap)}>
                <div className={styles.menu}>
                    <Menu />
                </div>

                <div className={styles.wrapLogo}>
                    <Image
                        src={Logo}
                        className={styles.logo}
                        width={150}
                        height={150}
                    />
                </div>
                <span className={styles.phone}>+7777777777</span></div>
        </header>
    );
};