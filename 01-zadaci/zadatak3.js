function sortArrayAndNumbers(arr) {
    return arr.sort((a, b) => {
        if (typeof a === "number" && typeof b === "number") {
            return a < b ? -1 : 1;
        } else if (typeof a === "string" && typeof b === "string") {
            return a.length < b.length ? -1 : 1;
        } else if (typeof a === "number" && typeof b === "string") {
            return -1;
        } else {
            return 1;
        }
    });
}

let arr = [321, 63, "Mermelada", 4, "Kruh", 1, 1234, "Tanjur", 50];

console.log(sortArrayAndNumbers(arr));
