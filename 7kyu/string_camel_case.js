

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str){

    var arr=str.split(/_|-/);
    var ar=[];
    for(var i=0;i<arr.length;i++) {
      if(i==0) {
      
      if( arr[i].charAt(0) ===arr[i].charAt(0).toUpperCase() ) {
         var w=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        ar.push(w)
      } else {
       ar.push(arr[i])
      }
      } else {
      var w=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
      ar.push(w)
      }
    }
    
    
    return ar.join('')
    }