// Check if two strings are anagrams.

function areAnagram(s,t) {
    if (s.length != t.length) {
        return false;
    }

    let freq = {};

    for(let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1
    }

    for (let ch of t) {
        if(!freq[ch]) return false;
        freq[ch]--;
    }

    return true;

}

// Example

console.log(areAnagram("listen", "silent"))
console.log(areAnagram("hello", "billion"))