// Given an array of words and a target compound word, your objective is to find the two words which combine into the target word, returning both words in the order they appear in the array, and their respective indices in the order they combine to form the target word. Words in the array you are given may repeat, but there will only be one unique pair that makes the target compound word. If there is no match found, return null/nil/None.

// Note: Some arrays will be very long and may include duplicates, so keep an eye on efficiency.

// Examples:

// fn(['super','bow','bowl','tar','get','book','let'], "superbowl")      =>   ['super','bowl',   [0,2]]
// fn(['bow','crystal','organic','ally','rain','line'], "crystalline")   =>   ['crystal','line', [1,5]]
// fn(['bow','crystal','organic','ally','rain','line'], "rainbow")       =>   ['bow','rain',     [4,0]]
// fn(['bow','crystal','organic','ally','rain','line'], "organically")   =>   ['organic','ally', [2,3]]
// fn(['top','main','tree','ally','fin','line'], "mainline")             =>   ['main','line',    [1,5]]
// fn(['top','main','tree','ally','fin','line'], "treetop")              =>   ['top','tree',     [2,0]]


var res= compoundMatch(['khan','kha','azh','Azhar','asd','han'],"Azharkhan") 

function compoundMatch(words, target) {

    var first='';
    var sec='';

     var a=1
     var b="1"
     
   

        for(var i=0;i<words.length;i++) {
            var c=0;
          for(j=0;j<words.length;j++) {

            if(words[i]+words[c+j]==target) {
            first=words[i];
            sec=words[c+j]
            c++;
            break;
            } 
            
          }
        }
        if(words.indexOf(first)<0) {
         return null;
        }
        if(words.indexOf(first)>words.indexOf(sec)) {
         return [sec,first,[words.indexOf(first),words.indexOf(sec)]]
        }
        return [first,sec,[words.indexOf(first),words.indexOf(sec)]]
    }