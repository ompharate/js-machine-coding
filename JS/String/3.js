// reverse words in a string

function reverseWords(sentence) {
    return sentence.trim().split(" ").reverse().join(" ")
}

console.log(reverseWords("i love backend system design"))