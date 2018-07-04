

// Link: https://www.codewars.com/kata/only-duplicates/train/javascript

// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
    var a= str.split('');
    var oa = a.slice() 
    a.sort()
    var res=[];
  
    for(var i=0;i<a.length;i++){
      if(a[i]==a[i+1]){
        res.push(a[i])
        res.push(a[i+1])
      }
    }
    
    var tt=[];
    
    oa.forEach(u=> {
        if( res.indexOf(u)>=0){
        tt.push(u)
        }
    });
  return tt.join('')
  
}