
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// For example:
// stringTransformer('Example Input')/string_transformer("Example Input") (depending on the language you are completing the Kata in) should return 'iNPUT eXAMPLE'

// You may assume the input only contain English alphabet and spaces.



function stringTransformer(str) {
    // Your code here
   var a=str.split(' ')
   var b=[]
   for(var i=0;i<a.length;i++){
   var str=''
    a[i].split('').forEach((x)=>{
      if(x==x.toUpperCase()){
       str=str+x.toLowerCase()
      } else if(x==x.toLowerCase()){
      str=str+x.toUpperCase()
      }
    });
    b.push(str)
   }
   var aa=b.reverse()
   return aa.join(' ')
  }