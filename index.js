(function () {
    var clone = function (obj) {
        if (obj == null || typeof obj != 'object') {
            return obj;
        }

        var copy = {};

        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }

        return copy;
    };

    var only = function (obj, keys, ignore) {
        var copy = clone(obj);
        var state = true;

        // remove ignore items from copy
        ignore && ignore.forEach(function (key) {
            delete copy[key];
        });

        // remove empty items from copy
        Object.keys(copy).forEach(function (key) {
            if (copy[key] == null || typeof copy[key] === 'undefined') {
                delete copy[key];
            }

            if ((copy[key] instanceof Array || typeof copy[key] === 'string') && copy[key].length === 0) {
                delete copy[key];
            }

            if (typeof copy[key] === 'object' && copy[key] !== null && !(copy[key] instanceof Array) && Object.keys(copy[key].length === 0)) {
                delete copy[key];

            }
        });

        keys.forEach(function (value) {
            state = state && Object.keys(copy).indexOf(value) !== -1;

            if (state) {
                delete copy[value];
            }
        });

        return state && (Object.keys(copy).length === 0);
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = only;
    } else {
        window.only = only;
    }
})();
