// break keyword সাধারনত ইউজ করা হয় কোনো একটা লুপ থেকে জাম্প করার জন্য বা বের হয়ে যাওয়ার জন্য বা লুপকে থামিয়ে দেওয়ার জন্য বা লুপকে ভেঙে দেওয়ার জন্য।

// আমরা ইতিমধ্যে conditional statement চ্যাপ্টারের switch statement সেকশনে break কীওয়ার্ডের ব্যবহার দেখেছি।

//Example
for (let i = 1; i <= 10 ; i++){
    if(i===6){
        break;
    }
    console.log(i);
}
// প্রথমে একটা for লুপ লিখলাম ১ থেকে ১০ পর্যন্ত প্রিন্ট করার জন্য
// এরপর for লুপের কার্লি ব্রেস / কোড ব্লকে id দিয়ে একটা কন্ডিশন (conditional statement) লিখলাম যদি i===6 হয় তাহলে লুপ টা থেকে যাবে বা ভেঙে যাবে।

// নোটঃ *** লুপের ভেতরেও কন্ডিশন লেখা যায় (যেমন আমরা for লুপের ভেতর if কন্ডিশন দিয়েছি)

//Another Example
{
    for (let i = 1; i <= 10 ; i++){
        if(i % 2 === 0){ 
            console.log("this is a even number");
            break;
        }
        console.log(i);
    }
} // এখানে কন্ডিশন দিলাম i এর মান যখনি জোড় সংখ্যা হবে তখনি লুপ ব্রেক হবে। জোড় সংখ্যা বের করার জন্য  i কে মড (%) করলাম, আমরা জানি কোনো সংখ্যা কে ২ দিয়ে ভাগ বা মড করার পর ভাগশেষ 0 হলে সেটা জোড় সংখ্যা, তাই লিখলাম (i % 2 === 0), মানে i এর মান কে ২ দিয়ে ভাগ করো এরপর ভাগশেষ 0 এর সমান কিনা চেক করো।












const a = {};
  const b = { key: 'b' };
  const c = { key: 'c' };
  a[b] = 123;
  a[c] = 456;
  console.log(a[b]);

  console.log(typeof 1)

  const x = [1, 2, 3]; const y = [...x, 4, 5]; console.log(y)
  console.log(0.1 + 0.2 === 0.3)