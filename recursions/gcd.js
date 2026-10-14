/**
 * Функция, которая принимает на вход два числа и возвращает их наибольший общий делитель.
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @return {number} - наибольший общий делитель
 */
function gcd(a, b) {
   if ( b === 0 ) {
    return a; 
   }
   return gcd(b , a % b);

}




console.log(gcd(8, 12)); 
console.log(gcd(18, 24)); 
console.log(gcd(35, 42));
console.log(gcd(111, 259));
