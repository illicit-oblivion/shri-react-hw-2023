import {FC} from "react";
import styles from './Header.module.css';

import {title} from "@app/strings";
import {Cart} from "@app/ui/icons";

export const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['headerContainer']}>
                <div className={styles['leftColumn']}>
                    <a href="/" className={styles['logo']}>
                        {title}
                    </a>
                </div>
                <div className={styles['rightColumn']}>
                    <a href="/" className={styles['cartContainer']}><span className={styles['cartCounter']}>6</span><Cart width={32}/></a>
                </div>
            </div>
        </header>
    )
};
