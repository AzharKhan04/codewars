// Link :https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript


// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]




function digitize(n) {
    //code here
    var a=[];
    var array=n.toString().split(''); 
    for(let i=array.length-1;i>=0;i--){
      a.push(parseInt(array[i]))
    }
    return a;

  }




