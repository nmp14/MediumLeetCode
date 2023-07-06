// You are given a 0-indexed string s that consists of digits from 0 to 9.
// A string t is called a semi-repetitive if there is at most one consecutive pair of the same digits inside t.
// For example, 0010, 002020, 0123, 2002, and 54944 are semi-repetitive while 00101022, and 1101234883 are not.
// Return the length of the longest semi-repetitive substring inside s.
// A substring is a contiguous non-empty sequence of characters within a string.

function longestSemiRepetitiveSubstring(s: string): number {
  // WIP never finished cuz ran into issue (function below is method to fix)
  let maxLength = 0;
  let subStringFirstIdx = 0;
  let repeatCount = 0;

  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      maxLength = Math.max(maxLength, i - subStringFirstIdx + 1);
    }
    if (s[i] === s[i + 1]) {
      if (repeatCount === 0) {
        repeatCount++;
      } else {
        repeatCount = 1;
        subStringFirstIdx = i;
      }
    }
  }

  return maxLength;
};

// Uses an array to keep track of lengths and finds max between lengths
function longestSemiRepetitiveSubstring2(s: string): number {
  let maxLength = 0;
  let lengths: number[] = [0, 1];

  const len = s.length;
  for (let i = 1; i < len; i++) {
    if (s[i] === s[i - 1]) {
      lengths.push(1);
    }
    else {
      lengths[lengths.length - 1] = lengths[lengths.length - 1] + 1;
    }
  }

  const len2 = lengths.length;
  for (let i = 1; i < len2; i++) {
    maxLength = Math.max(maxLength, lengths[i] + lengths[i - 1]);
  }

  return maxLength;
}

console.log(longestSemiRepetitiveSubstring2('52233'));
console.log(longestSemiRepetitiveSubstring2('1111111111'));
console.log(longestSemiRepetitiveSubstring2('5242'));

// 1101011010101010110101010101010101010101;
// 110101 = 6
// 110101010101 = 12
// 110101010101010101010101 = 25
// 1010101010110101010101010101010101 = 33

// 11010110101010101010;

console.log('\n --------- \n Next Function \n --------- \n');

// Sliding window
const longestSemiRepetitiveSubstring3 = (s: string): number => {
  let longest = 1;
  let left = 0;
  let repCount = 0;

  let len = s.length;
  for (let right = 1; right < len; right++) {
    if (s[right] === s[right - 1]) repCount++;

    while (repCount === 2) {
      left++;
      if (s[left-1] === s[left]) repCount--;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(longestSemiRepetitiveSubstring3('52233'));
console.log(longestSemiRepetitiveSubstring3('1111111111'));
console.log(longestSemiRepetitiveSubstring3('5242'));