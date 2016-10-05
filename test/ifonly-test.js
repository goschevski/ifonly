var ifonly = require('../index.js');
var chai = require('chai');
var should = chai.should();

describe('ifonly', function () {
    it('should return false', function () {
        var obj = { a: 'a', b: 'b', c: 'c' };
        ifonly(obj, ['a', 'b']).should.equal(false);
    });

    it('should return true', function () {
        var obj = { a: 'a', b: 'b' };
        ifonly(obj, ['a', 'b']).should.equal(true);
    });

    it('should return false', function () {
        var obj = { a: 'a' };
        ifonly(obj, ['a', 'b']).should.equal(false);
    });

    it('should return true and ignore items', function () {
        var obj = { a: 'a', b: 'b', c: 'c' };
        ifonly(obj, ['a', 'b'], ['c']).should.equal(true);
    });

    it('should return true and ignore empty strings', function () {
        var obj = { a: '', b: 'b', c: '' };
        ifonly(obj, ['b']).should.equal(true);
    });

    it('should return true and ignore empty arrays and objects', function () {
        var obj = { a: [], b: 'b', c: {} };
        ifonly(obj, ['b']).should.equal(true);
    });
});
