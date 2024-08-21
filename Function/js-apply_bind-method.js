// .apply() মেথড এবং .call() মেথড বলা চলে  ৯৫% একই জিনিস তবে সামান্য একটু পার্থক্য আছে। পার্থক্যটা হলো .call() মেথডে আমরা call() এর ব্রাকেটে যে একটার পর একটা আর্গুমেন্ট দেই সেটা কমা(,) দিয়ে একটার পর একটা দিতে হয়। যেমন (person1, "dhaka", "BD", "Canada"), এখানে এই আর্গুমেন্ট গুলা অ্যারে আকারে দেওয়া যায়না। অর্থাৎ .call() এর ব্রাকেটে কোনো অ্যারে লেখা যায়না

// কিন্ত .apply() মেথডে আর্গুমেন্ট দেওয়ার সময় ব্রাকেটের ভেতর অ্যারের আকারে আর্গুমেন্ট গুলা দেওয়া যায়, যেমন (person2,["Dhaka", "BD", "Canada"])

//এক্সামপল
const person = {
    fullName: function (city, country){
        return this.firstName + " " + this.lastName +", "+ city + ", " + country
    }
}

const person2 = {
    firstName: "Omar",
    lastName: "Faruque"
}

person.fullName.apply(person2, ["Dhaka", "Bangladesh"]); // person.fullName মেথডকে এপ্লাই করার সময় এখানে আর্গুমেন্ট গুলো অ্যারে আকারে দিলাম ["Dhaka", "Bangladesh"], এটাই .call() মেথডের সাথে পার্থক্য। .call মেথডে অ্যারে আকারে দেওয়া যায়না।
console.log(person.fullName.apply(person2, ["Dhaka", "Bangladesh"]));



///******************************************///     *****     ///******************************************///

//******************************    JS Function .bind() Method     *****************************************//


// .bind() মেথডের সাহায্যে একটা অবজেক্ট অন্য আরেকটা অবজেক্টের ভেতরে থাকা কোনো মেথডকে ধার করে এনে ব্যবহার করতে পারে।

// মনে করি person1 একটা অবজেক্ট, person2 আরেকটা অবজেক্ট, person1 এর মধ্যে একটা fullName নামে মেথড আছে যেটা person2 এর মধ্যে নাই, এখন person2 এর মধ্যে person1 এর সেই fullName মেথডটাকে ধার করে এনে ইউজ করার জন্য .bind() মেথড ইউজ করা হয়

//*** নিচের উদাহরনে আমি ২টা অবজেক্ট নিলাম person ও member নামে। এখানে member object টা person object থেকে fullName মেথডটা ধার করে এনে ব্যবহার করবে।

{
    const person = {
        firstName: "Omar",
        lastName: "Faruque",
        fullName: function() {
            return this.firstName + " " + this.lastName
        }
    }

    const member = {
        firstName: "John",
        lastName: "Doe"
    }

    person.fullName.bind(member); //যে অবজেক্ট থেকে মেথড ধার করে আনা হবে প্রথমে সে অবজেক্টের নাম লিখতে হবে এরপর ডত দিয়ে মেথডের নাম লিখতে হবে, তাই লিখলাম person.fullName, এরপর ডট দিয়ে bind() লিখে ব্রাকেটে যে অবজেক্টের মধ্যে ধার করে আনব তার নাম লিখব, যেহেতু member অবজেক্টে ধারর করে আনব তাই লিখলাম person.fullName.bind(member);

    let totalName = person.fullName.bind(member); //এবার person.fullName.bind(member); কে একটা ভ্যারিয়েবলে রেখে কনসোল করতে হবে
    console.log(totalName()); //কন্সোল করার সময় ভ্যারিয়েবল নেমের পাশে () প্যারেন্থিসিস দিতে হবে।
}