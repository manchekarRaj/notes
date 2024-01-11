//---- call - apply - bind -----
let fname = {
    fn:"Raj",
    ln: "Manchekar"
}
let printName = function(leavesIn, favVacationPlace) {
    console.log(this.fn, this.ln, 'leave in', leavesIn, 'and his fav vacation destination is', favVacationPlace)
}
printName.call(fname, "Mumbai", "Goa!") // With call method we can do function borrowing - pass arguments as individual list
printName.apply(fname, ["Mumbai", "Goa!!"]) // Only diff bwtn call and apply is that you pass the arguments as array in apply 
let printUsersName = printName.bind(fname, "Mumbai", "Goa!!!")
printUsersName() // bind method creates a copy of a method which can be invoked later.