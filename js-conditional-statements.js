// Syntax:
// if (condition) {
//     //block of code to be executed if the condition is true//
// };

//**************** The if Statement *****************/
{
  const hour = 10;
  let greeting = "Happy Coding";

  if (hour <= 12) {
    greeting = "Good Morning";
  } // if এর পাশের ব্রাকেটে (hour <= 12), এটা হলো কন্ডিশন, আর কার্লি ব্রেসের মধ্যে থাকা {greeting = "Good Morning";} হলো কোড ব্লক। এর মানের হলো if এর পাশের কন্ডিশন (hour <= 12) যদি true হয় তাহলে কোড ব্লকে থাকা greeting ভ্যারিয়েবলের মান হয়ে যাবে "Good Morning"।

  //এখানে কন্ডিশন হলো hour যদি ১২ থেকে ছোট বা সমান হয় তাহলে greeting হবে "Good Morning", অন্যথায় greeting এর মান হবে undefined.

  console.log(greeting);
}

//**************** The else Statement *****************/

//Syntax
// if (condition) {
//     //block of code to be executed if the condition is true//
// } else {
//     //block of code to be executed if the condition is false//
// }
{
  const hour = 10;
  let greeting = "Hello World";

  if (hour >= 12) {
    greeting = "Good Morning";
  } else {
    greeting = "Good Evening";
  }

  //এখানে কন্ডিশন হলো hour যদি ১২ থেকে বড় বা সমান হয় তাহলে greeting হবে "Good Morning", অন্যথায় greeting এর মান হবে else এর মধ্যে থাকা "Good Evening"। এখানে hour যেহেতু ১২ থেকে ছোট তাই কন্ডিশনটা false, এজন্য else এর ব্লকের "Good Evening" রিটার্ন করবে কনসোলে।

  console.log(greeting);
}

//**************** The else if Statement *****************/

//Syntax
// if (condition) {
//     //block of code to be executed if the condition is true//
// } else if (condition2) {
//     //block of code to be executed if the condition is false//
// } else if (condition3){
//   //block of code to be executed if the condition is false//
// } else {
//     //block of code to be executed if the condition is false//
// }
{
  const hour = 16;
  let greeting;

  if (hour <= 4 && hour <= 8) {
    greeting = "Good Morning";
  } else if (hour > 16) {
    greeting = "Good Day";
  } else if (hour >= 12) {
    greeting = "Good Vibes Only";
  } else {
    greeting = "Good Night";
  }

  console.log(greeting);
}


//**************** The switch Statement *****************/

//switch statement লেখার নিয়মঃ
//Syntax
// {
//   switch (expression) {
//     case x:
//       //code block
//       break;
//     case y:
//       //code block
//       break;
//     default:
//       //code block
//   } // এখানে switch এর পাশে ব্রাকেটে () এক্সপ্রেশন অথবা ভ্যারিয়েবল নাম লিখতে হবে,আর কার্লি ব্রেসের ভেতরে case লিখে x এর জায়গায় এক্সপ্রেশনের বা ভ্যারিয়েবলের বিভিন্ন সম্ভ্যব্য ভ্যালু (যেমন 1, 2 ,3 ,4 ইত্যাদি লিখতে হবে, case 0, case 1, case 2 এভাবে), case x লিখে কোলন(:) দিয়ে কোড লাইন লিখতে হবে (যেমন abc = "Hello World"). কনসোল করলে সুইচ এর এক্সপ্রেশনের ভ্যালুটা যেই কেসের সাথে ম্যাচ করবে সেই কেসের কোড এক্সিকিউট(রান) হবে।
// }

//উদাহরনঃ
{
  let day = 6;
  let myDay;

  switch (day) {
    case 0:
      myDay = 'Saturday';
      break;

    case 1:
      myDay = 'Sunday';
      break;
      
    case 2:
      myDay = 'Monday';
      break;

    case 3:
      myDay = 'Tuesday';
      break;

    case 4:
      myDay = 'Wednesday';
      break;
      
    case 5:
      myDay = 'Thursday';
      break;

    case 6:
      myDay = 'Friday';
      break;

      default:
        myDay = 'Weekend';
  }
  
  // এখানে switch এর পাশে ব্রাকেটে () এক্সপ্রেশন অথবা ভ্যারিয়েবল নাম লিখতে হবে,আর কার্লি ব্রেসের ভেতরে case লিখে x এর জায়গায় এক্সপ্রেশনের বা ভ্যারিয়েবলের বিভিন্ন সম্ভ্যব্য ভ্যালু (যেমন 1, 2 ,3 ,4 ইত্যাদি লিখতে হবে, case 0, case 1, case 2 এভাবে), case x লিখে কোলন(:) দিয়ে কোড লাইন লিখতে হবে (যেমন myDay = "Friday"). কনসোল করলে সুইচ এর এক্সপ্রেশনের ভ্যালুটা যেই কেসের সাথে ম্যাচ করবে সেই কেসের কোড এক্সিকিউট(রান) হবে।

  //এখানে switch এর পাশে ব্রাকেটে day এর ভ্যালু 6, যা case 6 এর সাথে ম্যাচ করেছে, ফলে কনসোলে রিটার্ন করবে myDay এর মান 'Friday';

  //প্রতিটা case লেখার পর break দিতে হবে, তাহলে যেই কেস ম্যাচ করবে সেই কেসের পর আর কোনো কেস এক্সিকিউট করবে না, সেই কেসের সাথে ম্যাচ করবে শুধু সেটাই এক্সিকিউট করবে

  // কোনো কেসের সাথে ম্যাচ না করলে myDay এর মান undefined দেখাবে

  // তবে সকল কেসের একদম নিচে একটা default কেস থাকলে তখন কোনো কেসের সাথে ম্যাচ না করলে myDay এর মান default কেসের কোড ব্লকে থাকা মান দেখাবে। defaultএর শেষে break দেওয়া লাগে না।

  console.log(myDay);
}

//Another "switch statement" example
{
  let a = new Date().getDay();
  let text;

  switch (a) {
    case 0:
      text = "Today is Sunday"
      break;

    case 4:
      text = "Today is Thursday"
      break;

    default:
      text = "Weekend is Coming"
  }

  console.log(text);
}
