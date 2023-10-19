const inputs = window.document.querySelectorAll('[contenteditable="true"]');
const radio = window.document.querySelectorAll('[name="operation"]');

radio.forEach(radio => {
    radio.addEventListener('change', _ => {
        docalculate();
    });
});

inputs.forEach(input => {
    input.addEventListener('input', _ => {
        docalculate();
    });
});

const docalculate = _ => {
    const operation = window.document.querySelector('[name="operation"]:checked').value;
    const first = window.document.querySelector('#first').innerText;
    const second = window.document.querySelector('#second').innerText;
    const result = window.document.querySelector('#result');
    let what;
    switch (operation) {
        case 'add':
            what = (parseFloat(first) + parseFloat(second)).toFixed(2);
            break;
        case 'sub':
            what = (parseFloat(first) - parseFloat(second)).toFixed(2);
            break;
        case 'mul':
            what = (parseFloat(first) * parseFloat(second)).toFixed(2);
            break;
        case 'div':
            what = (parseFloat(first) / parseFloat(second)).toFixed(2);
            break;
        default:
            what = '0.00';
    }
    result.innerText = isNaN(what) ? '0.00' : what;
}
