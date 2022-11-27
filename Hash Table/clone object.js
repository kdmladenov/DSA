// const original = {
//   name: 'Pesho',
//   age: 20,
//   address: {
//     street: 'Main',
//     number: 26,
//   },
//   friends: [
//     { name: 'Gosho' },
//     { name: 'Tosho' },
//   ],
// };

const cloneObject = obj => {
  // Primitive only
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Arrays only
  if (Array.isArray(obj)) {
    return obj.map(cloneObject);
  }

  const clone = {};
  // Objects 
  for (let prop in obj) {
    clone[prop] = cloneObject(obj[prop]);
  }

  return clone;
};

// const clonedObject = cloneObject(original);
// console.log(clonedObject);
// console.log(clonedObject.friends[0] === original.friends[0]);

// console.log(cloneObject(2));
// console.log(cloneObject(null));
// console.log(cloneObject([1, null, [], [{ test: 1, test2: [1, 2, 3]}]]));
