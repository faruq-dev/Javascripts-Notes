 let a = Boolean(15>5); //এখানে Boolen হলো Constructor
 console.log(a);

 //বুলিয়ানের ব্র্যাকেটে Comparision অপারেটর ব্যাতিত সিঙ্গেল যেকোন ভ্যালু থাকলেই সেটা True,যেমনঃ
 let b = Boolean(100); //True
 console.log(b);

 let c = Boolean("100"); //True
 console.log(c);

 let x = Boolean("false"); //True
 console.log(x);

 let d = Boolean(); //False, কারন এখানে বুলিয়ানের ভেতর কোনো ভ্যালু নেই
 console.log(d);

 let e = Boolean(""); //False, কারন এখানে বুলিয়ানের String এর ভেতর কোনো ভ্যালু নেই
 console.log(e);

 //***বুলিয়ানের ব্রাকেটে null বা undefined বা 0 বা NaN দিলে false রিটার্ন করবে