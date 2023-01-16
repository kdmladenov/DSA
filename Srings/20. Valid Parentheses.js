// https://leetcode.com/problems/valid-parentheses/

const isValid = s => {
    const stack = [];
    const map = {'(': ')', '{': '}', '[': ']'}

    for (let i = 0; i < s.length; i++) {
      let char = s[i];

      if(map[char]){
        stack.push(char)
      } else if (map[stack.pop()] !== char){
        return false
      }
    }

    return stack.length === 0
};
