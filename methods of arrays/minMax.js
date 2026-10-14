/**
 * Функция, которая принимает на вход массив чисел и возвращает наименьшее и наибольшее число в массиве.
 * @param {number[]} arr - входной массив чисел
 * @return {number[]} - массив, содержащий наименьшее и наибольшее число в массиве
 */
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([3, 1, 8, 2]));      
console.log(minMax([-5, -2, -10])); 
