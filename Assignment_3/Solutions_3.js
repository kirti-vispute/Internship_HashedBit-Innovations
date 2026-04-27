// Q1) Remove states starting with vowels
const states1 = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Assam"];
 
const res1 = states1.filter(state => !"aeiouAEIOU".includes(state[0]));
console.log("Q1:", res1);
 
 
// Q2) Reverse words
let str1 = "I love my India";
let res2 = str1.split(" ").reverse().join(" ");
console.log("Q2:", res2);
 
 
// Q3) INDIA -> INDONESIA using splice
let strArr1 = "INDIA".split("");
strArr1.splice(3, 0, "O", "N", "E", "S");
console.log("Q3:", strArr1.join(""));
 
 
// Q4) Count vowels and consonants
let text1 = "This is a sample string for counting";
let vowels1 = "aeiouAEIOU";
let v1 = 0, c1 = 0;
 
for (let ch of text1) {
    if (/[a-zA-Z]/.test(ch)) {
        vowels1.includes(ch) ? v1++ : c1++;
    }
}
console.log("Q4: Vowels =", v1, "Consonants =", c1);
 
 
// Q5) Replace wrong word
function correctfn1(str, wrong, correct) {
    return str.replace(wrong, correct);
}
console.log("Q5:", correctfn1("He go to school", "go", "goes"));
 
 
// Q6) Numbers > 5
let arr1 = [1,2,3,9,10,7,5,4,3];
console.log("Q6:", arr1.filter(n => n > 5));
 
 
// Q7) Average using map + reduce
const students1 = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
 
const res7 = students1.map(s => {
    let total = s.scores.reduce((a, b) => a + b, 0);
    return { name: s.name, average: total / s.scores.length };
});
console.log("Q7:", res7);
 
 
// Q8) Repeated digit sum
function digitSum1(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return num;
}
console.log("Q8:", digitSum1(456));
 
 
// Q9) Count words
function countWords1(str) {
    return str.trim().split(/\s+/).length;
}
console.log("Q9:", countWords1("This is a test paragraph"));
 
 
// Q10) Reverse string
function reverse1(str) {
    return str.split('').reverse().join('');
}
console.log("Q10:", reverse1("Hello"));
 
 
// Q11) Average from object
const data1 = {
    student1: {subject1:44, subject2:56, subject3:87, subject4:97, subject5:37},
    student2: {subject1:44, subject2:56, subject3:87, subject4:97, subject5:37},
    student3: {subject1:44, subject2:56, subject3:87, subject4:97, subject5:37}
};
 
const res11 = Object.keys(data1).map(key => {
    let vals = Object.values(data1[key]);
    let avg = vals.reduce((a,b)=>a+b,0) / vals.length;
    return { [key]: { average: Math.floor(avg) } };
});
console.log("Q11:", res11);
