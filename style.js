/* style.type = 'text/css'; // MIME type */
/* @syntax: asterisk (*) is for wildcard selectors */
/* @remove: .no-wrap { white-space: nowrap;  } */
/* @remove: .no-wrap*{ white-space: inherit; } */
/* @fix: user-select and text-decoration if broken */
/* reset initial values=not working, in every day css fashion*/
/* so im using javascript instead */
// Creating a <style> element
const style = document.createElement('style');
style.type = 'text/css'; // Setting MIME type

// Adding @font-face and other CSS rules
style.textContent = `
    @font-face {
        font-family: 'Fixedsys Excelsior 3.01';
        font-style: normal;
        font-weight: 400;
        src: local('Fixedsys Excelsior 3.01'), url('Fixedsys Excelsior 3.01.woff') format('woff');
    }

    body {
        background-color: #222222;
        white-space: pre-wrap;
        color: #FAFFAF;
        font-family: 'Fixedsys Excelsior 3.01';
        font-style: normal;
        font-size: 22px;
    }

    a {
        text-decoration: none;
        color: #FAFFAF;
    }

    .hl-hover:hover {
        background-color: yellow;
        color: black;
        cursor: pointer;
    }

    .alt-text {
        color: white;
    }

    .reserve {
        color: blue;
    }

    footer {
        background-color: #222222;
        color: #FAFFAF;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;

// Appending <style> element to <head>
document.head.appendChild(style);

