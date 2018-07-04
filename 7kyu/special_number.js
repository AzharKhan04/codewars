function specialNumber(n){
    var a=[0,1,2,3,4,5];
    
    var no= n.toString().split('');
    var v="Special!!";
    for(var i=0;i<no.length;i++) {
    
   
     if(a.indexOf(parseInt(no[i]))<0){
       v="NOT!!"
     }  
    }
     return v
  }