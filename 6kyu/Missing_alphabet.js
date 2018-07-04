// In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

// The function should insert only after the first occurence of each character of the input string, all the alphabet letters that:

// -are NOT in the original string
// -come after the letter of the string you are processing

// Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

// Example:

// input: "holly"

// missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

// output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

// You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).








function insertMissingLetters (str){

    var ress=''
    var done=[]
    var a= str.split('').forEach((x,indx)=>{
      if(done.indexOf(x)>=0){
      ress=ress+x
      }else{
      done.push(x)
      var s=getStr(x.toUpperCase(),str);
      ress=ress+x+s
      }
    });
    console.log(ress)
    return ress
    }
    
    function getStr(l,s){
    
    console.log(s)
    
    var A='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var a = A.split(l)
    var ss=[]
    a[1].split('').forEach(x=>{
    if(s.split('').indexOf(x.toLowerCase())>=0|| s.split('').indexOf(x.toUpperCase())>=0){
    } else {
    ss.push(x)
    }
    })
    return ss.join('')
    }