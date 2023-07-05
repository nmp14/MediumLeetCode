// Note: Solve myself no help. 90% faster. 50% space.

/**
 * Given a binary array nums, you should delete one element from it.
 * Return the size of the longest non-empty subarray containing only 1's in the resulting array. 
 * Return 0 if there is no such subarray.
 * 
 */
const longestSubarray = (nums: number[]): number => {
  const len = nums.length;
  if (len <= 1) return 0;

  const zeros = []
  // Find index's with 0s.
  // Find difference between indexes (or beginning/end of array).
  // If 0's existed, delete one resulting in largest sum of the differences
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      zeros.push(i);
    }
  }

  if (zeros.length === 0) {
    // No zeros so all ones. Guarenteed to have length > 1 since first check.
    return len - 1;
  }

  // [2, 5, 10, 12, 13]  len = 16 Answer should be 6
  // 2 2 4 1 0 2 (delete the zero between 2 and 4 = 6)
  const lengths = [];
  const zeroCount = zeros.length;

  lengths.push(zeros[0]);

  for (let i = 1; i < zeroCount; i++) {
    lengths.push(zeros[i] - zeros[i-1] - 1);
  }

  lengths.push(len - zeros[zeroCount - 1] - 1);

  let max = 0;
  for (let i = 0; i < lengths.length - 1; i++) {
    const sum = lengths[i] + lengths[i + 1];
    if (sum > max) max = sum;
  }

  return max;
}

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));