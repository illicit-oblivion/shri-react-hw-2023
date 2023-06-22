import './globals.css'
import {title} from "@app/strings/common";
import {lang} from "@app/config";
import {PropsWithChildren} from "react";
import {Layout} from "@app/ui/layout/Layout";
import {robotoClassName} from "@app/ui/fonts/roboto";

export const metadata = {
    title,
}

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang={lang}>
        <body className={robotoClassName}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    )
}
