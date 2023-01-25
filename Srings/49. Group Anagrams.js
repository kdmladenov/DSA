// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
    const grouped = {};

    for (let i = 0; i < strs.length; i++){
      const word = strs[i];
      const key = word.split('').sort().join();

      if(!grouped[key]) grouped[key] = [];

      grouped[key].push(word)
    }

    return Object.values(grouped);
};