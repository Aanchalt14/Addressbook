//UC-4
console.log("Finding existing contatc number");
let indexNum = addressBookArray.findIndex(phone =>phone.phonenumber == 9407880936);
addressBookArray[indexNum].phonenumber=9407880936;
console.log(addressBookArray.toString());
