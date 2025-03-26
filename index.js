function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    const startIndex = acc !== undefined ? 0 : 1;
    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], i, values);
    }
    return accumulator;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function mySortBy(array, callback) {
    const newArray = [...array];
    return newArray.sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}


myEach([1, 2, 3], alert);
myMap([1, 2, 3], function(n) { return n * 3; });
myReduce([1, 2, 3], function(accumulator, element, index, array) { return accumulator + element; }, 0);
myFind([1, 2, 3, 4], function(n) { return n > 2; });
myFilter([1, 2, 3, 4], function(n) { return n > 2; });
mySize([1, 2, 3, 4]);
myFirst([1, 2, 3, 4]);
myLast([1, 2, 3, 4]);
mySortBy([1, 2, 3, 4], function(n) { return Math.sin(n); });
myKeys({one: 1, two: 2, three: 3});
myValues({one: 1, two: 2, three: 3});