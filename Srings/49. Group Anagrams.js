// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
  let map = {};

  for (let str of strs) {
    let key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  }

  return Object.values(map);
};