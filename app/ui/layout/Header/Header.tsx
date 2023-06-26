'use client';

import {FC} from "react";
import styles from './Header.module.css';

import {title} from "@app/strings";
import {Cart} from "@app/ui/icons";
import {NAVIGATION} from "@app/navigation";
import Link from "next/link";
import {useSelector} from "react-redux";
import {totalTicketsAmount} from "../../../../redux/features/cart/selector";
import {RootState} from "../../../../redux/store";

export const Header: FC = () => {
    const totalAmount = useSelector((state: RootState) =>
        totalTicketsAmount(state)
    )

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
                        {totalAmount!==0 && <span className={styles['cartCounter']}>{totalAmount}</span>}
                        <Cart width={32}/>
                    </Link>
                </div>
            </div>
        </header>
    )
};
