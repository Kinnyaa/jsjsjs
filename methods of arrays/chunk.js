/**
 Задача "Chunk". Напишите функцию chunk(arr, size), которая принимает массив и число size, и возвращает новый массив,
 состоящий из подмассивов длиной не более size. Например, chunk([1, 2, 3, 4, 5], 2) должна вернуть [[1, 2], [3, 4], [5]].
 * */
function chunk(arr, size) {
    if (size <= 0) {
        return [];
    }

    const result = [];

    for (let index = 0; index < arr.length; index += size) {
        result.push(arr.slice(index, index + size));
        // slice берет часть массива от inex до index + size
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));