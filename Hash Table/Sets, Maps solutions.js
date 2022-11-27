/**
 * Counts the number of occurrences of a each word in a collection 
 * @param {string[]} words A collection of words
 * @returns {Map<string, number>} Map of occurrences by word 
 */
const countOccurrences = (words) => {
    const map = new Map();

    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    return map;
};

/**
 * Return the indices of the first two numbers that sum to a given number 
 * @param {number[]} numbers The number collection
 * @param {number} sum The target sum
 * @returns {number[]} The indices of the 
 */
const twoSum = (numbers, sum) => {
    const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const target = sum - numbers[i];
        if (map.has(target)) {
            return [map.get(target), i];
        } else {
            map.set(numbers[i], i);
        }
    }

    return [-1, -1];
}

/**
 * Count how many coins are special 
 * @param {string} coins Coins to check
 * @param {string} catalogue The catalogue of special coins
 * @returns {number} The count of special coins  
 */
const specialCoins = (coins, catalogue) => {
    const set = new Set(catalogue);

    return [...coins].reduce((t, c) => t + (set.has(c) ? 1 : 0), 0);
}

/**
 * Determines if s1 an s2 are isomorphic.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} true if isomorphic 
 */
const areIsomorphic = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }

    const s1map = new Map();
    const s2map = new Map();

    for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i];
        const c2 = s2[i];

        if (!s1map.has(c1)){
            s1map.set(c1, c2);
        }
        if (!s2map.has(c2)) {
            s2map.set(c2, c1);
        }

        if (s1map.get(c1) !== c2 || s2map.get(c2) !== c1)
            return false;
    }

    return true;
}