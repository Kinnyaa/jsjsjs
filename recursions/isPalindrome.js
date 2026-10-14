/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    const norm = str
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]/gi, '');

    function check(left, right) {
        if (left >= right) {
            return true;
        }
        if(norm[left] !== norm[right]) {
            return false;
        }

        return check(left + 1, right -1);
    }
    return check(0, norm.length - 1);

}

console.log(isPalindrome("radar")); 
console.log(isPalindrome("level")); 
console.log(isPalindrome("hello"));
