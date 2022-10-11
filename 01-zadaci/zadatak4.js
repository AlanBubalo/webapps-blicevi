function convert(obj) {
    for (let value of Object.values(obj)) {
        if (Array.isArray(value)) {
            let arr = value;
            let numArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === "number") {
                    numArr.push(arr[i]);
                    arr.splice(i, 1);
                    i = -1;
                }
            }
            let sum = numArr.reduce(function (sum, curr) {
                return sum + curr;
            }, 0);
            if (sum % 2 === 0) {
                sum = Math.sqrt(sum);
                sum = Math.round(sum * 100) / 100;
                value.push(sum);
            }
        }
    }
    return obj;
}

let obj = {
    1: [143, "A", 21],
    2: "B",
    3: [12, 11, "C"],
};

console.log(convert(obj));
