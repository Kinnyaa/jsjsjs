/**
 * Функция, которая принимает на вход объект и возвращает его строковое представление в формате "key1=value1&key2=value2&...".
 * @param {object} obj - входной объект
 * @return {string} - строковое представление объекта
 */
function objectToString(obj) {
    // object.entires возвращает массив пар «ключ + значение» 
    const entries = Object.entries(obj);
    // преобразуем строку . Map это делает для каждого элемента массива
    const parts = entries.map(([key, value]) => {
        return `${key}=${value}`;
    });
    //соединяем все строки через &
    return parts.join('&');
}


console.log(objectToString({a: 1, b: 2, c: 3})); // "a=1&b=2&c=3"
console.log(objectToString({foo: "hello", bar: "world"})); // "foo=hello&bar=world"
console.log(objectToString({x: true, y: false})); // "x=true&y=false"
