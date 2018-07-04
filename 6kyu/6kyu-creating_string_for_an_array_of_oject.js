// You're given a string containing a sequence of words separated with whitespaces. Let's say it is a sequence of patterns: a name and a corresponding number - like this:

// "red 1 yellow 2 black 3 white 4"

// You want to turn it into a different string of objects you plan to work with later on - like this:

// "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"

// Doing this manually is a pain. So you've decided to write a short function that would make the computer do the job for you. Keep in mind, the pattern isn't necessarily a word and a number. Consider anything separeted by a whitespace, just don't forget: an array of objects with two elements: name and id.

// As a result you'll have a string you may just copy-paste whenever you feel like defining a list of objects - now without the need to put in names, IDs, curly brackets, colon signs, screw up everything, fail searching for a typo and begin anew. This might come in handy with large lists.


function wordsToObject(input) {
    //Write your solution here
    var arr= input.split(' ')
    var res='[';

    arr.forEach((a,ind)=>{
      ind%2==0?res=res+'{name : \''+a+'\'':res=res+', id : \''+a+'\''+'}, '
    });
  
    var rr=res.substring(0, res.length - 2);
    
    console.log(rr)
    return rr+']'

 
}