function getArrayWithOneKey(arr) {
    let res = [];
    for (let el of arr) {
        let len = Object.keys(el).length;
        if (len == 1) {
            res.push(el);
        }
    }
    return res;
}

let arr = [
    {
        1: "a",
    },
    {
        1: "c",
        2: "a",
    },
    {
        2: "c",
    },
];

console.log(getArrayWithOneKey(arr));
