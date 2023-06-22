import {FC} from "react";
import styles from './Body.module.css';
import classNames from "classnames";

type ClassName = {
    className: string;
};

type Props = ClassName;

export const Body: FC<Props> = ({children, className}) => (
    <main className={classNames(styles['body'], className)}>
        <div className={styles['bodyContainer']}>
            {children}
        </div>
    </main>
);
