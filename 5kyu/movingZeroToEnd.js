var moveZeros = function (arr) {
    // TODO: Program me
    
    var noZero=[]
    var z=[]
    arr.forEach(el=>{
      el===0?z.push(el):noZero.push(el)
    })
    
    return noZero.concat(z)
  }