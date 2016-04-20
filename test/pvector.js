var expect = require('chai').expect;
var PVector = require('../index');

var EPSILON = 0.0001;

describe('static methods', function () {

    describe('new PVector', function () {
        var x, y, z, vec1, vec2, vec3;

        before(function () {
            x = 100;
            y = 200;
            z = 300;
            vec1 = new PVector(x, y);
            vec2 = new PVector(x, y, z);
            vec3 = PVector(x, y);
        });

        it('should be an instance of PVector', function () {
            expect(vec1).to.be.an.instanceof(PVector);
            expect(vec2).to.be.an.instanceof(PVector);
            expect(vec3).to.be.an.instanceof(PVector);
        });

        it('should have axis properties', function () {
            expect(vec1).to.have.property('x', x);
            expect(vec1).to.have.property('y', y);
            expect(vec1).to.have.property('z', 0);

            expect(vec2).to.have.property('x', x);
            expect(vec2).to.have.property('y', y);
            expect(vec2).to.have.property('z', z);

            expect(vec3).to.have.property('x', x);
            expect(vec3).to.have.property('y', y);
            expect(vec3).to.have.property('z', 0);
        });
    });

    describe('#fromAngle()', function () {
        var angle, vec;

        before(function () {
            angle = Math.random() * 2 * Math.PI;
            vec = PVector.fromAngle(angle);
        });

        it('should return an instance of PVector', function () {
            expect(vec).to.be.an.instanceof(PVector);
        });

        it('should have axis from angle', function () {
            expect( Math.abs( vec.x - Math.cos( angle ) ) ).to.lte( EPSILON );
            expect( Math.abs( vec.y - Math.sin( angle ) ) ).to.lte( EPSILON );
        });
    });

    /*
    describe('#random2D()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#random3D()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#dist()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#dot()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#cross()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#sub()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#angleBetween()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });

    describe('#lerp()', function () {
        var arr, vec;

        before(function () {
            arr = [100, 200];
            vec = Victor.fromArray(arr);
        });

        it('should return an instance of Victor', function () {
            expect(vec).to.be.an.instanceof(Victor);
        });

        it('should have axis from array', function () {
            expect(vec).to.have.property('x', arr[0]);
            expect(vec).to.have.property('y', arr[1]);
        });
    });
    */

});