// Stack (primitive),Heap (Non Primitive)
let myname = "aashish"
let diffname = myname
diffname  = "chaiaurcode"
console.log(myname);
console.log(diffname);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitest@google.com"
console.log(userOne.email);
console.log(userTwo.email);
