// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
    var a=[]
    for(var i=number-1;i>0;i--){
      if(i%5==0 || i%3==0){
      a.push(i)
      }
    }
    console.log(a)
    if(a.length){
    
    var r=a.reduce(function(a,b){
    return a+b
    })
    }else {
    return 0
    }
    console.log(r)
    return r
  }