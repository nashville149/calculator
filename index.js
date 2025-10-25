const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if (value) {
            display.value += value;
        }

        if (action === 'clear') {
            display.value = '';
        }

        if (action === 'delete') {
            display.value = display.value.slice(0, -1);
        }

        if (action === 'calculate') {
            try {
                display.value = Function('"use strict";return (' + display.value + ')')();
            } catch {
                display.value = 'Error';
            }
        }
    });
});
