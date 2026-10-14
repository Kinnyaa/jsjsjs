/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *  npx jest --watchAll --runTestsByPath problems/__tests__/001.js
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {

    const firstSum = Number(number[0]) + Number(number[1]) + Number(number[2]);
    const secondSum = Number(number[3]) + Number(number[4]) + Number(number[5]);
    return firstSum === secondSum;
}

module.exports = checkTicket;
