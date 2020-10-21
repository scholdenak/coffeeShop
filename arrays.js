"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code

  for (const i in items){
    console.log(items[i], (i));
  }
  return printIndices
}


// 2. everyOtherItem
function everyOtherItem(items) {

  const result = []
  for (const i in items){
    if (i % 2 === 0){
      result.push(items[i])
    }
  }return result
}



// 3. smallestNItems
function smallestNItems(items, n) {

  > const nums = [1, 30, 4, 21, 100000];
> nums.sort((a, b) => a - b);
[1, 4, 21, 30, 100000]
  // items.sort();
  // items.slice(0, n);
  // items.reverse();
  return items
}


// sorted_items = sorted(items)
// sorted_n_items = sorted_items[:n]
// sorted_n_items.reverse()

// print(sorted_n_items)