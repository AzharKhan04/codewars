

var s1="abcde"
var s2="2db2a2ec"

console.log(addedChar(s1,s2))
function addedChar(s1, s2){
    
    var ar=[]; 
 for(var i=0;i<s2.length;i++) {
     if(!s1.includes(s2[i])) {
       ar.push(s2[i]);

     }
 }

 console.log(ar)
  }