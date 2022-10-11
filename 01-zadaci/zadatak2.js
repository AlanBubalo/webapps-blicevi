function splitInHalf(str) {
    let n2 = Math.floor(str.length / 2);
    return str.slice(n2);
}

let str = "Javascript i nije tolko los";

console.log(splitInHalf(str));
