'use client';

import {FC} from "react";
import styles from './Input.module.css';

type Props = {
    value: string;
    onChange: (value: string) => void;
    label: string;
    id: string;
    placeholder: string;
};

export const Input: FC<Props> = ({value, onChange, label, placeholder, id}) => {

    return (
        <div className={styles['input-container']}>
            <label className={styles['label']} htmlFor={id}>{label}</label>
            <input className={styles['input']} placeholder={placeholder} id={id} value={value} onChange={(ev) => onChange(ev.target.value)} />
        </div>
    );
};
