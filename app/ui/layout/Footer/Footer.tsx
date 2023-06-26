import {FC} from "react";
import styles from './Footer.module.css';
import {aboutUs, qna} from "@app/strings";
import Link from "next/link";
import {NAVIGATION} from "@app/navigation";


export const Footer: FC = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footerContainer']}>
                <div className={styles['leftColumn']}>
                    <Link href={NAVIGATION.qna}>{qna}</Link>
                </div>
                <div className={styles['rightColumn']}>
                    <Link href={NAVIGATION.about}>{aboutUs}</Link>
                </div>
            </div>
        </footer>
    )
};
