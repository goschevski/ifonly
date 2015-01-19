;(function () {
    var only = function (obj, keys, ignore) {
        var state, key;
        var isEmpty = function (some) {
            if (some == null || typeof some === 'undefined') {
                return true;
            }

            if (some instanceof Array || typeof some === 'string') {
                return some.length === 0;
            }

            for (var k in some) {
                if (some.hasOwnProperty(k)) {
                    return false;
                }
            }

            return true;
        };
        ignore = ignore || [];

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                // if current key is in ignore list
                if (ignore.indexOf(key) !== -1) {
                    continue;
                }

                // if there is other key in obj which is not empty
                if (keys.indexOf(key) === -1 && !isEmpty(obj[key])) {
                    state = false;
                    break;
                }

                // if current key is required and not empty
                if (keys.indexOf(key) !== -1 && !isEmpty(obj[key])) {
                    state = true;
                }

                // if current key is required but it's empty
                if (keys.indexOf(key) !== -1 && isEmpty(obj[key])) {
                    state = false;
                }
            }
        }

        return state;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = only;
    } else {
        window.only = only;
    }
})();
