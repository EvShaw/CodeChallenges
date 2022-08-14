const today = new Date
console.log(today)

// 6 kyu code challenge

// create a function that accepts two arguments, the first, a string that contains the title and the second argument containing what should be converted (Case wise). 
//  always a string. Return as a string. If given an empty string, return an empty string.  

//create the function that accepts the arguments. 
//capture the t

//if no second arguemnt is given, captialize the first letter of each word.
//first letter of the first word will always be capitalized. 


function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : []; //capturing
    
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }
  

titleCase('THE WIND IN THE WILLOWS', 'The In')

//option 2:

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}