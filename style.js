// Create a style element
const style = document.createElement('style');
style.type = 'text/css'; // MIME type

/* asterisk (*) = wildcard selector */
/* test reset initial values w/ initial or reset/normalize */
/* refactorExp and fix user-select and text-decoration */

// Define font face rule
const fontFaceRule = `
    @font-face {
        font-family: 'Fixedsys Excelsior 3.01';
        font-style: normal;
        font-weight: 400;
        src: local('Fixedsys Excelsior 3.01'), url('Fixedsys Excelsior 3.01.woff') format('woff');
        /* Add additional font formats (e.g., WOFF2) for better browser compatibility */
    }
`;

const Rules = `
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

    .alt-text {
        color: yellow;
    }

    .reserve {
        color: blue;
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

// Append rules to style element
style.appendChild(document.createTextNode(Rules));

// Append the style element to the head
document.head.appendChild(style);

// Event listeners or dynamic class toggling here

