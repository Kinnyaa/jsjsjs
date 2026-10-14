/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    let previous = 0;
    let current = 1;
    let index = 0;

    while ( previous < value) {
        const next = previous + current;
        previous = current;
        current = next;
        index +=1;
    }
    if (previous === value) {
        return index;
    }
    return undefined;
}

module.exports = isFibonacci;
