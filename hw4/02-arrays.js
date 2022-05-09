let result = [];

// insert item into result
const insertItem = (item) => {
  result.push(item);
  return item;
};

// remove the first occurrence of item in result
const deleteItem = (item) => {
  let index = result.indexOf(item);
  if (index != -1) {
    result.splice(index, 1);
  }
  return item;
};

// return the item from result at index, deleting the obtained item
const lookupItem = (index) => {
  if (index >= 0 && index < result.length) {
    index = result.splice(index, 1);
    return index.join(", ");
  }
  return null;
};

// return a string of the concatenated item in result, separated by commas
const printItems = () => {
  return result.join(", ");
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);

console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
