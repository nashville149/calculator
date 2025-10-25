document.addEventListener('DOMContentLoaded', () => {
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
                    // Replace % with /100 for percentage calculations
                    let expression = display.value.replace(/%/g, '/100');

                    // Evaluate safely
                    display.value = eval(expression);
                } catch {
                    display.value = 'Error';
                }
            }
        });
    });
});
