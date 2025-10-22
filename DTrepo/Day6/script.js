const Calculator = (function() {
    let expression = '';
    let calcCount = 0; // private counter

    // Private helper functions
    const append = (val) => expression += val;
    const clear = () => expression = '';
    const evaluate = () => {
        try {
            let exp = expression
                .replace(/√/g, 'Math.sqrt')
                .replace(/sin/g, 'Math.sin')
                .replace(/cos/g, 'Math.cos')
                .replace(/tan/g, 'Math.tan')
                .replace(/log/g, 'Math.log10')
                .replace(/\^/g, '**');

            const result = eval(exp);
            calcCount++; // increment counter every calculation
            return result;
        } catch {
            return 'Error';
        }
    };

    return {
        add: append,
        clearAll: clear,
        get: () => expression,
        compute: evaluate,
        getCount: () => calcCount // expose count getter
    };
})();


const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const countDisplay = document.getElementById('count');

// Event Listeners
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('clear')) {
            Calculator.clearAll();
            display.value = '';
        } else if (btn.id === 'equals') {
            display.value = Calculator.compute();
            countDisplay.textContent = Calculator.getCount(); // update counter
        } else {
            Calculator.add(btn.getAttribute('data-value'));
            display.value = Calculator.get();
        }
    });
});