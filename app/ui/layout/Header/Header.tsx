import {FC} from "react";
import styles from './Header.module.css';
import Cart from '@app/ui/icons/cart.svg';

import {title} from "@app/strings";

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
                    <a href="/"><Cart width={28}/></a>
                </div>
            </div>
        </header>
    )
};
