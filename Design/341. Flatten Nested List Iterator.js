// https://leetcode.com/problems/flatten-nested-list-iterator/description/

class NestedIterator {
    constructor(nestedList) {
        this.data = []
        this.flatten(nestedList)
    };
    
    flatten(list) {
        for (let el of list)
            if (el.isInteger()) this.data.push(el.getInteger())
            else this.flatten(el.getList())
    };
    
    hasNext() { return this.data.length };
    
    next() { return this.data.shift() };
};