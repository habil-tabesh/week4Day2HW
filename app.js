// Falsy Bouncer
function bouncer(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            array.push(arr[i]);
        }
    }
    return array;
}
bouncer([7, "ate", "", false, 9]);











  //Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let array = [];
    for (let i = 0; i < arr.length; i += size) {
        array.push(arr.slice(i, i + size));
    }
    return array;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);





