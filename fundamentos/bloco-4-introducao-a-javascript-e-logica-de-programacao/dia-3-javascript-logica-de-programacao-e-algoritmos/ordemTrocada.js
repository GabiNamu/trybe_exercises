let word = 'tryber';
let reverse = " ";

for(let i = 0; i < word.length; i += 1){
    reverse += word[word.length-1 - i]; 
}

console.log(reverse);

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);