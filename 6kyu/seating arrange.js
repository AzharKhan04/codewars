// You are a teacher, and you decide to arrange the seats of the students according to their height and sex. This is the students' list:

// list=[
// {name:"John",height:170,sex:"M"},
// {name:"Tom",height:175,sex:"M"},
// {name:"Jack",height:180,sex:"M"},
// {name:"Jone",height:175,sex:"F"},
// {name:"Anne",height:175,sex:"F"},
// {name:"Alice",height:178,sex:"F"}
// ]

// "M" is male, "F" is female.
// In the classroom, each desk can sit two students:

// {desk:1,seat1:"???",seat2:"???"}
// The number of desk is start from 1. You need to arrange seats in accordance with the height from the low to the high, and each desk is arranged with a boy and a girl(seat1 sit a boy,seat2 sit a girl). If two boys or two girls are in the same height, they are sorted by their names.

// The example above can get the following results:

//  result=[
//  {desk:1,seat1:"John",seat2:"Anne"},
//  {desk:2,seat1:"Tom",seat2:"Jone"},
//  {desk:3,seat1:"Jack",seat2:"Alice"}
//  ]
// You can assume that the number of boys and girls is always the same.












function arrangeSeats(list){
    //coding and coding..
    
  var f=[]
  var m=[]
  
  list.forEach(s=>{
  s.sex=='M'?m.push(s):f.push(s)
  });
  
  var sf= f.slice().sort(function(a,b){
    if(a.height>b.height){
      return 1
    } else if(a.height<b.height){
      return -1
    } else if(a.height==b.height){
      if(a.name>b.name){
      return 1 
      } else {
      return -1
      }
    }
  })
  
  
  var sm= m.slice().sort(function(a,b){
    if(a.height>b.height){
      return 1
    } else if(a.height<b.height){
      return -1
    } else if(a.height==b.height){
      if(a.name>b.name){
      return 1 
      } else {
      return -1
      }
    }
  })
  
  var l= ((sm.length-1)+(sf.length-1))/2
  console.log(l)
  var ress=[];
    for(var i=0;i<=l;i++){
   
    ress.push({desk:i+1,seat1:sm[i]['name'],seat2:sf[i]['name']})
    }
  
  console.log(ress)
  return ress
  }