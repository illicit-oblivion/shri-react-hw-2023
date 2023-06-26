'use client';

import {FC} from "react";
import styles from './TotalCard.module.css';
import cardStyles from '@app/ui/Card/Card.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {totalTicketsAmount} from "../../../redux/features/cart/selector";
import classNames from "classnames";

export const TotalCard: FC = () => {
    const totalAmount = useSelector((state: RootState) =>
        totalTicketsAmount(state)
    )

    return (
        <div className={classNames(cardStyles['cardColumns'], styles['totalContainer'])}>
            <span>
                Итого билетов:
            </span>
            <span>
               {totalAmount}
            </span>
        </div>
    );
}
