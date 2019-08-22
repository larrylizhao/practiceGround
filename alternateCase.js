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
