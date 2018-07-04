

// Link : https://www.codewars.com/kata/523a86aa4230ebb5420001e1

// What is an anagram? Well, two words are anagrams of each other if they both contain
// the same letters. For example:


function anagrams(word, words) {
    function isAnagram(str) {
      return str.split("").sort().join("") === word.split("").sort().join("");
    }
    return words.filter(a => isAnagram(a));
  }