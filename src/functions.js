function sum(a,b){
    return a + b;
}

/**
 * Summatory of the number digits
 * @param {number} num - Positive number
 * @return {number} The summatory of the num digits.
 */
function sumDigits(num) {
    //first attemp
    if(typeof num != 'number' || num < 0) {
        return undefined;
    }

    num = num.toString();
    var sum = 0;
    
    for (var i = 0; i < num.length; i++) {

        sum = sum + Number(num[i]);
    }
    return sum;

    //solution
}

/**
 * Operate two numbers
 * @param {number} a
 * @param {number} b
 * @return {object} The sum, sub, mul and div of the a b numbers
 */
function op(a, b) {
    calculate = {};

    calculate.sum = a + b;
    calculate.sub = a - b;
    calculate.mul = a * b;
    if (b !== 0) {
        calculate.div = a / b;
    } else {
        calculate.div =  undefined;
    };

    return calculate;


}


/**
 * Capitalize message's words
 * @param {string} message
 * @return {string} Capitalized words message
 */
function capitalize(message) {
}

/**
 * Find the longest word of message
 * @param {string} message
 * @return {string} longest word
 */
function longestWord(message) {
}

/**
 * Count the vowels of message
 * @param {string} message
 * @return {number} number of vowels
 */
function countVowels(message) {
}

/**
 * Filter pair numbers
 * @param {Array} numbers
 * @return {Array} pair numbers
 */
function pairs(numbers) {
}

/**
 * 
 * @param {Array} numbers
 * @return {Array} pair numbers
 */
function pairs(numbers) {
}

/**
 * Compute the union of two arrays
 * 
 * @param {Array} a
 * @param {Array} b
 * @return {Array} the union of two arrays
 */
function union(a, b) {
}

