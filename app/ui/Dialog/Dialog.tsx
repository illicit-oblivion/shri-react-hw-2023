import {FC, ReactNode, useEffect, useRef} from "react";
import styles from './DIalog.module.css';
import {CloseIcon} from "@app/ui/icons";

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;
    text?: string;
    width?: number;
    height?: number;
    footer?: () => ReactNode;
};

const defaultHeight = 186;
const defaultWidth = 344;

export const Dialog: FC<Props> = ({
                                      open,
                                      onClose,
                                      title,
                                      text,
                                      footer,
                                      width = defaultWidth,
                                      height = defaultHeight
                                  }) => {
    const ref = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const close = () => {
            ref.current?.close();
        };

        if (open) {
            ref.current?.showModal();
        } else {
            close();
        }
        return close;
    }, [open])

    return (
        <dialog className={styles['overlay']} ref={ref} onClose={onClose}
                style={{width, height, marginLeft: -width / 2, marginTop: -height / 2}}>
            <div className={styles['body']}>
                <div>
                    {title && (
                        <div className={styles['header']}>
                            <div className={styles['title']}>{title}</div>
                            <button className={styles['closeButton']} onClick={onClose}><CloseIcon width={10}
                                                                                                   height={10}/>
                            </button>
                        </div>
                    )}
                    {text && <div className={styles['text']}>{text}</div>}
                </div>
                {footer && <div className={styles['footer']}>{footer()}</div>}
            </div>
        </dialog>
    );
};
