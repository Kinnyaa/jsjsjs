/**
 * Функция, которая принимает на вход индекс и возвращает число Фибоначчи с этим индексом.
 * @param {number} n - индекс числа Фибоначчи
 * @return {number} - число Фибоначчи с заданным индексом
 */

// математическая последовательность, в которой каждое следующее число равно сумме двух предыдущих
function fibonacci(n) {
    if (n < 0) {
        return undefined
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n -1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); 
console.log(fibonacci(1));  
console.log(fibonacci(6)); 
console.log(fibonacci(12)); 
