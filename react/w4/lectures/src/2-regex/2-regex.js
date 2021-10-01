// sometimes you want to find parts (i.e. substrings) of a string

// example
let str = "bye";

// console.log(str.replace("b", "a")); // this prints "aye"
// but what if you have multiple 'b's not just one?
// this is where regex could come in handy

let str1 = "bbbbbbbye";
// console.log(str1.replace("b", "a")); // this prints "abbbbbbye"

// regex syntax: /pattern/optionalFlags

// basic example
let regex = /b/g;
let str2 = "bbbbbbbye";
// console.log(str2.replace(regex, "a")); // this still prints "aaaaaaaye"

// global and case flag example
let regex2 = /[ebyc]/gi;
let str3 = "BBbBbBbye";
// console.log(str3.replace(regex2, "a")); // this still prints "aaaaaaaaa"

let regex3 = /^\w{,6}/;
let str4 = "123456789";
console.log(regex3.test(str4));

// resources
// https://www.w3schools.com/js/js_regexp.asp
// https://www.rexegg.com/regex-quickstart.html
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
