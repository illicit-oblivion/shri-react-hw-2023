import {FC} from "react";
import styles from './Header.module.css';

import {title} from "@/app/strings/common";

export const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['headerContainer']}>
                <div className={styles['leftColumn']}>
                    <a href="/" className={styles['logo']}>
                        {title}
                    </a>
                </div>
                <div className={styles['leftColumn']}>
                </div>
            </div>
        </header>
    )
};
