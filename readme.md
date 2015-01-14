# ifonly

[![Build Status](https://travis-ci.org/goschevski/ifonly.svg?branch=master)](https://travis-ci.org/goschevski/ifonly)

ifonly is function that checks if your object have only and only specific properties you passed.

It works in both node and client-side applications.

### Example

```javascript
    var obj;

    obj = { a: 'a'};
    console.log(ifonly(obj, ['a'])); // true because only 'a' property is present

    obj = { a: 'a', b: 'b', c: 'c' };
    console.log(ifonly(obj, ['a', 'b'])); // false because 'c' property is present

    obj = { a: 'a', b: 'b', c: 'c' };
    console.log(ifonly(obj, ['a', 'b'], ['c'])); // true because 'c' property is ignored

    obj = { a: '', b: 'b', c: '' };
    console.log(ifonly(obj, ['b'])); // true because 'a' and 'c' properties are empty

    obj = { a: [], b: 'b', c: {} };
    console.log(ifonly(obj, ['b'])); // true because 'a' and 'c' properties are empty
```
