import {FC, PropsWithChildren} from "react";
import {ClassName} from "@app/ui/utils";
import classNames from "classnames";
import styles from './Paragraph.module.css';

type Props = PropsWithChildren<ClassName>

export const Paragraph: FC<Props> = (props) => (
    <p className={classNames(styles['paragraph'], props.className)}>{props.children}</p>
)
