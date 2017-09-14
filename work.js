const lengths = (arrayOfStrings) => {
	for const words = "";
	console.log(arrayOfStrings.length)
	 (i = 0, i <=words.length; i++){
	console.log(arrayOfStrings.split(words).length-1)
}


const transmogrifier = (a, b, c) => {
	console.log(Math.pow((a * b),c))
	}

const toonify = (accent, sentence) => {
	
	if (accent === daffy){
		const dsentence = sentence.replace(/s/i, 'th');
		return sentence}
		//replace s with th
	else if (accent === elmer){}
		const esentence = sentence.replace(/r/i, 'w');
		return sentence }
		// replace r with w
	else {
		return sentence
	}
}
///4///

const wordReverse = (sentence) =>{

	var words = sentence.split(" ").reverse(); // Split the sentence into an array of words and reverse it
	var string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; // Concatenate each word to the output and add spaces where required
	return string;
	
}
wordReverse("Now I know what a TV dinner feels like")


///5///
const letterReverse = (string) =>{
    return string.split('').reverse().join('');
}
letterReverse("hello");


}

//6//

const longest = (string) => {
  var longestWord = string.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}

longest("The quick brown fox jumped over the lazy dog");

//7//


const repMaster 







