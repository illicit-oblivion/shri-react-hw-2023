import {FC} from "react";
import styles from "./Counter.module.css";
import {maxOrder} from "@app/config";
import {Minus, Plus} from "@app/ui/icons";

export type CounterProps = {
    count: number;
    onAddClick: () => void;
    onSubtractClick: () => void;
}

export const Counter: FC<CounterProps> = (props) => {
    const subtractDisabled = !props.count;
    const addDisabled = props.count >= maxOrder;
    return (
        <div className={styles['counter']}>
            <button
                className={styles['subtractButton']}
                onClick={props.onSubtractClick}
                disabled={subtractDisabled}
            ><Minus width={9}/></button>
            <span className={styles['count']}>{props.count}</span>
            <button
                className={styles['addButton']}
                onClick={props.onAddClick}
                disabled={addDisabled}
            ><Plus width={9}/></button>
        </div>
    );
}
