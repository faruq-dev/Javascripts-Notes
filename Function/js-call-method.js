// call() মেথড হলো জাভাস্ক্রিপ্টের একটা predefined মেথড (আগে থেকেই তৈরী করা আছে এমন)

// call() মেথড ইউজ করে একটা অবজেক্ট অন্য আরেকটা অবজেক্টের ভেতরে থাকা মেথডকে ইউজ করতে পারে।

// মনে করি a একটা অবজেক্ট, b আরেকটা অবজেক্ট, b এর মধ্যে একটা smartPhone নামে মেথড আছে যেটা a এর মধ্যে নাই, এখন a এর মধ্যে যদি আমি b এর smartPhone মেথডটাকে এনে ইউজ করতে চাই তাহলে .call() ইউজ করতে হবে

//Example
const person = {
    fullName: function (){
        return this.firstName + " " + this.lastName
    }
}

const person2 = {
    firstName: "Omar",
    lastName: "Faruque"
}
person.fullName.call(person2);
console.log(person.fullName.call(person2));

const person3 = {
    firstName: "Yasir",
    lastName: "Arafat"
}
person.fullName.call(person3);
console.log(person.fullName.call(person3));

// উপরে ৩টা অবজেক্ট দেখতে পাচ্ছি যথাক্রমে person, person2, person3

//person অবজেক্টের ভেতর fullName নামের একটা মেথড আছে, এই মেথডটা person2 ও person3 তে নেই। এখন যদি person এর fullName মেথডটাকে person2 ও person3 এর মধ্যে নিয়ে এসে ইউজ করতে চাই তাহলে person2 ও person3 এর ভেতর person এর fullName মেথডটাকে কল করে আনতে হবে।


// person2 তে অন্য অবজেক্টের মেথডকে কল করার নিয়মঃ*** ****** ****

// person2 অবজেক্টের নিচে প্রথমে যেই অবজেক্ট থেকে মেথডটাকে আনতে চাই তার নাম লিখতে হবে, যেহেতু person অবজেক্ট থেকে মেথডটাকে আনবো তাই person লিখলাম, এরপর একটা ডট দিয়ে সেই অবজেক্টের যে মেথডটাকে আনতে চাই তার নাম লিখব, যেহেতু person এর fullName মেথডকে আনবো তাই লিখলাম person.fullname, এরপরেই কল করার জন্য লিখতে হবে .call(), এবার .call এর ব্রাকেটে যেই অবজেক্টের ভেতর person এর fullName মেথডকে আনবো তার নাম লিখতে হবে। আমি person2 এর ভেতর আনতে চাচ্ছি তাই ব্রাকেটে লিখলাম (person2)

// তাহলে পূর্নরুপ হলো person.fullName.call(person2); এবার এটাকে কন্সোল করলেই ফাস্টনেম ও লাস্টনেম এক হয়ে ফুল নেম দেখাবে (১৮, ১৯ নং লাইন)

//person এর fullname মেথডকে person2 তে নিয়ে আসার পর fullname মেথডের this রেফার করবে person2 অবজেক্টকে


// The call() Method with Arguments ***
//Example
{
    const person = {
        fullName: function(city, country){ //এখানে মেথড লেখার সময় ফাংশনে ২টা প্যারামিটার দিলাম (city, country)
            return this.firstName + " " + this.lastName + "," + city + "," + country
        }
    }

    const person2 = {
        firstName: "Omar",
        lastName: "faruque"
    }

    person.fullName.call(person2, "Dhaka", "Bangladesh"); // এখানে person.fullName মেথডকে কল করার সময় ব্রাকেটে person2 এর পর কমা দিয়ে city, country প্যারামিটাররের জন্য আর্গুমেন্ট বা ভ্যালু দিয়ে দিলাম "Dhaka", "Bangladesh"
    
    console.log(person.fullName.call(person2, "Dhaka", "Bangladesh"));
}