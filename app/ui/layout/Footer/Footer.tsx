import {FC} from "react";
import styles from './Footer.module.css';
import {aboutUs, qna} from "@app/strings/common";


export const Footer: FC = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footerContainer']}>
                <div className={styles['leftColumn']}>
                    <a href="/qna">{qna}</a>
                </div>
                <div className={styles['rightColumn']}>
                    <a href="/about">{aboutUs}</a>
                </div>
            </div>
        </footer>
    )
};
