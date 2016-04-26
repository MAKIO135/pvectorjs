var expect = require( 'chai' ).expect;
var PVector = require( '../index' );

var EPSILON = 0.0001;

describe( 'Static methods', function() {

    describe( 'Instanciation methods', function() {

        describe( '#PVector.Constructor', function() {
            var x, y, z;
            var v, vec1a, vec1b, vec2a, vec2b, vec3a, vec3b, vec4a, vec4b;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v = PVector();

                vec1a = new PVector( x, y );
                vec1b = new PVector( x, y, z );

                // Use Constructor without the `new` keyword
                vec2a = PVector( x, y );
                vec2b = PVector( x, y, z );

                // Create a new vector from an array
                vec3a = PVector( [ x, y ] );
                vec3b = PVector( [ x, y, z ] );

                // Create a new vector from an object
                vec4a = PVector( {
                    x: x,
                    y: y
                } );
                vec4b = PVector( {
                    x: x,
                    y: y,
                    z: z
                } );
            } );

            it( 'should be an instance of PVector', function() {
                expect( v ).to.be.an.instanceof( PVector );
                expect( vec1a ).to.be.an.instanceof( PVector );
                expect( vec1b ).to.be.an.instanceof( PVector );
                expect( vec2a ).to.be.an.instanceof( PVector );
                expect( vec2b ).to.be.an.instanceof( PVector );
                expect( vec3a ).to.be.an.instanceof( PVector );
                expect( vec3b ).to.be.an.instanceof( PVector );
                expect( vec4a ).to.be.an.instanceof( PVector );
                expect( vec4b ).to.be.an.instanceof( PVector );
            } );

            it( 'should have axis properties', function() {
                expect( v ).to.have.property( 'x', 0 );
                expect( v ).to.have.property( 'y', 0 );
                expect( v ).to.have.property( 'z', 0 );

                expect( vec1a ).to.have.property( 'x', x );
                expect( vec1a ).to.have.property( 'y', y );
                expect( vec1a ).to.have.property( 'z', 0 );

                expect( vec1b ).to.have.property( 'x', x );
                expect( vec1b ).to.have.property( 'y', y );
                expect( vec1b ).to.have.property( 'z', z );

                expect( vec2a ).to.have.property( 'x', x );
                expect( vec2a ).to.have.property( 'y', y );
                expect( vec2a ).to.have.property( 'z', 0 );

                expect( vec2b ).to.have.property( 'x', x );
                expect( vec2b ).to.have.property( 'y', y );
                expect( vec2b ).to.have.property( 'z', z );

                expect( vec3a ).to.have.property( 'x', x );
                expect( vec3a ).to.have.property( 'y', y );
                expect( vec3a ).to.have.property( 'z', 0 );

                expect( vec3b ).to.have.property( 'x', x );
                expect( vec3b ).to.have.property( 'y', y );
                expect( vec3b ).to.have.property( 'z', z );

                expect( vec4a ).to.have.property(  'x', x  );
                expect( vec4a ).to.have.property(  'y', y  );
                expect( vec4a ).to.have.property(  'z', 0  );

                expect( vec4b ).to.have.property(  'x', x  );
                expect( vec4b ).to.have.property(  'y', y  );
                expect( vec4b ).to.have.property(  'z', z  );
            } );
        } );

        describe( '#PVector.random2D', function() {
            var vec;

            before( function() {
                vec = PVector.random2D();
            } );

            it( 'should return an instance of PVector', function() {
                expect( vec ).to.be.an.instanceof( PVector );
            } );

            it( 'should have random x and y axis', function() {
                expect( vec ).to.have.property( 'x' ).to.lte( 1 );
                expect( vec ).to.have.property( 'y' ).to.lte( 1 );
                expect( vec ).to.have.property( 'z' ).to.equal( 0 );
            } );

            it( 'should have a magnitude of ~1', function() {
                expect( Math.abs( 1 - Math.sqrt( vec.x * vec.x + vec.y * vec.y ) ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#PVector.random3D', function() {
            var vec;

            before( function() {
                vec = PVector.random3D();
            } );

            it( 'should return an instance of PVector', function() {
                expect( vec ).to.be.an.instanceof( PVector );
            } );

            it( 'should have random x, y and z axis', function() {
                expect( vec ).to.have.property( 'x' ).to.lte( 1 );
                expect( vec ).to.have.property( 'y' ).to.lte( 1 );
                expect( vec ).to.have.property( 'z' ).to.lte( 1 );
            } );

            it( 'should have a magnitude of ~1', function() {
                expect( Math.abs( 1 - Math.sqrt( vec.x * vec.x + vec.y * vec.y + vec.z * vec.z ) ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#PVector.fromAngle', function() {
            var angle, vec;

            before( function() {
                angle = Math.random() * 2 * Math.PI;
                vec = PVector.fromAngle( angle );
            } );

            it( 'should return an instance of PVector', function() {
                expect( vec ).to.be.an.instanceof( PVector );
            } );

            it( 'should have x and y axis from angle', function() {
                expect( Math.abs( vec.x - Math.cos( angle ) ) ).to.lte( EPSILON );
                expect( Math.abs( vec.y - Math.sin( angle ) ) ).to.lte( EPSILON );
                expect( vec ).to.have.property( 'z', 0 );
            } );
        } );

    } );

    describe( 'Utility methods', function() {

        describe( '#PVector.angleBetween', function() {
            var v1, v2, angle;

            before( function() {
                v1 = PVector( 0, 50 );
                v2 = PVector( 50, 0 );
                angle = PVector.angleBetween( v1, v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof angle ).to.eql( 'number' );
            } );

            it( 'should be the angle between 0 and 2 * Pi', function() {
                expect( angle ).to.gte( 0 );
                expect( angle ).to.lte( Math.PI * 2 );
                expect( Math.abs( Math.PI / 2 - angle ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#PVector.radians2degrees', function() {
            var ret;

            before( function() {
                ret = PVector.radians2degrees( Math.PI / 2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof ret ).to.eql( 'number' );
            } );

            it( 'should return the angle in degrees', function() {
                expect( ret ).to.eql( 90 );
            } );
        } );

        describe( '#PVector.degrees2radians', function() {
            var ret;

            before( function() {
                ret = PVector.degrees2radians( 90 );
            } );

            it( 'should return a Number', function() {
                expect( typeof ret ).to.eql( 'number' );
            } );

            it( 'should return the angle in radians', function() {
                expect( ret ).to.eql( Math.PI / 2 );
            } );
        } );

        describe( '#PVector.lerpVal', function() {
            var ret;

            before( function() {
                ret = PVector.lerpVal( 10, 20, 0.75 );
            } );

            it( 'should return a Number', function() {
                expect( typeof ret ).to.eql( 'number' );
            } );

            it( 'should return the lerped value', function() {
                expect( ret ).to.eql( 17.5 );
            } );
        } );
    
    } );

} );

describe( 'Prototype methods', function() {
    
    describe( 'Manipulation methods', function() {

        describe( '#clone()', function() {
            var vec1, vec2;

            before( function () {
                vec1 = new PVector( 42, 21 );
                vec2 = vec1.clone();
            } );

            it( 'should return a clone of a vector', function () {
                expect( vec2 ).to.be.an.instanceof( PVector );
                expect( vec2 ).to.not.equal( vec1 );
            } );

            it( 'should have the same values as the original', function () {
                expect( vec1.x ).to.equal( vec2.x );
                expect( vec1.y ).to.equal( vec2.y );
            } );
        } );

        describe( '#set()', function() {
            var v1, v2, v3, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector().set( x, y, z );
                v2 = PVector().set( [ x, y, z ] );
                v3 = PVector().set( { x: x, y: y, z: z } );
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have axis values set according to parameters', function() {
                expect( v1 ).to.have.property( 'x', x );
                expect( v1 ).to.have.property( 'y', y );
                expect( v1 ).to.have.property( 'z', z );

                expect( v2 ).to.have.property( 'x', x );
                expect( v2 ).to.have.property( 'y', y );
                expect( v2 ).to.have.property( 'z', z );

                expect( v3 ).to.have.property( 'x', x );
                expect( v3 ).to.have.property( 'y', y );
                expect( v3 ).to.have.property( 'z', z );
            } );
        } );

        describe( '#setX()', function() {
            var v1, v2, v3, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector().setX( x );
                v2 = PVector().setX( [ x, y, z ] );
                v3 = PVector().setX( { x: x, y: y, z: z } );
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have X axis values set according to parameters', function() {
                expect( v1 ).to.have.property( 'x', x );
                expect( v1 ).to.have.property( 'y', 0 );
                expect( v1 ).to.have.property( 'z', 0 );

                expect( v2 ).to.have.property( 'x', x );
                expect( v2 ).to.have.property( 'y', 0 );
                expect( v2 ).to.have.property( 'z', 0 );

                expect( v3 ).to.have.property( 'x', x );
                expect( v3 ).to.have.property( 'y', 0 );
                expect( v3 ).to.have.property( 'z', 0 );
            } );
        } );

        describe( '#setY()', function() {
            var v1, v2, v3, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector().setY( y );
                v2 = PVector().setY( [ x, y, z ] );
                v3 = PVector().setY( { x: x, y: y, z: z } );
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have Y axis values set according to parameters', function() {
                expect( v1 ).to.have.property( 'x', 0 );
                expect( v1 ).to.have.property( 'y', y );
                expect( v1 ).to.have.property( 'z', 0 );

                expect( v2 ).to.have.property( 'x', 0 );
                expect( v2 ).to.have.property( 'y', y );
                expect( v2 ).to.have.property( 'z', 0 );

                expect( v3 ).to.have.property( 'x', 0 );
                expect( v3 ).to.have.property( 'y', y );
                expect( v3 ).to.have.property( 'z', 0 );
            } );
        } );

        describe( '#setZ()', function() {
            var v1, v2, v3, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector().setZ( z );
                v2 = PVector().setZ( [ x, y, z ] );
                v3 = PVector().setZ( { x: x, y: y, z: z } );
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have Z axis values set according to parameters', function() {
                expect( v1 ).to.have.property( 'x', 0 );
                expect( v1 ).to.have.property( 'y', 0 );
                expect( v1 ).to.have.property( 'z', z );

                expect( v2 ).to.have.property( 'x', 0 );
                expect( v2 ).to.have.property( 'y', 0 );
                expect( v2 ).to.have.property( 'z', z );

                expect( v3 ).to.have.property( 'x', 0 );
                expect( v3 ).to.have.property( 'y', 0 );
                expect( v3 ).to.have.property( 'z', z );
            } );
        } );

        describe( '#invert()', function() {
            var v1, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector( x, y, z ).invert();
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have axis values inverted', function() {
                expect( v1 ).to.have.property( 'x', -x );
                expect( v1 ).to.have.property( 'y', -y );
                expect( v1 ).to.have.property( 'z', -z );
            } );
        } );

        describe( '#invertX()', function() {
            var v1, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector( x, y, z ).invertX();
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have X axis value inverted', function() {
                expect( v1 ).to.have.property( 'x', -x );
                expect( v1 ).to.have.property( 'y', y );
                expect( v1 ).to.have.property( 'z', z );
            } );
        } );

        describe( '#invertY()', function() {
            var v1, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector( x, y, z ).invertY();
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have Y axis value inverted', function() {
                expect( v1 ).to.have.property( 'x', x );
                expect( v1 ).to.have.property( 'y', -y );
                expect( v1 ).to.have.property( 'z', z );
            } );
        } );

        describe( '#invertZ()', function() {
            var v1, x, y, z;

            before( function() {
                x = 100;
                y = 200;
                z = 300;

                v1 = PVector( x, y, z ).invertZ();
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have Z axis value inverted', function() {
                expect( v1 ).to.have.property( 'x', x );
                expect( v1 ).to.have.property( 'y', y );
                expect( v1 ).to.have.property( 'z', -z );
            } );
        } );

        describe( '#norm()', function() {
            var v1;

            before( function() {
                v1 = PVector( 100, 200, 300 ).norm();
            } );

            it( 'should be an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have a magnitude of ~1', function() {
                expect( Math.abs( v1.x - 0.2672612419124244 ) ).to.lte( EPSILON );
                expect( Math.abs( v1.y - 0.5345224838248488 ) ).to.lte( EPSILON );
                expect( Math.abs( v1.z - 0.8017837257372732 ) ).to.lte( EPSILON );
                expect( Math.abs( v1.mag() - 1 ) ).to.lte( EPSILON );
            } );
        } );

    } );

    describe( 'Utility methods', function() {

        describe( '#mag()', function() {
            var v1, mag, mag2, mag3;

            before( function() {
                v1 = new PVector( 4, 3, 0 );
                mag = v1.mag();
                mag2 = v1.mag( 10 ).mag();
                mag3 = v1.mag( PVector(0,0,20) ).mag();
            } );

            it( 'should return the magnitude of the vector', function() {
                expect( mag ).to.eql( 5 );
            } );

            it( 'should set the magnitude if a value is passed', function() {
                expect( mag2 ).to.eql( 10 );
            } );

            it( 'should set the magnitude if a vector is passed', function() {
                expect( mag3 ).to.eql( 20 );
            } );
        } );

        /*describe( '#magSq()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#dist()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#distX()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#distY()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#distZ()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#distSq()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#angle2D()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

        /*describe( '#dot()', function() {
            var v1;

            before( function() {
                v1 = new PVector( 100, 200, 300 );
            } );

            it( 'should', function() {

            } );
        } );*/

    } );
    

    describe( 'Comparison methods', function() {

        describe('#isZero()', function () {
            var vec, vec2;

            before(function () {
                vec = new PVector( 0.00001, 0.00001, 0.00001 );
                vec2 = new PVector( 0.0001, 0.0001, 0.0001 );
            } );

            it('should return true if the vector is zero', function () {
                expect( vec.isZero() ).to.equal( true );
                expect( vec2.isZero() ).to.equal( false );
            } );
        } );

        describe( '#isEqual()', function () {
            var vec1, vec2, vec3;

            before(function () {
                vec1 = new PVector( 100, 100 );
                vec2 = new PVector( 100, 120 );
                vec3 = new PVector( 100, 120 );
            } );

            it('should return false if the vectors are not the same', function () {
                expect( vec1.isEqual( vec2 ) ).to.equal( false );
            } );
            it('should return true if the vectors are the same', function () {
                expect( vec2.isEqual( vec3 ) ).to.equal( true );
            } );
        } );

    } );

    describe( 'Conversion methods', function() { 

        describe( '#toString()', function() {
            var vec, ret;

            before( function() {
                vec = new PVector( 100, 200 );
                ret = vec.toString();
            } );

            it( 'should return a string representation of the vector', function () {
                expect( ret).to.be.a( 'string');
                expect(ret).to.have.string('{ x: 100, y: 200, z: 0 }');
            } );
        } );

        describe('#toObject()', function () {
            var vec, ret;

            before(function () {
                vec = new PVector(100, 200);
                ret = vec.toObject();
            });

            it('should return an object representation of the vector', function () {
                expect(ret).to.be.instanceof(Object);
                expect(ret).to.eql({ x: 100, y: 200, z: 0 });
            });
        });

        describe( '#toArray()', function () {
            var vec, ret;

            before(function () {
                vec = new PVector( 100, 200 );
                ret = vec.toArray();
            });

            it('should return an array representation of the vector', function () {
                expect(ret).to.be.instanceof(Array);
                expect(ret).to.eql([ 100, 200, 0 ]);
            });
        });
    
    } );

} );