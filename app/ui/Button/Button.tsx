import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import styles from './Button.module.css';
import classNames from "classnames";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
    primary?: boolean;
};

export const Button: FC<Props> = ({className, children, primary, ...props}) => {
    return (
        <button
            className={classNames(styles['button'], className, {[styles['primary']]: primary})}
            {...props}
        >
            {children}
        </button>
    );
}
