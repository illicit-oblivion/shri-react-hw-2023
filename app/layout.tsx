import './globals.css'
import {title} from "@app/strings/common";
import {lang} from "@app/config";
import {PropsWithChildren} from "react";
import {Layout} from "@app/ui/layout/Layout";

export const metadata = {
    title,
}

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang={lang}>
        <body>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    )
}
