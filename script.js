// function myFunction() {
//   document.getElementById("demo").innerHTML = "paragraph changed";
// }

function myFunction() {
  // window.alert(10 + 10);
  //   console.log(5 + 2);
  let x, y, z, c;
  x = 5;
  y = 10;
  z = 15;
  c = x + y + z;
  console.log(c);
}

// Statement
let x, y, z, c; //This is a statement
x = 5; //This is a statement
y = 10; //This is a sstatement
z = 15; //
c = x + y + z;
console.log(c + 10);

x = 10;
y = 12;
zd = 12;
console.log(x + y + zd);

let s = 5 + (40 + 5) * 5;
console.log(s);

var firstName = "Hamas";
var age = 30;
var city = "Gaza";

console.log("My name is " + firstName);
console.log("I am " + age + " years old");
console.log("I live in " + city);

let g = 15;
g *= 5;
console.log(g);

{
  let x = 190;
  let y = 150;
  console.log(x != y);
}

//Arithmetic Operators
{
  const a = 125;
  const b = 12;

  const total = a % b;
  console.log(total);
}

//Incrementing
{
  let x = 10;
  x++;
  z = x;
  console.log(z);
}

//Decrementing
{
  let x = 15;
  x--;
  z = x;
  console.log(z);
}

//Exponentiation (Power ber korar method)
{
  let a = 5;
  let b = Math.pow(a, 2);
  console.log(b);
}
{
  let a = 5;
  let b = a ** 2;
  console.log(b);
}

{
  let x = 10;
  let y = 3;
  x **= y;
  console.log(x);
}

//Comparision Operator
{
  const a = 6;
  const b = 6;
  console.log(a == b); // '==='  <<<এই সাইন ডাটা টাইপ সহ ইকুয়েল কিনা চেক করে
}

{
  const a = 6;
  const b = 6;
  console.log(a !== b); // '!=' <<This is a "not equal" sign
}

//Prefix and Postfix
{
  let x = 10;
  let y = 12;

  console.log(++x); //Prefix

  console.log(y++); //Postfix
  console.log(y);
}

//Data Type

//Data type - Number
{
  let length = 20;
  let height = 10;
  console.log(typeof length);
  console.log(typeof height);
}

//Data type - Boolean
{
  let x = true;
  let y = false;
  console.log(typeof x, typeof y);
}

//Data type - String
{
  let city = "Dhaka";
  let Country = "Bangladesh";
  console.log(typeof city);
}

//Data type - Object
{
  const userInfo = {
    firstName: "Abdur",
    lastName: "Rehman",
  };
  console.log(typeof userInfo);
}

///Data type - Array Object
{
  const smartPhone = ["Apple", "Samsung", "Xiaomi"];
  console.log(typeof smartPhone);
}

//Data type - Date Object
{
  const date = new Date("2024-04-23");
  console.log(typeof date);
}

//**********javaScript Type Conversion********** */

//String to Number
{
  const a = "20";
  const b = Number(a);
  console.log(b);
  console.log(typeof b);
}

//Number to String
{
  let b = 15;
  let c = String(b);
  console.log(c);
  console.log(typeof c);
}

//parseFloat
{
  const a = "12.3658";
  const b = parseFloat(a);

  console.log(b);
  console.log(typeof b);
}

//parseInt
{
  const a = "12.3658"; //parseInt দিলে স্ট্রিং এর ভেতরের শুধুমাত্র দশমিকের আগের সংখ্যা গুলো নিবে, যেমন ১২.৩৬৫৮ থেকে শুধু ১২ রিটার্ন করবে
  const b = parseInt(a);

  console.log(b);
}

//Boolean to Number
{
  let a = true;
  let b = Number(a);
  console.log(b);
  console.log(typeof b);
}

//Boolean to String
{
  let a = true;
  let b = String(a);
  console.log(b);
  console.log(typeof b);
}

//Unary Operator
{
  let x = "25";
  let b = + x; //স্ট্রিং থেকে নাম্বারে কনভার্ট করতে চাইলে স্ট্রিং এর আগে একটা (+) চিহ্ন দিলেই সেটা স্ট্রিং থেকে নাম্বার হয়ে যাবে
             //তবে স্ট্রিং এর ভেতরে যদি নাম্বারের বদলে "Jony" এমন ভ্যালু থাকে তাহলে সেটা NaN হবে

  console.log(x);
  console.log(b);
  console.log(typeof b);
}

//Converting Dates to Numbers
{
  let a = new Date('2024-04-25');
  let b = Number(a);
  console.log(b);
  console.log(typeof b);
}

//Converting Dates to String
{
  let a = new Date('2024-04-25');
  let b = String(a);
  console.log(b);
  console.log(typeof b);
}


// ******** Declaring a Object *********** //
{
  const mobile = {
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 115000
  }
  console.log(mobile);
  console.log(typeof mobile);
  console.log(mobile.brand); //Dot notation (কোনো অবজেক্টের নির্দিষ্ট একটা প্রপার্টিকে কনসোল করার জন্য এটা ব্যবহার হয়)
  console.log(mobile['model']); //Bracket notation (এটাও কোনো অবজেক্টের নির্দিষ্ট একটা প্রপার্টিকে কনসোল করার জন্য এটা ব্যবহার হয়)

  const mobilePrice = "price";
  console.log(mobile[mobilePrice]); // Bracket notation with variable
}


//Object Method
{
  const person = {
    firstName: "Muhammad",
    lastName: "Ali",
    age: 30,
    fullName: function(){
      return this.firstName + " " + this.lastName
    } //fullName is a Object Method. মেথড হলো একটা ফাংশনকে প্রপার্টি আকারে স্টোর করে রাখা (অবজেক্টের ভেতরে)
  }

  console.log(person.fullName());

  const getFullName = person.fullName();
  console.log("His name is "+ getFullName);
}

// ***************
//***********

// ******** javaScript Strings *********** //
{
  const a = "Hello World!"
  console.log(a.length); //.length মেথড দিয়ে কোটেশনের ভেতর কতগুলা স্ট্রিং বা letter আছে না কাউন্ট করা যায়

  const b = "Good vibes\nonly" // (\n) দিয়ে স্ট্রিং এর ভেতর নতুন লাইন তৈরী করা যায়
  console.log(b);
}

//String Methods ********
{
  const a = "Hello World!"
  console.log(a.length); // 1- .length method

  console.log(a.charAt(0)); // 2- .charAt method এটা স্ট্রিং এর ভেতরের নির্দিষ্ট একটি লেটারকে কনসোল করার জন্য ব্যবহুত হয়। এখানে Hello World এর 0 নাম্বার অক্ষর হচ্ছে H, তাই H প্রিন্ট হয়েছে। জাভাস্ক্রিপ্টে ইনডেক্সিং গননা শুরু হয় 0 থেকে (০, ১, ২, ৩ এভাবে)

  console.log(a[1]); // 3- এই থার্ড ব্র্যাকেট '[ ]' দিয়ে স্ট্রিং মেথডকে বলা হয় ব্র্যাকেট নোটেশন। ব্র্যাকেটের ভেতরে যত নাম্বার ইনডেক্স দেওয়া হবে স্ট্রিং এর তত নাম্বার শব্দটাকেই কনসোলে প্রিন্ট করবে। যদি এমন কোনো নাম্বার দেওয়া হয় যা স্ট্রিং এ নেই তাহলে  Undefined আসবে।
}

/*

Extracting String Parts-

স্ট্রিং এর যেকোনো একটি পার্টকে কেটে বের করার জন্য ৩টি মেথড রয়েছে।
4- Slice (start, end)
5- substring (start, end)
6- substr (start, length)
*/

//4- Slice (start, end)
{
  const fruit = 'Apple, Banana, Orange, Mango';
  const fruitSlice = fruit.slice(7,21); //এখানে ৭ এর পরে যযদি ২১ না দেই তাহলে ৭ এর পরে যতগুলা স্ট্রিং লেটার আছে সব গুলা প্রিন্ট করবে
  console.log(fruitSlice);

}
//5- substring (start, end)
{
  const fruit = 'Apple, Banana, Orange, Mango';
  const fruitPart = fruit.substring(-2,5) //substring ও slice প্রায় একই, কিন্ত substring এর start ও end ভ্যালু ০ এর থেকে কম অর্থাত মাইনাস ফিগার হলেও সে0 থেকেই কাউন্ট করবে। এখানে স্টার্ট ভ্যালু -2, কিন্ত কাউন্ট হচ্ছে 0 থেকে

  console.log(fruitPart);
}

//6- substr (start, length) 
//এটাও slice এর মতই কিন্ত এর প্রথম ভ্যালু টা থেকে কাউন্ট শুরু করবে, এবং ২য় যে ভ্যালুটা থাকবে ততটা স্ট্রিং লেটার (length) কাউন্ট করবে। এই মেথড এখন আর ইউজ হয়না। ******
{
  let a = 'Apple, Banana, Orange, Mango';
  console.log(a.substr(23, 5)); //এখানে ২৩ নং ইনডেক্স থেকে কাউন্ট শুরু করলো এবং ৫টা অক্ষর পর্যন্ত (length) কনসোলে নিলো
}


/*
toUpperCase এবং toLowerCase
স্ট্রিং এর ভেতরের সকল লেখাকে বড় হাতে বা ছোট হাতে করার জন্য এই দুইটা মেথড ইউজ করা হয়
*/

//7- toUpperCase
{
  const a = 'Hello World!'
  console.log(a.toUpperCase()); //পুরো স্ট্রিংকে বড় হাতের করবে
}

//8- toLowerCase
{
  const a = 'Hello World!'
  console.log(a.toLowerCase()); //পুরো স্ট্রিংকে ছোট হাতের করবে
}

//9- String Concat (দুই বা ততোধিক স্ট্রিং জোড়া লাগানো)
{
  let a = 'Hello';
  let b = 'World!';
  let c = a.concat(' ', b);
  console.log(c);
}

//10- String Split (স্ট্রিং কে অ্যারে তে কনভার্ট করার জন্য এই মেথড ইউজ করা হয়)
{
  let a = 'Hello World!';
  let myArray = a.split(' ');
  console.log(myArray);
}


// ***************
//***********
// ************* javaScript Strings Search Method *********** //

// 1- indexOf method
{
  let text = 'We want good vibes only and "Free Palestine"';
  let index = text.indexOf("good"); //স্ট্রিং এর ভেতরে যতগুলা শব্দ আছে তারমধ্যে একটা নির্দিষ্ট শব্দ কত নাম্বার ইনডেক্স পজিশন থেকে শুরু হয়েছে তা বের করার জন্য indexOf method ব্যবহার করা হয়। যে শব্দটার ইনডেক্স পজিশন বের করতে হবে তাকে indexOf এর পরে ব্র্যাকেট () এর মধ্যে রাখতে হবে ডাবল কোট সহ। চাইলে ব্র্যাকেটের ভেতরে কোটেশনের পর কমা দিয়ে একটা ইনডেক্স নাম্বার বলে দেওয়া যায় এভাবে text.indexOf("good", 15)। তাহলে ওই ইনডেক্স নাম্বার থেকে সার্চ করা শুরু করবে। একে সেকেন্ড প্যারামিটার বলে।
  console.log(index);
}

// 2- lastIndexOf method
{
  let text = 'We want good vibes only and "Free good Palestine"';
  let index = text.lastIndexOf("good"); // এই মেথডও indexOf এর মতই তবে পার্থক্য হলো এটি যে শব্দটাকে সার্চ করা হবে সেটা স্ট্রিং এর ভেতর সর্বশেষ যেখানে রিপিট হয়েছে সেখান থেকে ইনডেক্স কাউন্ট করবে। ** এই উভয় মেথডেই সার্চ করা শব্দটাকে স্ট্রিং এর মধ্যে না পেলে -1 দেখাবে কনসোলে।
  console.log(index);
}

//3- Search Method
{
  let a = 'We want free free palestine';
  let searchedValue = a.search('free'); //এটা প্রায় indexOf মেথডের মতই  কাজ করে, তবে সামান্য পার্থক্য রয়েছে, যেমন search মেথডে সেকেন্ড প্যারামিটার কাজ করেনা
  console.log(searchedValue);
}

// String Match Method
{
  let x = 'The rain is SPAIN mainly stays in the plain';
  let matchValue = x.match('ain');
  console.log(matchValue);
}


// ***************
//***********

// ******** javaScript Template Strings (Back-tick syntax) *********** //

//Multiline Strings
{
  let a = `Bangladesh is a country with heavy rainfall
  and high humidity` //Miltiline string is not possible with double quote("") or single quote('')
}

//Interpolation
//It is the method of writing variable and expressions inside a string. 
{
  let name = 'Omar'
  let age = '28'
  let text = `My name is ${name} and I am ${age} years old`; //This is called interpolation
  console.log(text);
}

//Another example of interpolation
{
  let price = 10;
  let VAT = .25;
  let total = `${(price*(1+VAT)).toFixed(2)}`; // .toFixed দিয়ে দশমিকের পর কতগুলা শুন্য থাকবে তা বলে দেওয়া যায়
  console.log(total);
}

