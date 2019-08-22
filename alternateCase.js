/*
Question:
Write a program that, given an input sentence, alternates the case of every alphabetic character, starting with uppercase. Spaces and non-alphabetical characters should be added to the final output as is, i.e. they should not be taken into account when alternating between upper/lowercase.
Input

Your program should read lines from standard input. Each line contains a sentence. Assume all characters are ASCII.
Output

For each sentence from standard input, print to standard output the sentence such that the first character is uppercase, the next character is lowercase and so on.
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const alternateCase = () => {
	readline.question('Please input a string: ', (sentence) => {
		let sentenceArr = sentence.split('');
		let lastOne = null;
		for (let i = 0; i < sentenceArr.length; i++) {
			let ascChar = sentenceArr[i].charCodeAt();
			if(ascChar > 96 && ascChar < 123) {
				if(lastOne == null || lastOne == 'lower') {
					sentenceArr[i] = sentenceArr[i].toUpperCase();
					lastOne = 'upper';
				}
				else {
					lastOne = 'lower';	
				}
			} else if(ascChar > 64 && ascChar < 91) {
				if(lastOne == 'upper') {
					sentenceArr[i] = sentenceArr[i].toLowerCase();
					lastOne = 'lower'
				}
				else {
					lastOne = 'upper';
				}
			}
		}
		console.log('Output is: ', sentenceArr.join(''));
		alternateCase();
	})
}
/*
Alternative is:
readline.on('line', ()=>{})
*/

alternateCase();
