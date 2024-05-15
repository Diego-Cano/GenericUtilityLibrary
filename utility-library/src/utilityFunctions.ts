/**
 * Identity function that returns the same value as input.
 * @param arg - The value to be returned.
 * @returns Returns the input value `arg`.
 * @template T - The type variable that represents the type of the input and output.
 */
export function identity<T>(arg: T): T {
    return arg;
}

/**
 * Reverses an array and returns a new array with the elements in reverse order.
 * @param array - The array to be reversed.
 * @returns A new array containing the elements of the original array in reverse order.
 * @template T - The type of the elements in the array.
 */
export function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

/**
 * Maps each value of an object to a new value using a mapping function.
 * @param obj - The object whose values are to be mapped.
 * @param mapFn - A function that takes an old value of type V and returns a new value of type U.
 * @returns A new object with the same keys as `obj` but with values transformed by `mapFn`.
 * @template K - The type of the keys in the object, constrained to string or number.
 * @template V - The type of the values in the object before transformation.
 * @template U - The type of the values in the object after transformation.
 */
export function mapObject<K extends string | number, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U> {
    const result: Record<string, U> = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[key] = mapFn(value as V);
    });
    return result as Record<K, U>;
}

/**
 * Filters elements of an array based on a predicate function.
 * @param array - The array to filter.
 * @param predicate - A function that takes an element of the array and returns a boolean.
 * If the function returns true, the element is included in the resulting array.
 * @returns A new array containing only those elements of the original array for which the predicate returns true.
 * @template T - The type of the elements in the array.
 */
export function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
}
