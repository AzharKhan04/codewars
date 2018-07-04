console.log(reverString("AZhar Khan Jammel Pathan"));

function reverString(str) {

    var sa= str.split(' ');
  
    var rstr='';

    for(var i=sa.length-1;i>=0;i--) {

        rstr = rstr+sa[i]+' ';

    }

    return rstr;


}


