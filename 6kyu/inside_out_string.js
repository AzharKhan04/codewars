

// Link : https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5

// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'


function insideOut(x){
    var a = x.split(' ');
    
    var t=[]
    a.forEach(w=>{
      var l=w.length;
    
      if(l%2==0){
    
        t.push(w.substr(0,(l/2)).split('').reverse().join('')+w.substr(l/2,l).split('').reverse().join(''))
      
        
      }else{
      
      let a = w.substr(0,Math.floor(l/2)).split('').reverse().join('')
    
     let b= w.substr(Math.ceil(l/2)-1,Math.ceil(l/2)+1).split('')[0]
       let c= w.substr(Math.floor(l/2)+1,l).split('').reverse().join('')
    console.log(a+b+c)
      t.push(a+b+c)
      
      }
    });
    return t.join(' ')
    
    }