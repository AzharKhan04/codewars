
// Link; https://www.codewars.com/kata/odd-only/train/javascript

// Given an array of integers,separate the odd intergers from the odd ones. Discard the even but keep the odd.


function oddOnly(arr1){

    return arr1.filter(n=>{
      return n%2!=0
    })
}
  