/**
 * Функция, которая принимает на вход строку и возвращает ее обратный порядок.
 * @param {string} str - входная строка
 * @return {string} - строка, обращенная задом наперед
 */
function reverseString(str) {
    return str.split('').reverse().join('');
    // В массив > переворачиваем > cоединяем
}

console.log(reverseString('hello'));      // 
console.log(reverseString('JavaScript')); // 
console.log(reverseString(''));           // 
console.log(reverseString('7'));          // 

