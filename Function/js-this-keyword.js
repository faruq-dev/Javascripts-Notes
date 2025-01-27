const person = {
    firstName: "Omar",
    lastName: "Faruque",
    age: 30,
    salary: 40000,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());

// উপরে আমরা একটা অবজেক্ট ভ্যারিয়েবল নিলাম, অর্থাৎ person ভ্যারিয়েবলের ভ্যালুটা একটা অবজেক্ট যার মধ্যে firstName, lastName ইত্যাদি সহ মোট ৫টা প্রোপার্টি রয়েছে।

// এই ৫টা প্রপার্টির একদম শেষে আছে fullName প্রপার্টি, এই প্রপার্টির ভ্যালু হিসেবে একটা ফাংশন দেওয়া আছে, তাই এই fullName প্রপার্টিটাকে বলা হবে মেথড।

//কারন একটা অবজেক্টের কোনো প্রপার্টির ভ্যালু হিসেবে যদি ফাংশন দেওয়া থাকে তাহলে সেই প্রপার্টিটা হয়ে যাবে একটা মেথড, এখানে fullName একটা মেথড কারন এর ভ্যালু হিসেবে একটা ফাংশন দেওয়া হয়েছে। বাকি প্রপার্টিগুলো যেমন firstName, lastName ইত্যাদি এগুলা মেথড না, এগুলা নরমাল প্রপার্টি।

// অর্থাৎ fullName হলো person অবজেক্টের একটা মেথড।

// নোটঃ *** অবজেক্টের মেথডে ফাংশন লেখার সময় তাতে কোনো প্যারামিটার দেওয়া লাগেনা, মানে function() ব্রাকেটে কন প্যারামিটার লাগেনা।




//******************** this কীওয়ার্ডের আলোচনা **********************/

//উপরে লেখা অবজেক্টের fullName মেথডে যে ফাংশন লেখা হয়েছে তার বডিতে দেওয়া আছে return this.firstName + " " + this.lastName

//এখানে this দিয়ে পুরো person অবজেক্ট টাকেই বোঝানো হচ্ছে (১ নং লাইনের person object). অর্থাৎ this.firstName এবং person.firstName একই কথা। অর্থাৎ this কীওয়ার্ডটা এখানে person object কে রেফার করতেসে।

// this কীওয়ার্ডকে বিভিন্ন জায়গায় বিভিন্ন ভাবে ইউজ করা যায়, this কীওয়ার্ড কখন কোন অবজেক্টকে রেফার করবে তা নির্ভর করে this কে কোথায় কল করা হয়েছে তার উপর।

//যখন this কে একটা অবজেক্ট মেথডের মধ্যে কল করা হবে (৬, ৭  নং লাইনের মত) তখন সে তার প্যারেন্ট অবজেক্টকে রেফার করবে, যেমন উপরের person অব্জেক্টের fullName মেথডে this কে কল করা হয়েছে, এখানে this রেফার করবে তার প্যারেন্ট অবজেক্ট person কে।

// যদি একাকি কোন রকম অবজেক্ট বা ফাংশনের বাইরে this কীওয়ার্ড কল করা হয়য় তাহলে সে global object/window object কে রেফার করে। যেমনঃ
console.log(this);


// যদি একটা নরমাল ফাংশনের মধ্যে (অবজেক্ট মেথডের ফাংশনে নয়) this কে কল করা হয় তাহলেও সে global object/window object কে রেফার করে।
function myFunction (){
    return this;
}
console.log(myFunction());

// নরমাল ফাংশন যদি strict mode এ থাকে তাহলে তার ভেতর this কে কল করা হলে সে undefined রেফার করে।

// যদি কোনো event এ this কে কল করা হয় তাহলে যেই এলিমেন্টের উপর ইভেন্ট হচ্ছে সেই এলিমেন্টকে রেফার করবে, যেমন একটা বাটনের ক্লিক ইভেন্ট হচ্ছে, এসময় this কে কল করলে সে সেই বাটনটাকেই রেফার করবে।

