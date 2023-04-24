
// https://leetcode.com/problems/find-median-from-data-stream/

// Bad complexity!
// Use Heaps instead!!!!

// class MedianFinder {
//   constructor() {
//     this.arr = [];
//   }

//   addNum(num) {
//     let low = 0;
//     let high = this.arr.length - 1;

//     while (low <= high) {
//       let mid = Math.floor((high + low) / 2);

//       this.arr[mid] < num ? (low = mid + 1) : (high = mid - 1);
//     }

//     // insert at  location trick for javascript array.
//     this.arr.splice(low, 0, num);
//   }

//   findMedian() {
//     let mid = Math.floor(this.arr.length / 2);
//     return this.arr.length % 2 == 0 ? (this.arr[mid] + this.arr[mid - 1]) / 2 : this.arr[mid];
//   }
// }

