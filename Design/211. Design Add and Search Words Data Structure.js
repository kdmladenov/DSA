class WordDictionary {
  constructor() {
    this.map = {};
  }
  
  addWord(word) {
    if (word.length in this.map) {
      this.map[word.length].push(word);
    } else {
      this.map[word.length] = [word];
    }
  }

  // Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
  search(word) {
    let len = word.length;
    if (len in this.map) {
      for (let i = 0; i < this.map[len].length; i++) {
        for (var j = 0; j < len; j++) {
          if (word[j] !== '.' && word[j] !== this.map[len][i][j]) break;//compare with the stored strings which have same length
        }
        if (j === len) return true;
      }
    }
    return false;
  }
}
