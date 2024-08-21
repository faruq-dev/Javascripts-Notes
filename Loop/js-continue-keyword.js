// continue কীওয়ার্ডও একটা লুপ থেকে জাম্প করে বের হয়ে যাওয়ার জন্য ব্যবহার করার হয় কিন্ত break কীওয়ার্ডের সাথে এর পার্থক্য হলো continue কীওয়ার্ড লুপের শুধুমাত্র একটা iteration বা ধাপের জন্য কাজ করে, অর্থাৎ একটা ধাপ বা স্টেপকে সে skip করে বাকি ভ্যালু গুলো নিয়ে সে লুপ কন্টিনিউ করে। অর্থাৎ যে ভ্যালুর সাথে কন্ডিশন ম্যাচ করবে সে ভ্যালুটাকে সে skip করে পরের ভ্যালু থেকে আবার লুপ কন্টিনিউ করবে। এটজন্যই এর নামে continue কীওয়ার্ড 

// একটা উদাহরন দেইঃ
// for (let i = 1; i <= 10 ; i++){} এটা হলো ১ থেকে ১০ পর্যন্ত কনসোলে প্রিন্ট করার জন্য লুপ লিখলাম।
// এরপর লুপের কার্লি ব্রেসে {} কন্ডিশন লিখলাম if (i===5){continue;}, এর মানে ১ থেকে ১০ প্রিন্ট করতে গিয়ে যখন i এর মান ৫ হবে তখন সে ৫ কে skip করে ৬ থেকে প্রিন্ট করা শুরু করবে, তাহলে কনসোলে প্রিণ্ট হবে ১,২,৩,৪,৬,৭,৮,৯,১০ (অর্থাৎ ৫ বাদে বাকি ১ থেকে দশ)। এভাবে লুপের কোনো একটা ধাপকে skip করার জন্য continue কীওয়ার্ড ব্যবহুত হয়।

//Example
{
    for (let i = 1; i <= 10; i++){
        if (i == 5){ //continue কীওয়ার্ডের মাধ্যমে ৫ কে skip করে ৬ থেকে কন্টিনিউ করবে
            continue;
        }
        console.log(i);
    };
}

//Example 2
{
    for (let i = 1; i <= 10; i++){
        if (i%2 == 0){// জোড় সংখ্যা গুলোকে skip করে বেজোড় সংখ্যা গুলোকে প্রিন্ট করবে
            continue;
        }
        console.log(i);
    };
}