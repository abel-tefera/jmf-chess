import { createFooter, createHeader, footer, header } from "./shared.js";

const main = () => {
    createHeader([
        'home',
        'logo',
        'past',
        'X'
    ]);
    createFooter('dark');
}

main();