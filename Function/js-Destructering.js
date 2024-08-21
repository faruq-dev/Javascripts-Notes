//Destructuring (ডি-স্ট্রাকচারিং) হলো জাভাস্ক্রিপ্টের একটা পাওয়ারফুল ফিচার যার মাধ্যমে বিভিন্ন অ্যারে থেকে বা বিভিন্ন অবজেক্টের প্রপার্টি থেকে ভ্যালু গুলোকে বের করে আনা যায় এবং সেগুলোকে বিভিন্ন ভ্যারিয়েবলে assign করা যায় খুবই স্মার্ট এবং রিডেবল ভাবে।


//নিচে numbers নামে একটা অ্যারে নিলাম, এখন এখান থেকে প্রতিটা নাম্বারকে বের করে আলাদা ভেরিয়েবলে স্টোর করার পুরাতন মেথডটা হলো নিম্নরূপঃ
const numbers = [5, 8, 7, 9];

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
const d = numbers[3];
// এখানে আমরা দেখলাম numbers অ্যারে থেকে প্রতিটা নাম্বার কে বের করার জন্য a,b,c,d দিয়ে ৪টা নতুন ভ্যারিয়েবল নেওয়া লাগলো, আবার সেই ভ্যারিয়েবল গুলোর ভেতরে numbers[] দিয়ে ব্রাকেট নোটেশনের ভেতর অ্যারের ইনডেক্স নাম্বার [0,1,2,3] গুলো দিয়ে ভ্যালু এসাইন করা লাগলো।
console.log(a);
console.log(b);
console.log(c);
console.log(d);



//কিন্ত Destructuring এর মাধ্যমে খুব সহজেই আমরা ১ লাইনের কোডেই অ্যারে থেকে নাম্বার গুলোকে বের করে নিয়ে বিভিন্ন ভ্যারিয়েবলে এসাইন করে দিতে পারি।

//উদাহরনঃ
const allNumbers = [10, 25, 9, 36];

const [w,x,y,z] = allNumbers;
// এখানে const লিখে থার্ড ব্র্যাকেটে [w,x,y,z] ৪টা ভ্যারিয়েবল নিলাম, এরপর = সাইন দিয়ে যেই অ্যারে থেকে নাম্বার গুলো বের করে আনব সেই অ্যারের নাম দিলাম (অ্যারের নাম ছিল allNumbers)। এবার এই w,x,y,z ভ্যারিয়েবল গুলো allNumbers অ্যারে থেকে ভ্যালু গুলো সিরিয়াল অনুযারি নিয়ে নিবে, অর্থাৎ w = 10 হবে, x = 25 হবে, y = 9 হবে, এভাবে সিরিয়াল অনুযারী সব গুলা ভ্যালু নিয়ে নিবে।

// এরপর w,x,y,z ভ্যারিয়েবল গুলোকে আলদা আলাদা কনসোল করলেই তাদের নিয়ে নেওয়া ভ্যালু গুলো প্রিন্ট হবে।

//অ্যারের কোনো ভ্যালুকে যদি skip করতে চাই যেমন [10, 25, 9, 36] থেকে 10, 25 বাদে 9,36 নিতে চাই তাহলে [w,x,y,z] লেখা সময় w,x এর জায়গায় শুধু কমা(,) লিখতে হবে অর্থাৎ [ , , y, z] এভাবে লিখতে হবে।

//[w,x,y,z] এখানে কিন্ত ...rest প্যারামিটার ইউজ করা যায়

console.log(w);
console.log(x);
console.log(y);
console.log(z);



//Object Destructuring ******
//উপরে আমরা অ্যারেকে Destructure করেছি, এবার অবজেক্টকে Destructure করবো

const person = {
    firstName: "Omar",
    lastName: "Faruque",
    age: 30,
    country: "Canada"
}

const {firstName, lastName, age, country} = person; //Object Destructuring এর সময় এখানে থার্ড ব্র্যাকেটের পরিবর্তে কার্লি ব্রেস {} দিতে হবে (const এর পরে).

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(country);




//ভ্যারিয়েবলকে প্রপার্টি নেমের সাথে মিল না রেখে ভিন্ন নাম দিয়ে ডিক্লেয়ার করে Destructuring করা যায়, আমরা দেখতে পাচ্ছি  ৫০ নাম্বার লাইনে ভ্যারিয়েবল ডিক্লেয়ার করার সময় [] থার্ড ব্রাকেটে সকল ভ্যারিয়েবল নেম গুলো person object এর প্রপার্টির নেমগুলোর সাথে মিলে যায়।

//এই ভ্যারিয়েবল নেম গুলো person object এর প্রপার্টির নেমের সাথে মিল না রেখেও করা যায়। যেমনঃ-
const car = {
    brand: "Toyota",
    color: "Blue",
    model: 2022
}

const {brand:carName, color:carColor, model:carModel} = car; // এখানে brand প্রপার্টিকে রাখলাম carName ভ্যারিয়েবলে, color প্রপার্টিকে রাখলাম carColor ভ্যারিয়েবলে, model প্রপাটিকে রাখলাম carModel ভ্যারিয়েবলে।

console.log(carName);
console.log(carColor);
console.log(carModel);



// Multi-level object destructuring:
// যদি কোনো অবজেক্টের ভেতর আরেকটা অবজেক্ট থাকে, আবার সেই চাইল্ড অব্জেক্টের ভেতর আরেকটা গ্র্যান্ড চাইল্ড অবজেক্ট থাকে তাহলে তাদের destructure করার নিয়মঃ
{
    const user = {
        fullName: {
            firstName: "Omar",
            lastName: "Faruque",
            phone: {
                phone1: 1265489,
                phone2: 5695456
            }
        },
        age: 30,
        city: "Dhaka"
    }
    
    const {fullName:{firstName,lastName, phone:{phone1,phone2}}, age, city} = user; 
    console.log(firstName);
    console.log(lastName);
    console.log(phone1);
    console.log(phone2);
    console.log(age);
    console.log(city);
}