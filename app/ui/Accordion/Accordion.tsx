import {FC, MouseEventHandler, useEffect, useRef, useState} from "react";
import styles from './Accordion.module.css';
import classNames from "classnames";
import {AccordionIcon} from "@app/ui/icons";

type Props = {
    title: string;
    text: string;
}

let resizeObserver: ResizeObserver | null = null;
if (typeof window !== 'undefined') {
    resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target as HTMLElement;
            target.parentElement?.style.setProperty('--height', target.clientHeight + 'px');
        })
    });
}

export const Accordion: FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const toggle: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (e.target === innerRef.current || innerRef.current?.contains(e.target as HTMLElement)) {
            return;
        }
        setOpen((value) => !value);
    };

    useEffect(() => {
        const target = innerRef.current;
        if (!target) {
            return;
        }
        resizeObserver?.observe(target);
        return () => {
            resizeObserver?.unobserve(target);
        }
    }, [])

    return (
        <button className={classNames(styles['accordion'], {[styles['open']]: open})} onClick={toggle}>
            <div className={styles['header']}>
                <div className={styles['title']}>{props.title}</div>
                <AccordionIcon className={styles['icon']} width={29} height={29}/>
            </div>
            <div className={styles['text']}>
                <div className={styles['textInner']} ref={innerRef}>{props.text}</div>
            </div>
        </button>
    )
}
