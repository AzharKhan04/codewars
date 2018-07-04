
// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.


function validPass(password){

var a=  /^[A-Za-z0-9]{3,20}$/.test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
          
          if(a){
          return 'VALID'
          } 
          return 'INVALID'

}