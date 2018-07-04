// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.









function high(x){
    var points = [null]
    for(var i=97;i<=122;i++){
      points.push(String.fromCharCode(i))
    }
    var res=''
    var c=0;
    x.split(' ').forEach(w=>{
    var tmpc=0
      w.split('').forEach(l=>{
        tmpc=tmpc+points.indexOf(l)
      })
      if(tmpc>c){
        res=w;
        c=tmpc
      } 
    })
    console.log(res)
    console.log(c)
    return res
    
    }