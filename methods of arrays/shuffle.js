/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr) {
        // идём с конца к началу.
    for (let index = arr.length - 1; index > 0; index -= 1) {
        // случайный индекс от 0 до index включительно.
        const randomIndex = Math.floor(Math.random() * (index + 1));
        
        [arr[index], arr[randomIndex]] = [
            arr[randomIndex],
            arr[index]
        ];
    }

    return arr;
}


const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffle(numbers);

console.log(shuffledNumbers);                            
console.log(shuffledNumbers.length);                     
