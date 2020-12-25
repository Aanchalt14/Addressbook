//UC9
console.log("\n view persons by city or state: ");
let viewPerson=addressBookArray.filter((book)=>book.state=="telangana").reduce((total,book)=>book.firstname+" "+book.lastname,0);
console.log(viewPerson);
