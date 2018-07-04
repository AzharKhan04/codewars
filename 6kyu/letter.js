function replaceCommon(string, letter) {
    // good luck
  var ss= string.split(' ').join('').split('')
  var obj={}
  
  ss.forEach(x=>{
  
    if(obj[x]==undefined){
      obj[x]=1
    }else {
      obj[x]++
    }
  })
  const objarray = Object.values(obj)
  //const objarray = Object.keys(obj).map(i => objarray[i])
  var objar=objarray.sort(function(a,b){
    return b-a
  })
  console.log(objar)
  var mr =objectKeyByValue(obj,objar[0])[0]
  var fsss=[]
  string.split('').forEach(y=>{
  //console.log(y)
  if(y==mr){
  fsss.push(letter)
  }else {
    fsss.push(y)
  }
  })
  return fsss.join('')
  }
  
  function objectKeyByValue (obj, val) {
    return Object.entries(obj).find(i => i[1] === val);
  }