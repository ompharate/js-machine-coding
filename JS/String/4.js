// longest substring without repeating character

function lengthOfLongestSubstring(s) {
  let map = new Map();   // char -> last index
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if(map.has(ch) && map.get(ch) >= left) {
        left = map.get(ch) + 1
    }

    map.set(ch,right);
    maxLen = Math.max(maxLen,right-left+1)

}
    return maxLen;

}


console.log(lengthOfLongestSubstring("abcabcbb"))