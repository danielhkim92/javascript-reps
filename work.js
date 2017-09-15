const lengths = (arrayOfStrings) => {
	const words = [];
	console.log(arrayOfStrings.length)
	for  (let i = 0; i < arrayOfStrings - 1; i++){
	console.log(arrayOfStrings[i].length);
	words.push(arrayOfStrings[i].length);
}
	return words;


//2//
const transmogrifier = (a, b, c) => {
	console.log(Math.pow((a * b),c))
	}


////3////


const toonify = (accent, sentence) => {
	
	if (accent === daffy){
		return sentence.replace('s', 'th');}
		//replace s with th
	else if (accent === elmer){
		return sentence.replace('r', 'w'); }
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


const repMaster  = (theInput, theFunction) => {
	let result = theFunction(theInput);
	return (result + " proves that i am the rep MASTER");
}








