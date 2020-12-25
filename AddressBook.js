//UC-8
let searchPerson=addressBookArray.findIndex(search => search.city=="hyderabad");
let firstPerson=addressBookArray[searchPerson];
let LastPerson=addressBookArray[searchPerson];
console.log("First name: ",firstPerson," last name: ",LastPerson);

