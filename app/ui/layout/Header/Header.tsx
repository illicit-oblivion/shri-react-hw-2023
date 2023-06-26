import {FC} from "react";
import styles from './Header.module.css';

import {title} from "@app/strings";
import {Cart} from "@app/ui/icons";
import {NAVIGATION} from "@app/navigation";
import Link from "next/link";

export const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['headerContainer']}>
                <div className={styles['leftColumn']}>
                    <Link href={NAVIGATION.root} className={styles['logo']}>
                        {title}
                    </Link>
                </div>
                <div className={styles['rightColumn']}>
                    <Link passHref href={NAVIGATION.cart} className={styles['cartContainer']}>
                        <span className={styles['cartCounter']}>6</span>
                        <Cart width={32}/>
                    </Link>
                </div>
            </div>
        </header>
    )
};
