// Link : https://www.codewars.com/kata/only-one/train/javascript



// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.


//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false




function onlyOne() {
    var ta=[]

    var k=Object.keys(arguments);
    var bool=[]

    k.forEach(k=>{
        bool.push(arguments[k])
    });

    bool.forEach(b=>{
        b? ta.push(b):{}
    });


    if(ta.length==1){
     return true
    } else if(ta.length==0){
        return false
    } else {
        return false
    }
}