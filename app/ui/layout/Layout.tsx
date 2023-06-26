import '../../globals.css';
import {title} from "@app/strings";
import {FC, PropsWithChildren} from "react";
import {Header} from "@app/ui/layout/Header/Header";
import {Body} from "@app/ui/layout/Body/Body";
import {Footer} from "@app/ui/layout/Footer/Footer";
import styles from './Layout.module.css';


export const metadata = {
    title,
};

export const Layout: FC<PropsWithChildren> = ({children}) => {
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
