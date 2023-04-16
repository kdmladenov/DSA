// https://leetcode.com/problems/minimum-window-substring/

// Hard

const minWindow = function (s, t) {
const map = {};
let count = t.length;
let min = Infinity;
let head = 0;
let left = 0;
let right = 0;

if (!s.length || !t.length) return '';

for (let tChar of t) map[tChar] = map[tChar] + 1 || 1;

while (right < s.length) {
  if (map[s[right]] !== undefined) {
    if (map[s[right]] > 0) count--;
    map[s[right]]--;
  }

  right++;

  while (count === 0) {
    if (right - left < min) {
      min = right - left;
      head = left;
    }

    if (map[s[left]] !== undefined) {
      if (map[s[left]] === 0) count++;
      map[s[left]]++;
    }

    left++;
  }
}

// return empty string if no valid candidate
// otherwise return smallest substring
return min === Infinity ? '' : s.substr(head, min);
};

