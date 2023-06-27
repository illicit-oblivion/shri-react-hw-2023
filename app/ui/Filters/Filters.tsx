'use client'

import {FC, useState} from "react";
import cardStyles from "@app/ui/Card/Card.module.css";
import styles from './Filters.module.css';
import classNames from "classnames";
import {Input} from "@app/ui/Input/Input";

type Props = {};

export const Filters: FC<Props> = ({}) => {
    const [name, setName] = useState('');

    return (
        <div className={classNames(cardStyles['card'], styles['filters'])}>
            <div className={styles['header']}>Фильтр поиска</div>
            <Input placeholder={'Введите название'} label={'Название'} id={'name'} value={name} onChange={setName} />
        </div>
    );
};
