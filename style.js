// Create a style element
const style = document.createElement('style');
style.type = 'text/css';

// Add @font-face rule
const fontFaceRule = `
    @font-face {
        font-family: 'Fixedsys Excelsior 3.01';
        font-style: normal;
        font-weight: 400;
        src: local('Fixedsys Excelsior 3.01'), url('Fixedsys Excelsior 3.01.woff') format('woff');
    }
`;
style.appendChild(document.createTextNode(fontFaceRule));
/* asterisk (*) = wildcard selector */
/* test reset initial values w/ initial or reset/normalize.css */
/* refactorExp and fix user-select and text-decoration */
// review these rules
const cssRules = `
    body {
        all: initial;
        background-color: #222222;
        white-space: pre-wrap;
        color: white;
        font-family: 'Fixedsys Excelsior 3.01';
        font-style: normal;
        font-size: 22px;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .hl-hover:hover {
        background-color: yellow;
        color: black;
        cursor: pointer;
    }

    .no-wrap {
        white-space: nowrap;
    }
    .no-wrap * {
        white-space: inherit;
    }

    .reserve {
        color: blue;
    }

    .alt-text {
        color: #FEFFBA;
    }

    footer {
        background-color: #222222;
        color: white;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;
style.appendChild(document.createTextNode(cssRules));

// Append the style element to the head
document.head.appendChild(style);

