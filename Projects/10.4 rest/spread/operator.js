// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

    const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

// findMin

    // findMin(1,4,12,-3) // -3
    // findMin(1,-1) // -1
    // findMin(3,1) // 1

    const findMin = (...arguments) => Math.min(...arguments)

// mergeObjects

    // mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

    const mergeObjects = (object1, object2) => ({...object1}, {...object2})

// doubleAndReturnArgs

    const doubleAndReturnArgs = (array, ...num) => [...array, ...num.map(double => double * 2)]

// Slice and Dice

/** remove a random element in the items array
and return a new array without that item. */

    const removeRandom = (items) => {
        let index = Math.floor(Math.random() * items.length);
        return [...items.slice(0, index), ...items.slice(index + 1)];
    }

/** Return a new array with every item in array1 and array2. */

    const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

    const addKeyVal = (obj, key, val) => {
        let newObj = {...obj}
        newObj[key] = val;
        return newObj
    }
    // const addKeyVal = (obj, key, val) => [new Object{ key: val }, ...obj{key: val}]


/** Return a new object with a key removed. */

    const removeKey = (obj, key) => {
        let newObj = {...obj}
        delete newObj[key]
        return newObj
    }


/** Combine two objects and return a new object. */

    // const combine = (obj1, obj2) => {
    //     let newObj = [...obj1, ...obj2]
    //     return newObj
    // }

    const combine = (obj1, obj2) => {
        return { ...obj1, ...obj2 }
    }

/** Return a new object with a modified key and value. */

    const update = (obj, key, val) => {
        return {...obj, [key]: val}
    }