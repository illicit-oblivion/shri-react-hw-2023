'use client'

import {FC, useState} from "react";
import cardStyles from "@app/ui/Card/Card.module.css";
import styles from './Filters.module.css';
import classNames from "classnames";
import {Input} from "@app/ui/Input/Input";
import {Genre} from "@app/api/types";
import {rows} from "@app/ui/utils";
import Dropdown from "@app/ui/Dropdown/Dropdown";


type Props = {};

export const Filters: FC<Props> = ({}) => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState<Genre>();
    const [cinema, setCinemas] = useState<Genre>();

    return (
        <div className={classNames(cardStyles['card'], styles['filters'], rows)}>
            <div className={styles['header']}>Фильтр поиска</div>
            <Input placeholder={'Введите название'} label={'Название'} id={'name'} value={name} onChange={setName} />
            <Dropdown
                onChange={()=> {}}
                options={[]}
                label="Жанр"
                defaultText="Выберите жанр"
            />
            <Dropdown
                onChange={()=> {}}
                options={[]}
                label="Кинотеатр"
                defaultText="Выберите кинотеатр"
            />
        </div>
    );
};
