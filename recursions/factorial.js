/**
 * Функция, которая принимает на вход число и возвращает его факториал.
 * @param {number} n - входное число
 * @return {number} - факториал числа
 */
function factorial(n) {
    // отрицательное число не имеет факториала

    if (n < 0) {
        return undefined
    }

    // факториал 0 и 1 равны 1
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Примеры:
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
