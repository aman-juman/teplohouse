import styles from "./ModalMode.module.scss";



function ModalMode({setMode, children}) {
    return (
        <div
            onClick={() => setMode(false)}
            className={styles.wrapp}>
            <div className={styles.content}>
                <div className={styles.closeBtn}>X</div>
            {children}
            </div>
        </div>
    );
}

export default ModalMode;