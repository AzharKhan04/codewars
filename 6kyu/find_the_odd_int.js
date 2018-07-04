

// Link: https://www.codewars.com/kata/54da5a58ea159efa38000836
// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    //happy coding!  
    
    var obj={}
    A.forEach(n=>{
      if(obj[n]==undefined){
        obj[n]=1
      }else {
        obj[n]++
      }
    });
    
    console.log(obj)
    var k=Object.keys(obj)
    
    var n=0
    
    k.forEach(kk=>{
   console.log(obj[kk])
   if(obj[kk]%2!=0){
   n=kk
   }
    })
    
    console.log(n)
    return parseInt(n)
  
  }
  