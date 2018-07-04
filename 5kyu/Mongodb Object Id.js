
// So let us implement the following helper which will have 2 methods:

// one which verifies that the string is a valid Mongo ID string, and

// one which finds the timestamp from a MongoID string

// Your solution have to work as follows:

// The verification method will return true if an element provided is a valid Mongo string and false otherwise:

// Mongo.isValid('507f1f77bcf86cd799439011') // true
// Mongo.isValid('507f1f77bcf86cz799439011') // false
// Mongo.isValid('507f1f77bcf86cd79943901') // false
// Mongo.isValid('111111111111111111111111') // true
// Mongo.isValid(111111111111111111111111) // false
// Mongo.isValid('507f1f77bcf86cD799439011') // false (we arbitrarily only allow lowercase letters)


var Mongo = {
    isValid: function(s){
      return /^[a-f\d]{24}$/.test(s);
    },
    getTimestamp: function(s){
      if( /^[a-f\d]{24}$/.test(s)){
       return new Date(parseInt(s.substr(0, 8), 16) * 1000);
      }
    
      return false
     
    }
  }