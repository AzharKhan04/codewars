// Link : https://www.codewars.com/kata/rounded-odd/train/javascript



// Create a function that checks if given parameter is odd.

// Parameter can be any kind. If parameter is a string - convert it into number. If parameter is not number nor string, return false. If number is odd - retur true, otherwise return false.

// Negative numbers, check if its absolute value is odd. Decimal numbers, round number 'down' and check if is odd.

// Example: roundedOdd(2)--> false roundedOdd(5)--> true roundedOdd('string')--> false roundedOdd(-17)--> true roundedOdd(-7.6)--> true

function roundedOdd (n) {

    if(typeof n=='string' || typeof n=='number'){

    if(isNaN(n)){
        return false
    }

    return parseInt(n)%2!=0

    }

    else {
       return false
    }

}
