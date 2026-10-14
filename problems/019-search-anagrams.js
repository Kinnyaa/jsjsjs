/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    const words = value.match(/[a-zа-яё0-9]+/gi) || [];

    const sortedWords = words.map((word) => {
        return word.toLowerCase().split('').sort().join('');
    });
    return words.filter((word, index) => {
        const key = sortedWords[index];

        return sortedWords.indexOf(key) !== sortedWords.lastIndexOf(key);
    }).join(' ');
}

module.exports = searchAnagrams;
