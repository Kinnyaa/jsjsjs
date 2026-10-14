/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */
function average(arr) {
    // возвращаем 0 для пустого элемента 
   if (arr.length === 0) {
    return 0;
   }
   // сумма всех чисел массива(reduce)
   const sum = arr.reduce((total, Number) => {
    return total + Number;
   }, 0);
   // сумма/кол-во чисел(среднее значение)
   return sum / arr.length;
}

console.log(average([1, 2, 3]));    
console.log(average([10, 20]));      
console.log(average([5]));   


//// node "methods of arrays/average.js"