

var a =['azhar','khan','abdoe'];

alpha_sym(a);

function alpha_sym(array) {
    var count =[];
    for(var i=0;i<array.length;i++) {

       
        var c=0;
    
    var ar=array[i].split('');
    
    
    
    for(var j=0;j<ar.length;j++) {
      
        if(ar[j]==String.fromCharCode(j+97) ||ar[j]==String.fromCharCode(j+65)  ) {
            c++;
        }
    }

    count.push(c);
    console.log(c)
    }

    console.log(count)
}





