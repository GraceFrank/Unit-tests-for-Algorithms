
function removeVowels(str){

	let strSplitted = str.split('');
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let output = [];
    for(let element of strSplitted){
        if (!vowel.includes(element)){
            output.push(element);
        }
    }
    return output.sort().join('');
	
	
}

module.exports = removeVowels;