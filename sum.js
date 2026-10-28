// Сумма чисел на JavaScript
function sumNumbers(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

document.write(`
<form onsubmit="return false;">
    <input type="number" id="number" placeholder="Введите число">
    <button onclick="calculateSum()">Посчитать</button>
    <p id="result"></p>
</form>
`);

function calculateSum() {
    const n = parseInt(document.getElementById('number').value);
    const result = sumNumbers(n);
    document.getElementById('result').innerText = `Сумма чисел от 1 до ${n}: ${result}`;
}

