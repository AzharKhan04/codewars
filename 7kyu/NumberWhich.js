
// Link: https://www.codewars.com/kata/560a4962c0cc5c2a16000068


// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax that fulfill this property but with different exponents as a power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).



function eqSumPowdig(hMax, exp) {
    // Your code here
    var n=[]
    for(var i=153;i<=hMax;i++){
     var c=0
     i.toString().split('').forEach(b=>{
      c+=Math.pow(parseInt(b),exp)
     })
     if(c==i){
     n.push(i)
     }
    }
    return n;
}