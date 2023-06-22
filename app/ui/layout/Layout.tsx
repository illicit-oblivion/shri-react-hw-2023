import '../../globals.css';
import {title} from "@app/strings/common";
import {FC, ReactNode} from "react";
import {Header} from "@app/ui/layout/Header/Header";
import {Body} from "@app/ui/layout/Body/Body";
import {Footer} from "@app/ui/layout/Footer/Footer";
import styles from './Layout.module.css';


export const metadata = {
    title,
};

type Props = {
    children: ReactNode
};

export const Layout: FC = ({children}: Props) => {
    return (
        <div className={styles['layout']}>
            <Header/>
            <Body className={styles['layoutBody']}>
                {children}
            </Body>
            <Footer/>
        </div>
    )
};
