// Click event listener
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Mouseover event listener
const element = document.getElementById('myElement');

element.addEventListener('mouseover', () => {
    console.log('Mouse over element!');
});

// Form submit event listener
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted!');
});

// Keydown event listener
document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});

// Window load event listener
window.addEventListener('load', () => {
    console.log('Window loaded!');
});

