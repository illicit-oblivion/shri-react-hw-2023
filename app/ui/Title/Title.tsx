import {FC, PropsWithChildren} from "react";
import {ClassName} from "@app/ui/utils";
import classNames from "classnames";
import styles from './Title.module.css';

type Props = PropsWithChildren<ClassName>

export const Title: FC<Props> = (props) => (
    <h1 className={classNames(styles['title'], props.className)}>{props.children}</h1>
)
