// https://leetcode.com/problems/implement-trie-prefix-tree/submissions/
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let char of word) {
      if (!node) return null;
      node = node[char];
    }
    return node;
  }

  search(word) {
    return !!this.traverse(word)?.isWord;
  }

  startsWith(prefix) {
    return !!this.traverse(prefix);
  }
}
