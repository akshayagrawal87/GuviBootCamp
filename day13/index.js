//Chunk Loadash Function Using ES6 SYNTAX in TS.
var _chunk = function (array, size) {
    try {
        if (size === undefined || size === null || size === 0)
            throw new Error("invalid size value");
        else {
            var result = [];
            for (var i = 0; i < array.length;) {
                var temp = [];
                for (var j = i; j < i + size; j++) {
                    if (array[j] !== undefined)
                        temp.push(array[j]);
                }
                i = i + size;
                if (temp.length !== 0) {
                    result.push(temp);
                }
            }
            return result;
        }
    }
    catch (e) {
        console.error(e.message);
    }
};
var array = [1, 2, 3, 4, 6, 7, 8];
console.log("Calling Chunk Function " + _chunk(array, 2));
//Reduce function using es6 without built in function.
var _reduce = function (array, iterator, intialValue) {
    var sum = 0;
    if (intialValue)
        sum = intialValue;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var a = array_1[_i];
        sum = iterator(sum, a);
    }
    return sum;
};
console.log("Calling Reduce Function " +
    _reduce(array, function (sum, item) {
        return sum + item;
    }, 100));
var users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
];
//Lodash Filter function using es6 without inbuilt methods
var _filter = function (array, iterator) {
    var result = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var a = array_2[_i];
        if (a !== undefined) {
            if (typeof iterator === "function")
                if (iterator(a)) {
                    result.push(a);
                }
            if (typeof iterator === "object" && !Array.isArray(iterator)) {
                var flag = 0;
                for (var i in iterator) {
                    if (a[i] === iterator[i]) {
                        flag = 1;
                    }
                    else {
                        flag = 0;
                    }
                }
                if (flag === 1)
                    result.push(a);
            }
            if (typeof iterator === "object" && Array.isArray(iterator)) {
                if (a[iterator[0]] === iterator[1])
                    result.push(a);
            }
            if (typeof iterator === "string") {
                if (a[iterator]) {
                    result.push(a);
                }
            }
        }
    }
    return result;
};
console.log("Calling Filter Function " +
    _filter(users, function (user) {
        return user.active;
    }));
console.log("Calling Filter Function " + _filter(users, { age: 36, active: true }));
console.log("Calling Filter Function " + _filter(users, ["active", false]));
console.log("Calling Filter Function " + _filter(users, "active"));
//Returns sum of an array if element type is number otherwise throws an error.
var _sum = function (array) {
    try {
        var sum = 0;
        for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
            var a = array_3[_i];
            if (typeof a === "number") {
                sum += a;
            }
            else {
                throw Error("data type is not number");
            }
        }
        return sum;
    }
    catch (e) {
        console.error(e.message);
    }
};
console.log("Calling Sum Function " + _sum(array));
var _find = function (array, iterator) {
    for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
        var a = array_4[_i];
        if (a !== undefined) {
            if (typeof iterator === "function")
                if (iterator(a)) {
                    return a;
                }
            if (typeof iterator === "object" && !Array.isArray(iterator)) {
                var flag = 0;
                for (var i in iterator) {
                    if (a[i] === iterator[i])
                        flag = 1;
                    else
                        flag = 0;
                }
                if (flag === 1)
                    return a;
            }
            if (typeof iterator === "object" && Array.isArray(iterator)) {
                if (a[iterator[0]] === iterator[1])
                    return a;
            }
            if (typeof iterator === "string") {
                if (a[iterator]) {
                    return a;
                }
            }
        }
    }
    return undefined;
};
console.log("Calling Find Function " +
    _find(users, function (o) {
        return o.age < 40;
    }));
// => object for 'barney'
// The `_.matches` iteratee shorthand.
console.log("Calling Find Function " + _find(users, { age: 1 }));
// => object for 'pebbles'
// The `_.matchesProperty` iteratee shorthand.
console.log("Calling Find Function  " + _find(users, ["active", false]));
// => object for 'fred'
// The `_.property` iteratee shorthand.
console.log("Calling Find Function  " + _find(users, "active"));
// => object for 'barney'
