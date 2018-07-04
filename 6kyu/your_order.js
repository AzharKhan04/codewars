// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

// your_order("is2 Thi1s T4est 3a")
// [1] "Thi1s is2 3a T4est"


function order(words){
    // ...
    var a=[]
    var j=1;
    var ww=words.split(' ')
    for(let i=0;i<ww.length;i++){
      a.push({p:parseInt(ww[i].replace ( /[^\d.]/g, '' )),v:ww[i]})
    }
    var s=a.sort(function(a,b){
    return a.p-b.p
    });
    
    var finalString=[];
    for(var i=0;i<s.length;i++){
   
    finalString.push(s[i]['v'])
    }
    console.log(finalString)
    return finalString.join(' ')
  }