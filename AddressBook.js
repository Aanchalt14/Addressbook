class AddressBook {
constructor(param) {
     this.firstname=param[0];
     this.lastname=param[1];
     this.city=param[2];
     this.state=param[3];
     this.pincode=param[4];
     this.phoneNumber=param[5];
     this.email=param[6];
   }


//firstname
get() {
  return this._firstname;
}

set(firstname) {
    let regex = RegExp("^[A-Z]{1}[a-z]{2,}");
    if(regex.test(firstname))
    {
        this._firstName=firstname;
    }
    else {
     console.log("Invalid name !");
    }
} 
//lastname
get()  {
    return this._lastname;
}

set (lastname) {
    let regex =RegExp("^[A-Z]{1}[a-z]{2,}");
    if(regex.text(lastname)) {
         this._lastname=lastname;
        }
    else {
        console.log("Invalid last name");
    }
}

//city
get() {
    return this._city;
}
set(city) {
    let regex = RegExp("^[A-Z]{1}[a-z]{2,}");
     if(regex.test(city)) {
         this._city=city;
    }
    else{
        console.log("Invalid city");
    }
}    


//state
get() {
    return this._state;
}
set(state) {
    let regex=RegExp("^[A-Z]{1}[a-z]{2,}")
    if(regex.test(state)) {
        this._state=state;
    }
    else {
        console.log("Invalid state");
    }
}

//pincode
get() {
    return this._pincode;
}
set(pincode) {
    let regex=RegExp("^[0-9]{6}$")
    if(RegExp.test(pincode)){
        this._pincode=pincode
    }
    else{
        console.log("Invalid pincode");
    }
}

//phone number
get() {
    return this._phonenumber;
}
set(phonenumber) {
    let regex = RegExp("^[6-9]{1}[0-9]{9}$");
    if(regex.test(phonenumber)) {
        this._phonenumber=phonenumber;
    }
    else{
        console.log("Invalid phone number");
    }
}


//email
get(){
    return this._email;
}

set(email) {
    let regex=RegExp("^[a-z A-Z 0-9]+@[.\-_+ 0-9 a-z A-Z]*$");
     if(regex.test(email)){
         this._email=email;
    }
    else {
        console.log("Invalid email");
    }
}

toString() {
    return "First name" +this.firstname + "Last name" +this.lastname+ "city"+this.city+ "state" +this.state+ "Pincode" +this.pincode+ "phone number" +this.phonenumber+ "email" +this.email ;
}


//UC-3
let addressBookArray=new Array();
addressBookArray.push(new AddressBook("Aanchal","Thakur","Gandhisagar","MP",468771,9406880936,"aanchalt03@gmail.com"));
addressBookArray.push(new AddressBook("Yash","Raj","mumbai","MH",468781,9306880936,"yash03@gmail.com"));
addressBookArray.push(new AddressBook("Bhumi","Singh","Gandhinagar","GJ",468471,9406850936,"bhumi03@gmail.com"));
console.log("Details of Address book" +addressBookArray.toString());


//UC-4
console.log("Finding existing contatc number");
let indexNum = addressBookArray.findIndex(phone =>phone.phonenumber == 9407880936);
addressBookArray[indexNum].phonenumber=9407880936;
console.log(addressBookArray.toString());

//UC-5
console.log("Find person contact");
let nameIndex = addressBookArray.findIndex(name => name.firstname=="Sheera");
addressBookArray.splice(nameindex,nameindex);
console.log(addressBookArray.toString());


//UC-6
console.log("\n Total Contacts :");
let totalContacts = addressBookArray.length;
console.log("Total Contacts: ", totalcontacts);


//UC7
Console .log("\nChecking Duplicate Name: ");
let duplicatecheck = 0
function duplicate(contNum) {
    if (conuntNum.firstname =="praveen")
    duplicateCheck++;
}
addressBookArray.forEach((contact)=>duplicate(contact));
if (duplicateCheck==0){
    console.log("No Duplicate contacts available ");
}
else{
    console.log("Duplicate contact");
}

//UC-8
let searchPerson=addressBookArray.findIndex(search => search.city=="hyderabad");
let firstPerson=addressBookArray[searchPerson];
let LastPerson=addressBookArray[searchPerson];
console.log("First name: ",firstPerson," last name: ",LastPerson);

//UC9
console.log("\n view persons by city or state: ");
let viewPerson=addressBookArray.filter((book)=>book.state=="telangana").reduce((total,book)=>book.firstname+" "+book.lastname,0);
console.log(viewPerson);

//UC10
let totalState = addressBookArray.filter((book) => book.state=="tamilnadu").length;
console.log("No of times available: ",totalState);


//UC11
console.log("\n Sorting Entries");
for(let book in addressBookArray){
    addressBookArray.sort(book.firstname);
}
addressBookArray.forEach((count)=>console.log(count.toString()));


//UC12 Sorting entries by city, state, pincode
console.log("\nSorting by City ")
for(let book in addressBookArray){
    addressBookArray.sort(book.city)
}
addressBookArray.forEach((count)=>console.log(count.toString()))

console.log("Sorting by State\n")
for(let book in addressBookArray){
    addressBookArray.sort(book.state)
}
addressBookArray.forEach((count)=>console.log(count.toString()))

console.log("Sorting by Pincode\n")
for(let book in addressBookArray){
    addressBookArray.sort(book.pincode)
}
addressBookArray.forEach((count)=>console.log(count.toString()))