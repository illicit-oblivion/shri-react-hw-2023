'use client';

import {FC} from "react";
import styles from "./Counter.module.css";
import {maxOrder} from "@app/config";
import {Minus, Plus} from "@app/ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {cartActions} from "../../../redux/features/cart";
import {selectTicketAmount} from "../../../redux/features/cart/selector";

type CounterProps = {
    id: string;
}

export const Counter: FC<CounterProps> = ({id}) => {
    const count = useSelector((state: RootState) =>
        selectTicketAmount(state, id)
    )

    const dispatch = useDispatch<AppDispatch>();
    const subtractDisabled = !count;
    const addDisabled = count >= maxOrder;
    return (
        <div className={styles['counter']}>
            <button
                className={styles['subtractButton']}
                onClick={() =>
                    dispatch(cartActions.decrement(id))
                }
                disabled={subtractDisabled}
            ><Minus width={9}/></button>
            <span className={styles['count']}>{count}</span>
            <button
                className={styles['addButton']}
                onClick={() =>
                dispatch(cartActions.increment(id))
                }
                disabled={addDisabled}
            ><Plus width={9}/></button>
        </div>
    );
}
