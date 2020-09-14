// Write an“ assertObjectsEqual”
// function from scratch.
// Assume that the objects in question contain only scalar values(i.e.
// simple values like strings or numbers).

function assertObjectsEqual(obj1, obj2) {

    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return 'Passed'
    } else
        return 'Fail' + "Expected:" + JSON.stringify(obj1) + "but it was: " + JSON.stringify(obj2)

}


var expected = {
    foo: 5,
    bar: 6
};
var actual = {
    foo: 4,
    bar: 6
}

console.log(assertObjectsEqual(expected, actual))

// output
// FailExpected: {
//     "foo": 5,
//     "bar": 6
// }
// but it was: {
//     "foo": 4,
//     "bar": 6
// }