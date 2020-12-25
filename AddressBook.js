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
