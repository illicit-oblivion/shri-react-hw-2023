import {FC} from "react";
import styles from "@app/ui/TicketCard/TicketCard.module.css";
import Minus from "@app/ui/icons/minus.svg";
import Plus from "@app/ui/icons/plus.svg";
import {maxOrder} from "@app/config";

export type CounterProps = {
    count: number;
    onAddClick: () => void;
    onSubtractClick: () => void;
}

export const Counter: FC<CounterProps> = (props) => {
    const subtractDisabled = !props.count;
    const addDisabled = props.count >= maxOrder;
    return (
        <div className={styles['counterContainer']}>
            <button
                className={styles['subtractButton']}
                onClick={props.onSubtractClick}
            ><Minus width={9}/></button>
            <span className={styles['count']}>{props.count}</span>
            <button
                className={styles['addButton']}
                onClick={props.onAddClick}
            ><Plus width={9}/></button>
        </div>
    );
}
