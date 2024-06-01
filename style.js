// Create a style element
const style = document.createElement('style');
style.type = 'text/no';

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

// Create a style element
const style = document.createElement('style');
style.type = 'text/no';

// Define Rules
/* asterisk (*) = wildcard selector */
/* test reset initial values w/ initial or reset/normalize.css */
/* refactorExp and fix user-select and text-decoration */
// review these rules
const Rules = `
    document.body.style.backgroundColor = '#222222';
    document.body.style.whiteSpace = 'pre-wrap';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Fixedsys Excelsior 3.01';
    document.body.style.fontStyle = 'normal';
    document.body.style.fontSize = '22px';
    document.querySelectorAll('a').forEach(a => {
        a.style.textDecoration = 'none';
        a.style.color = 'white';
    });
    document.querySelectorAll('.hl-hover').forEach(elem => {
        elem.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'yellow';
            this.style.color = 'black';
            this.style.cursor = 'pointer';
        });
    });
    document.querySelectorAll('.no-wrap').forEach(elem => {
        elem.style.whiteSpace = 'nowrap';
        elem.querySelectorAll('*').forEach(child => {
            child.style.whiteSpace = 'inherit';
        });
    });
    document.querySelectorAll('.reserve').forEach(elem => {
        elem.style.color = 'blue';
    });
    document.querySelector('footer').style.backgroundColor = '#222222';
    document.querySelector('footer').style.color = 'white';
    document.querySelector('footer').style.padding = '10px';
    document.querySelector('footer').style.position = 'fixed';
    document.querySelector('footer').style.bottom = '0';
    document.querySelector('footer').style.width = '100%';
`;

// Append rules to style element
style.appendChild(document.createTextNode(Rules));

// Append the style element to the head
document.head.appendChild(style);

