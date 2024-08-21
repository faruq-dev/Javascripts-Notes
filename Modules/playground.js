//Named import: (নাম ধরে ধরে ইমপোর্ট)

import { numberA, numberB } from "./function-bank.js";
console.log(numberA, numberB);//একই নামে ইমপোর্ট করার জন্য এই নিয়ম

import { numberA as num1, numberB as num2 } from "./function-bank.js";
console.log(num1+num2); //ভিন্ন নামে ইম্পোর্ট করার জন্য এই নিয়ম, যেই ভ্যারিয়েবলটা ইমপোর্ট করবো সেটার নাম লিখে as দিয়ে যেই নামে ইমপোর্ট করব সেই নাম দিতে হবে, এখানে numberA as num1 মান্যা number ভ্যারিয়েবল টাকে num1 নামে ইমপোর্ট করলাম। এখন এই পেজে number এর বদলে num1 ভ্যারিয়েবল দিয়ে কাজ হবে।



import { sum } from "./function-bank.js";
const functionSum = sum(12,12);
console.log(functionSum);

const functionSum2 = sum(10, 50);
console.log(functionSum2);

//Default Import (বাই ডিফল্ট এই ফাইলটাকে ইমপোর্ট করবে)
import addition from "./function-bank.js";
const summation = addition(9,6);
console.log(summation);

//ডিফল্ট ইমপোর্ট করার সময় {} কার্লি ব্রেস লাগে না