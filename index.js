// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++){
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }

function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  solution 1:
  Runtime: O(n^2)
  Space: O(n)

  solution 2:
  Runtime: O(n)
  Space: O(n)

*/

/* 
  Add your pseudocode here

  iterate through each number in the array
    for the current num, identify a complement that adds to the target (comp = target - num)
    iterate through rest of the array
    check if any number is our complement
    if so, return true

  if I reach the end of the array, return false

*/

/*
  Add written explanation of your solution here
  create object to track the numbers in the array we've already seen
  iterate through each seen number
  make a complement that is the target minus the inital array number
  see if any number in the object equals the complement
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([14], 14));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 4, 4, 2, 5], 8));
}

module.exports = hasTargetSum;
