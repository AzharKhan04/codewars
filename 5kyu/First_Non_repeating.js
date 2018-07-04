// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.



function firstNonRepeatingLetter(s) {
    var a= s.split('')
    for(var i=0;i<a.length;i++){
        a[i]=a[i].toUpperCase();
    }
    var indx;
    var b=a.join('') 
    for(var i=0;i<a.length;i++){
        if(b.indexOf(a[i])==b.lastIndexOf(a[i])){
            indx=i
        break;
        }
    }
    

    if(s.length==1){
        return s.charAt(0)
    }
    if(indx){
         return s.charAt(indx)
    }

    return ''
    
}