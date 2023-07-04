/**
 * @summary Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 */
function singleNumber(nums: number[]): number {
  // Real implementation is bitwise operation but i dont understand it atm and need to study it.
  // currently doing optimized map

  const map = new Map();

  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const found = map.get(nums[i]);
    if (!found) {
      map.set(nums[i], 1);
    } else {
      if (found > 1) {
        // Delete entry once 3 is found since cant be answer and cant find num again. Keeps space lower.
        map.delete(nums[i]);
      } else {
        map.set(nums[i], 2);
      }
    }
  }

  return map.entries().next().value[0];
};

function singleNumberBetterSpace(nums: number[]) {
  // Real implementation is bitwise operation but i dont understand it atm and need to study it.

  const num = nums.find((item) => {
    return nums.indexOf(item) === nums.lastIndexOf(item) ? item : null;
  });

  return num;
};

// Copy pasted to remember. Dont fully understand (this is the bitwise operation)
function singleNumberBit(nums: number[]): number {
  // Initialize seenOnce and seenTwice to 0
  let seenOnce = 0;
  let seenTwice = 0;

  // Iterate through nums
  for (let num of nums) {
      // Update using derived equations
      seenOnce = (seenOnce ^ num) & (~seenTwice);
      seenTwice = (seenTwice ^ num) & (~seenOnce);
  }

  // Return integer which appears exactly once
  return seenOnce;
};