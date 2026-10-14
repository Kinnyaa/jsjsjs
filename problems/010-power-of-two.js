/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let value = 1;
    let power = 0;

    while (value < n) {
        value *=2;
        power +=1;
    }
    if (value === n) {
        return power;
    }
    return undefined;
}

module.exports = getPower;
