import {Roboto} from "next/font/google";

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    style: ['normal', 'italic'],
});

export const robotoClassName = roboto.className;
