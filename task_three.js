function checkDigitsInName(name) {
//   let check = Number(name);
for (const char of name) {
    if (!isNaN(char)) {
        return true
    }
    
}return false

}
console.log(checkDigitsInName("hell4o"));
