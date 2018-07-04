// Link : https://www.codewars.com/kata/multiplication-table/train/javascript


// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]



multiplicationTable = function(size) {
    // insert code here
    var res=[]
    for(var i=1;i<=size;i++){
      var t=[]
      
      for(var j=1;j<=size;j++){
        t.push(j*i)
      }
      
      res.push(t)
      
    }
    
    return res
  }
  