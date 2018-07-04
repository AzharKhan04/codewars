
strong(143)
function strong(n) {

    strn= n.toString().split('');
    var facts=[];
    
    for(var i=0;i<strn.length;i++) {
      facts.push(calcFact(strn[i]));
    }
    if(sumOf(facts)===n) {

        console.log('dgdg')
        return "STRONG!!!!" 

    } else {

        return "Not Strong !!" ;

    }

    
    }

    function sumOf(array) {

        var sum=0;

        for(var i=0;i<array.length;i++) {
            sum+=array[i];

        }

        return sum;

    }
    
    function calcFact(n) {
  
    if(n==1 || n==0) {
        return 1;
    } else {
        
            return n * calcFact( n - 1 ); 
    }
    
    
}