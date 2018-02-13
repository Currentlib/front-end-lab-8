let block = "[~]";
let empty = "   ";
let enter = "\n";
let string = "";
let level = 1;
let numOfBlocks = 1;

let count = Number(prompt("Enter value floors of pyramid (0-20)", "0"));

if (count > 0 && count <= 20) {
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < (count - level); j++) {
            string += empty;
        }
        for (let k = 0; k < numOfBlocks; k++) {
            string += block;
        }
        numOfBlocks += 2;
        level += 1;
        string += enter;
    }
    console.log(string);
} else {
    console.log("Incorrect");
}
