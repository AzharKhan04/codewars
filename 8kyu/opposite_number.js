
// Link :https://www.codewars.com/kata/56dec885c54a926dcd001095
// Very simple, given a number, find its opposite.


function opposite(number) {
    //your code here
    if(number>0){
    return number*-1
    }else{
    return Math.abs(number)
    }
    return 0
  }