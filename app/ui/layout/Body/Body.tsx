import {FC, PropsWithChildren} from "react";
import styles from './Body.module.css';
import classNames from "classnames";
import {ClassName} from "@app/ui/utils";

type Props = PropsWithChildren<ClassName>;

export const Body: FC<Props> = ({children, className}) => (
    <main className={classNames(styles['body'], className)}>
        <div className={styles['bodyContainer']}>
            {children}
        </div>
    </main>
);
