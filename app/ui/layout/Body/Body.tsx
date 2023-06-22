import {FC} from "react";
import styles from './Body.module.css';

export const Body: FC = ({children}) => {
    return (
        <main className={styles['body']}>
            <div className={styles['bodyContainer']}>
                {children}
            </div>
        </main>
    )
};
