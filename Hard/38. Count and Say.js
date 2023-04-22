// https://leetcode.com/problems/count-and-say/

// Medium

const countAndSay = (n) => {
    let str = '1';
    for (let i = 1; i < n; i++) {
        const strArray = str.split('');
        str = '';
        let count = 1;

        for (let j=0; j < strArray.length; j++) {
            
            if (strArray[j] !== strArray[j+1]) {// Next digit is different
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
};
