// utilityFunctions.test.ts

import { identity, reverseArray, mapObject, filterArray } from '../utilityFunctions';


// Test for identity function
test('identity function', () => {
    expect(identity(1)).toBe(1);
    expect(identity("hello")).toBe("hello");
});

// Test for reverseArray function
test('reverseArray function', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});

// Test for mapObject function
test('mapObject function', () => {
    const obj = { a: 1, b: 2 };
    const stringified = mapObject(obj, value => value.toString());
    expect(stringified).toEqual({ a: '1', b: '2' });
});

// Test for filterArray function
test('filterArray function', () => {
    expect(filterArray([1, 2, 3, 4], x => x % 2 === 0)).toEqual([2, 4]);
});
