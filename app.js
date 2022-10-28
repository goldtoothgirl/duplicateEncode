// The goal of this exercise is to convert a string to a new string where 
// each character in the new string is "(" if that character appears only once 
// in the original string, or ")" if that character appears more than once in 
// the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// From: 
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

// Hint: map through array checking if indexof == lastindexof and return the appropriate character





function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
console.log(duplicateEncode('recede'))


// function duplicateEncode(word){
   
//     var unique='';
//     word = word.toLowerCase();
//     for(var i=0; i<word.length; i++){
//         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//             unique += '(';
//         }
//         else{
//             unique += ')';
//         }
//     }
//     return unique;

// }

// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
//   }
