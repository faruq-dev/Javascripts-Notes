//Named Export: (নাম ধরে ধরে এক্সপোর্ট)

const numberA = 10;
const numberB = 20;

export {numberA, numberB, sum};

function sum (a,b){
    return a + b;
}

//Default Export (বাই ডিফল্ট এই ফাইলটাকে এক্সপোর্ট করবে)
const addition = (x,y) => x + y;
export default addition;

//ডিফল্ট এক্সপোর্ট একটা ফাইলে একটা জিনিসকেই করা যায়