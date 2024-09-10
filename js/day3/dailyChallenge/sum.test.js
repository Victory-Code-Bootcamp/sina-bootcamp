const sum = require('./sum');

test('adds 1 + 2 to equal 3' , () => {
    expect(sum(1,2)).toBe(3);
});

// const { sortArray } = require('./sum'); // Replace 'yourFile' with your actual file

// test('sorts the array in ascending order', () => {
//   const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
  
//   expect(sortArray(arr)).toEqual([-4, 1, 2, 3, 3, 5, 6, 7, 8]);
// });