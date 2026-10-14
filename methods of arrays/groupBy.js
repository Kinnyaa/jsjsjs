/**
 Задача "Group by". Напишите функцию groupBy(arr, key), которая принимает массив объектов и строку key, соответствующую
 ключу объекта, по которому нужно сгруппировать элементы. Функция должна возвращать новый объект, где каждый ключ -
 уникальное значение, полученное из свойства key, а каждое значение - массив объектов, у которых значение свойства key
 равно ключу. Например, groupBy([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Alice'}], 'name') должна
 вернуть {Alice: [{id: 1, name: 'Alice'}, {id: 3, name: 'Alice'}], Bob: [{id: 2, name: 'Bob'}]}.
 * */
function groupBy(arr, key) {

// cначала создаем пустой обьект, потом запонляем его группами
    const result = {};

    arr.forEach((item) => {
        const groupName = item[key];
            // если такой группы нет, ебашим пустой массив
        if (!result[groupName]) {
            result[groupName] = [];
        }
        //добавляем обьект в нужную группу
        result[groupName].push(item);
    });

    return result;
    }

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Alice'}
];

const people = [
    {name: 'Анна', age: 20},
    {name: 'Иван', age: 30},
    {name: 'Олег', age: 20}
];


console.log(groupBy(users, 'name'));

console.log(groupBy(people, 'age'));
