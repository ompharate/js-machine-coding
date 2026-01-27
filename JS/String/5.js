function stringCompress(s) {

    let result = "";
    let i = 0;

    while(i<s.length) {
        let j = i;

        while(j<s.length && s[i] == s[j]){
            j++;
        }

        result+= s[i] + (j-i)
        i=j;

    }

    return result;

}

console.log(stringCompress("aaabbbcccaaa")); // "a3b3c3a3"