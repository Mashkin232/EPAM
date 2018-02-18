let regex_g=/js/g;
let regex_m=/^T.+\.$/m;
let regex_i=/t/gi;
let regex_y=/Test/y;
regex_y.lastIndex=0;
let regex_u = new RegExp('\u{61}');
let output=[];
let input = "Test js.This text for test flags js.";
console.log(input.match(regex_g)); // "js", "js"
console.log(input.match(regex_m));
console.log(input.match(regex_i));// "T", "t", "T", "t", "t", "t", "t"
console.log(input.match(regex_y));//"Test"
regex_y.lastIndex=5;
console.log(input.match(regex_y));//null
console.log(input.match(regex_u));//a
