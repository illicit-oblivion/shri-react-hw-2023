'use client'

import {FC, useState} from "react";
import {Dropdown} from "@app/ui/Dropdown/Dropdown";
import cardStyles from "@app/ui/Card/Card.module.css";
import styles from './Filters.module.css';
import classNames from "classnames";
import {Input} from "@app/ui/Input/Input";
import {rows} from "@app/ui/utils";


type Option = {
    id?: string;
    name: string;
};
type Props = {
    setCinema: (value: string) => void;
    setName: (value: string) => void;
    setGenre: (value: string) => void;
    name: string;
    genreOptions: Option[];
    cinemaOptions: Option[];
};

export const Filters: FC<Props> = ({genreOptions, cinemaOptions, setGenre, name, setCinema, setName}) => {
    return (
        <div className={classNames(cardStyles['card'], styles['filters'], rows)}>
            <div className={styles['header']}>Фильтр поиска</div>
            <Input placeholder={'Введите название'} label={'Название'} id={'name'} onChange={setName} value={name} />
            <Dropdown
                onChange={setGenre}
                options={genreOptions}
                label="Жанр"
                defaultText="Выберите жанр"
            />
            <Dropdown
                onChange={setCinema}
                options={cinemaOptions}
                label="Кинотеатр"
                defaultText="Выберите кинотеатр"
            />
        </div>
    );
};
