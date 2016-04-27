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

            it( 'should return an instance of PVector', function() {
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
                vec1 = PVector( 42, 21 );
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
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

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have a magnitude of ~1', function() {
                expect( Math.abs( v1.x - 0.2672612419124244 ) ).to.lte( EPSILON );
                expect( Math.abs( v1.y - 0.5345224838248488 ) ).to.lte( EPSILON );
                expect( Math.abs( v1.z - 0.8017837257372732 ) ).to.lte( EPSILON );
                expect( Math.abs( v1.mag() - 1 ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#setMag()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).setMag( 10 );
                v2 = PVector( 4, 5, 3 ).setMag( PVector( 11, 0, 0 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the vector\'s magnitude to the passed value or magnitude of the passed vector', function() {
                expect( Math.abs( 10 - v1.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 11 - v2.mag() ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#minMag()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 4, 5, 3 ).minMag( 10 );
                v2 = PVector( 11, 0, 0 ).minMag( 10 );
                v3 = PVector( 4, 5, 3 ).minMag( PVector( 0, 0, 15 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should modify the vector if its magnitude is less than the passed value or magnitude of the passed vector', function() {
                expect( Math.abs( 10 - v1.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 11 - v2.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 15 - v3.mag() ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#maxMag()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 4, 5, 3 ).maxMag( 5 );
                v2 = PVector( 11, 0, 0 ).maxMag( 15 );
                v3 = PVector( 4, 5, 3 ).maxMag( PVector( 0, 0, 5 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should modify the vector if its magnitude is greater than the passed value', function() {
                expect( Math.abs( 5 - v1.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 11 - v2.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 5 - v3.mag() ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#clampMag()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 4, 5, 3 ).clampMag( 10, 15 );
                v2 = PVector( 11, 0, 0 ).clampMag( 8, 10 );
                v3 = PVector( 54, 5, 3 ).clampMag( PVector( 0, 0, 15 ), PVector( 0, 35, 0 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should constrain the vector\'s magnitude between the passed values or magnitudes of the passed vectors', function() {
                expect( Math.abs( 10 - v1.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 10 - v2.mag() ) ).to.lte( EPSILON );
                expect( Math.abs( 35 - v3.mag() ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#min()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).min( 4 );
                v2 = PVector( 4, 5, 3 ).min( PVector( 2, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the minimum value for each axis', function() {
                    expect( v1.toArray() ).to.eql( [ 4, 5, 4 ] );
                    expect( v2.toArray() ).to.eql( [ 4, 6, 4 ] );
            } );
        } );

        describe( '#minX()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).minX( 3 );
                v2 = PVector( 4, 5, 3 ).minX( PVector( 5, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the minimum value for the X axis', function() {
                    expect( v1.x ).to.eql( 4 );
                    expect( v2.x ).to.eql( 5 );
            } );
        } );

        describe( '#minY()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).minY( 3 );
                v2 = PVector( 4, 5, 3 ).minY( PVector( 5, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the minimum value for the Y axis', function() {
                    expect( v1.y ).to.eql( 5 );
                    expect( v2.y ).to.eql( 6 );
            } );
        } );

        describe( '#minZ()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).minZ( 3 );
                v2 = PVector( 4, 5, 3 ).minZ( PVector( 5, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the minimum value for the Z axis', function() {
                    expect( v1.z ).to.eql( 3 );
                    expect( v2.z ).to.eql( 4 );
            } );
        } );

        describe( '#max()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).max( 4 );
                v2 = PVector( 4, 5, 3 ).max( PVector( 2, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the maximum value for each axis', function() {
                    expect( v1.toArray() ).to.eql( [ 4, 4, 3 ] );
                    expect( v2.toArray() ).to.eql( [ 2, 5, 3 ] );
            } );
        } );

        describe( '#maxX()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).maxX( 3 );
                v2 = PVector( 4, 5, 3 ).maxX( PVector( 5, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the maximum value for the X axis', function() {
                    expect( v1.x ).to.eql( 3 );
                    expect( v2.x ).to.eql( 4 );
            } );
        } );

        describe( '#maxY()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).maxY( 3 );
                v2 = PVector( 4, 5, 3 ).maxY( PVector( 5, 6, 4 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the maximum value for the Y axis', function() {
                    expect( v1.y ).to.eql( 3 );
                    expect( v2.y ).to.eql( 5 );
            } );
        } );

        describe( '#maxZ()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 5, 3 ).maxZ( 3 );
                v2 = PVector( 4, 5, 3 ).maxZ( PVector( 5, 6, 2 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should set the maximum value for the Z axis', function() {
                    expect( v1.z ).to.eql( 3 );
                    expect( v2.z ).to.eql( 2 );
            } );
        } );

        describe( '#clamp()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 8, 3 ).clamp( 4, 6 );
                v2 = PVector( 4, 8, 3 ).clamp( PVector( 2, 6, 4 ), PVector( 3, 7, 5 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should constrain the value of each axis', function() {
                    expect( v1.toArray() ).to.eql( [ 4, 6, 4 ] );
                    expect( v2.toArray() ).to.eql( [ 3, 7, 4 ] );
            } );
        } );

        describe( '#clampX()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 8, 3 ).clampX( 4, 6 );
                v2 = PVector( 4, 8, 3 ).clampX( PVector( 2, 6, 4 ), PVector( 3, 7, 5 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should constrain the value of X axis', function() {
                    expect( v1.toArray() ).to.eql( [ 4, 8, 3 ] );
                    expect( v2.toArray() ).to.eql( [ 3, 8, 3 ] );
            } );
        } );

        describe( '#clampY()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 8, 3 ).clampY( 4, 6 );
                v2 = PVector( 4, 8, 3 ).clampY( PVector( 2, 6, 4 ), PVector( 3, 7, 5 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should constrain the value of Y axis', function() {
                    expect( v1.toArray() ).to.eql( [ 4, 6, 3 ] );
                    expect( v2.toArray() ).to.eql( [ 4, 7, 3 ] );
            } );
        } );

        describe( '#clampZ()', function() {
            var v1, v2;

            before( function() {
                v1 = PVector( 4, 8, 3 ).clampZ( 4, 6 );
                v2 = PVector( 4, 8, 3 ).clampZ( PVector( 2, 6, 4 ), PVector( 3, 7, 5 ) );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
                expect( v2 ).to.be.an.instanceof( PVector );
            } );

            it( 'should constrain the value of Z axis', function() {
                    expect( v1.toArray() ).to.eql( [ 4, 8, 4 ] );
                    expect( v2.toArray() ).to.eql( [ 4, 8, 4 ] );
            } );
        } );

        describe( '#rotateTo()', function() {
            var v1, mag;

            before( function() {
                v1 = PVector( 10, -10, 0 );
                mag = v1.mag();
                v1.rotateTo( Math.PI / 4 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should rotate the vector to the angle passed while keeping its magnitude', function() {
                expect( v1.toFixed( 5 ).toArray() ).to.eql( [ 10, 10, 0 ] );
            } );
        } );

        describe( '#rotateBy()', function() {
            var v1;

            before( function() {
                v1 = PVector( 10, 10, 0 ).rotateBy( Math.PI / 2 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add the angle passed to the rotation of the vector while keeping its magnitude', function() {
                expect( v1.toFixed( 5 ).toArray() ).to.eql( [ -10, 10, 0 ] );
            } );
        } );

        describe( '#round()', function() {
            var v1;

            before( function() {
                v1 = PVector( 4.213, 5.455, 3.687 ).round();
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should round axis values', function() {
                expect( v1.toArray() ).to.eql( [ 4, 5, 4 ] );
            } );
        } );

        describe( '#floor()', function() {
            var v1;

            before( function() {
                v1 = PVector( 4.213, 5.455, 3.687 ).floor();
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should floor axis values', function() {
                expect( v1.toArray() ).to.eql( [ 4, 5, 3 ] );
            } );
        } );

        describe( '#ceil()', function() {
            var v1;

            before( function() {
                v1 = PVector( 4.213, 5.455, 3.687 ).ceil();
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should ceil axis values', function() {
                expect( v1.toArray() ).to.eql( [ 5, 6, 4 ] );
            } );
        } );

        describe( '#toFixed()', function() {
            var v1;

            before( function() {
                v1 = PVector( 4.211233, 5.445645, 3.687527 ).toFixed( 3 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should round axis values to a certain precision', function() {
                expect( v1.toArray() ).to.eql( [ 4.211, 5.446, 3.688 ] );
            } );
        } );

        describe( '#zero()', function() {
            var v1;

            before( function() {
                v1 = PVector( 4.211233, 5.445645, 3.687527 ).zero();
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should have axis values equal to 0', function() {
                expect( v1.toArray() ).to.eql( [ 0, 0, 0 ] );
            } );
        } );

    } );

    describe( 'Vector operations methods', function() {

        describe( '#add()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().add( PVector( 20, 30, 10 ) );
                v3 = v2.clone().add( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add another vector\'s axis or the given scalar to each vector\'s axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 30, y: 40, z: 35 }' );
                expect( v3.toString() ).to.eql( '{ x: 35, y: 45, z: 40 }' );
            } );
        } );

        describe( '#addX()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().addX( PVector( 20, 30, 10 ) );
                v3 = v2.clone().addX( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add another vector\'s X axis or the given scalar to this vector\'s X axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 30, y: 10, z: 25 }' );
                expect( v3.toString() ).to.eql( '{ x: 35, y: 10, z: 25 }' );
            } );
        } );

        describe( '#addY()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().addY( PVector( 20, 30, 10 ) );
                v3 = v2.clone().addY( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 10, y: 40, z: 25 }' );
                expect( v3.toString() ).to.eql( '{ x: 10, y: 45, z: 25 }' );
            } );
        } );

        describe( '#addZ()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().addZ( PVector( 20, 30, 10 ) );
                v3 = v2.clone().addZ( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 10, y: 10, z: 35 }' );
                expect( v3.toString() ).to.eql( '{ x: 10, y: 10, z: 40 }' );
            } );
        } );

        describe( '#sub()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().sub( PVector( 20, 30, 10 ) );
                v3 = v2.clone().sub( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should substract another vector\'s axis or the given scalar from each vector\'s axis', function() {
                expect( v2.toString() ).to.eql( '{ x: -10, y: -20, z: 15 }' );
                expect( v3.toString() ).to.eql( '{ x: -15, y: -25, z: 10 }' );
            } );
        } );

        describe( '#subX()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().subX( PVector( 20, 30, 10 ) );
                v3 = v2.clone().subX( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should substract another vector\'s X axis or the given scalar from this vector\'s X axis', function() {
                expect( v2.toString() ).to.eql( '{ x: -10, y: 10, z: 25 }' );
                expect( v3.toString() ).to.eql( '{ x: -15, y: 10, z: 25 }' );
            } );
        } );

        describe( '#subY()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().subY( PVector( 20, 30, 10 ) );
                v3 = v2.clone().subY( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 10, y: -20, z: 25 }' );
                expect( v3.toString() ).to.eql( '{ x: 10, y: -25, z: 25 }' );
            } );
        } );

        describe( '#subZ()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                v2 = v1.clone().subZ( PVector( 20, 30, 10 ) );
                v3 = v2.clone().subZ( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 10, y: 10, z: 15 }' );
                expect( v3.toString() ).to.eql( '{ x: 10, y: 10, z: 10 }' );
            } );
        } );

        describe( '#mult()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 1, 2, 5 );
                v2 = v1.clone().mult( PVector( 2, 3, 2 ) );
                v3 = v2.clone().mult( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should multiply another vector\'s axis or the given scalar with each vector\'s axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 2, y: 6, z: 10 }' );
                expect( v3.toString() ).to.eql( '{ x: 10, y: 30, z: 50 }' );
            } );
        } );

        describe( '#multX()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 1, 2, 5 );
                v2 = v1.clone().multX( PVector( 2, 3, 2 ) );
                v3 = v2.clone().multX( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should substract another vector\'s X axis or the given scalar from this vector\'s X axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 2, y: 2, z: 5 }' );
                expect( v3.toString() ).to.eql( '{ x: 10, y: 2, z: 5 }' );
            } );
        } );

        describe( '#multY()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 1, 2, 5 );
                v2 = v1.clone().multY( PVector( 2, 3, 2 ) );
                v3 = v2.clone().multY( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should substract another vector\'s Y axis or the given scalar from this vector\'s Y axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 1, y: 6, z: 5 }' );
                expect( v3.toString() ).to.eql( '{ x: 1, y: 30, z: 5 }' );
            } );
        } );

        describe( '#multZ()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 1, 2, 5 );
                v2 = v1.clone().multZ( PVector( 2, 3, 2 ) );
                v3 = v2.clone().multZ( 5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should substract another vector\'s Y axis or the given scalar from this vector\'s Y axis', function() {
                expect( v2.toString() ).to.eql( '{ x: 1, y: 2, z: 10 }' );
                expect( v3.toString() ).to.eql( '{ x: 1, y: 2, z: 50 }' );
            } );
        } );

        describe( '#div()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 20, 30, 10 );
                v2 = v1.clone().div( PVector( 10, 10, 5 ) );
                v3 = v2.clone().div( 2 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should divide this vector\'s axis by another\'s ones or by the given scalar', function() {
                expect( v2.toString() ).to.eql( '{ x: 2, y: 3, z: 2 }' );
                expect( v3.toString() ).to.eql( '{ x: 1, y: 1.5, z: 1 }' );
            } );
        } );

        describe( '#divX()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 20, 30, 10 );
                v2 = v1.clone().divX( PVector( 10, 10, 5 ) );
                v3 = v2.clone().divX( 2 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should divide this vector\'s X axis by another one\'s or by the given scalar', function() {
                expect( v2.toString() ).to.eql( '{ x: 2, y: 30, z: 10 }' );
                expect( v3.toString() ).to.eql( '{ x: 1, y: 30, z: 10 }' );
            } );
        } );

        describe( '#divY()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 20, 30, 10 );
                v2 = v1.clone().divY( PVector( 10, 10, 5 ) );
                v3 = v2.clone().divY( 2 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should divide this vector\'s Y axis by another one\'s or by the given scalar', function() {
                expect( v2.toString() ).to.eql( '{ x: 20, y: 3, z: 10 }' );
                expect( v3.toString() ).to.eql( '{ x: 20, y: 1.5, z: 10 }' );
            } );
        } );

        describe( '#divZ()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 20, 30, 10 );
                v2 = v1.clone().divZ( PVector( 10, 10, 5 ) );
                v3 = v2.clone().divZ( 2 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v2 ).to.be.an.instanceof( PVector );
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should divide this vector\'s Z axis by another one\'s or by the given scalar', function() {
                expect( v2.toString() ).to.eql( '{ x: 20, y: 30, z: 2 }' );
                expect( v3.toString() ).to.eql( '{ x: 20, y: 30, z: 1 }' );
            } );
        } );

        describe( '#lerp()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 15, 20 );
                v2 = v1.clone().lerp( PVector( 20, 20, 10 ), 0.5 );
                v3 = v1.clone().lerp( 30, 0.5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should perform a linear interpolation towards another vector\'s axis', function() {
                expect( v2.toArray() ).to.eql( [ 15, 17.5, 15 ] );
                expect( v3.toArray() ).to.eql( [ 20, 22.5, 25 ] );
            } );
        } );

        describe( '#lerpX()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 15, 20 );
                v2 = v1.clone().lerpX( PVector( 20, 20, 10 ), 0.5 );
                v3 = v1.clone().lerpX( 30, 0.5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should perform a linear interpolation towards another vector\'s X axis', function() {
                expect( v2.toArray() ).to.eql( [ 15, 15, 20 ] );
                expect( v3.toArray() ).to.eql( [ 20, 15, 20 ] );
            } );
        } );
        
        describe( '#lerpY()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 15, 20 );
                v2 = v1.clone().lerpY( PVector( 20, 20, 10 ), 0.5 );
                v3 = v1.clone().lerpY( 30, 0.5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should perform a linear interpolation towards another vector\'s Y axis', function() {
                expect( v2.toArray() ).to.eql( [ 10, 17.5, 20 ] );
                expect( v3.toArray() ).to.eql( [ 10, 22.5, 20 ] );
            } );
        } );
        
        describe( '#lerpZ()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 15, 20 );
                v2 = v1.clone().lerpZ( PVector( 20, 20, 10 ), 0.5 );
                v3 = v1.clone().lerpZ( 30, 0.5 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should perform a linear interpolation towards another vector\'s Z axis', function() {
                expect( v2.toArray() ).to.eql( [ 10, 15, 15 ] );
                expect( v3.toArray() ).to.eql( [ 10, 15, 25 ] );
            } );
        } );

        describe( '#cross()', function() {
            var v1, v2, v3;

            before( function() {
                v1 = PVector( 10, 20, 2 );
                v2 = PVector( 60, 80, 6 );
                v3 = v1.clone().cross( v2 );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v3 ).to.be.an.instanceof( PVector );
            } );

            it( 'should return a vector composed of the cross product between two vectors.', function() {
                expect( v3.toArray() ).to.eql( [ -40, 360, -24800 ]);
            } );
        } );

        describe( '#projectOnto()', function() {
            var vec1, vec2, var3, selfRet, perpRet, paraRet, middleRet;

            before(function () {
                vec1 = new PVector(100, 0);
                vec2 = new PVector(100, 100);
                vec3 = new PVector(0,100);
                vec4 = new PVector(200,0);
                selfRet = vec1.projectOnto(vec1);
                perpRet = vec1.clone().projectOnto(vec3);
                paraRet = vec1.clone().projectOnto(vec4);
                middleRet = vec1.clone().projectOnto(vec2);
            });

            it('should be chainable', function () {
                expect(selfRet).to.equal(vec1);
            });

            it('should project same vector onto itself without change', function() {
                expect(selfRet).to.have.property('x',100);
                expect(selfRet).to.have.property('y',0);
            });

            it('should project orthogonal vectors into a zero-length vector', function () {
                expect(perpRet).to.have.property('x',0);
                expect(perpRet).to.have.property('y',0);
            });

            it('should project parallel vectors into a vector of same direction and magnitude', function () {
                expect(paraRet).to.have.property('x', 100);
                expect(paraRet).to.have.property('y', 0);
            });

            it('should project non-orthogonal non-parallel vectors correctly', function () {
                expect(middleRet).to.have.property('x', 50);
                expect(middleRet).to.have.property('y', 50);
            });
        } );

        describe( '#func()', function() {
            var v1;

            before( function() {
                function double( vec ){
                    vec.x *= 2;
                    vec.y *= 2;
                    vec.z *= 2;
                };

                v1 = PVector( 4, 5, 3 ).func( double );
            } );

            it( 'should return an instance of PVector', function() {
                expect( v1 ).to.be.an.instanceof( PVector );
            } );

            it( 'should apply a function taking a vector as argument to this vector', function() {
                expect( v1.toArray() ).to.eql( [ 8, 10, 6 ]);
            } );
        } );

    } );

    describe( 'Utility methods', function() {

        describe( '#mag()', function() {
            var v1, mag, mag2, mag3;

            before( function() {
                v1 = PVector( 4, 3, 0 );
                mag = v1.mag();
                mag2 = v1.mag( 10 ).mag();
                mag3 = v1.mag( PVector(0,0,20) ).mag();
            } );

            it( 'should return a Number', function() {
                expect( typeof mag ).to.eql( 'number' );
                expect( typeof mag2 ).to.eql( 'number' );
                expect( typeof mag3 ).to.eql( 'number' );
            } );

            it( 'should set the magnitude if a value or a vector is passed', function() {
                expect( mag ).to.eql( 5 );
                expect( mag2 ).to.eql( 10 );
                expect( mag3 ).to.eql( 20 );
            } );
        } );

        describe( '#magSq()', function() {
            var v1, magSq;

            before( function() {
                v1 = PVector( 10, 10, 25 );
                magSq = v1.magSq();
            } );

            it( 'should return a Number', function() {
                expect( typeof magSq ).to.eql( 'number' );
            } );

            it( 'should return the squared magnitude of the vector', function() {
                expect( magSq ).to.eql( 825 );
            } );
        } );

        describe( '#dist()', function() {
            var v1,  v2, dist;

            before( function() {
                v1 = new PVector( 100, 50 );
                v2 = new PVector( 200, 60 );
                dist = v1.dist( v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof dist ).to.eql( 'number' );
            } );

            it( 'should return the euclidean distance between this vector and another', function() {
                expect( parseFloat( dist.toFixed( 1 ) ) ).to.eql( 100.5 );
            } );
        } );

        describe( '#distX()', function() {
            var v1,  v2, dist;

            before( function() {
                v1 = new PVector( 100, 50, 30 );
                v2 = new PVector( 200, 60, 10 );
                dist = v1.distX( v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof dist ).to.eql( 'number' );
            } );

            it( 'should return the distance on X axis between this vector and another', function() {
                expect( dist ).to.eql( 100 );
            } );
        } );

        describe( '#distY()', function() {
            var v1,  v2, dist;

            before( function() {
                v1 = new PVector( 100, 50, 30 );
                v2 = new PVector( 200, 60, 10 );
                dist = v1.distY( v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof dist ).to.eql( 'number' );
            } );

            it( 'should return the distance on Y axis between this vector and another', function() {
                expect( dist ).to.eql( 10 );
            } );
        } );

        describe( '#distZ()', function() {
            var v1,  v2, dist;

            before( function() {
                v1 = new PVector( 100, 50, 30 );
                v2 = new PVector( 200, 60, 10 );
                dist = v1.distZ( v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof dist ).to.eql( 'number' );
            } );

            it( 'should return the distance on Z axis between this vector and another', function() {
                expect( dist ).to.eql( -20 );
            } );
        } );

        describe( '#distSq()', function() {
            var v1,  v2, dist;

            before( function() {
                v1 = new PVector( 100, 50, 30 );
                v2 = new PVector( 200, 60, 20 );
                dist = v1.distSq( v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof dist ).to.eql( 'number' );
            } );

            it( 'should return the squared distance between this vector and another', function() {
                expect( dist ).to.eql( 10100 );
            } );
        } );

        describe( '#angle2D()', function() {
            var v1, angle;

            before( function() {
                v1 = PVector( 5, 5 );
                angle = v1.angle2D();
            } );

            it( 'should return a Number', function() {
                expect( typeof angle ).to.eql( 'number' );
            } );

            it( 'should return the angle 2D of the vector', function() {
                expect( Math.abs( Math.PI / 4 - angle ) ).to.lte( EPSILON );
            } );
        } );

        describe( '#dot()', function() {
            var v1, v2, dot;

            before( function() {
                v1 = new PVector( 100, 50 );
                v2 = new PVector( 200, 60 );
                dot = v1.dot( v2 );
            } );

            it( 'should return a Number', function() {
                expect( typeof dot ).to.eql( 'number' );
            } );

            it( 'should return the dot product of this vector and another', function() {
                expect( dot ).to.eql( 23000 );
            } );
        } );

    } );
    
    describe( 'Comparison methods', function() {

        describe('#isZero()', function () {
            var vec, vec2;

            before(function () {
                vec = PVector( 0.00001, 0.00001, 0.00001 );
                vec2 = PVector( 0.0001, 0.0001, 0.0001 );
            } );

            it('should return true if the vector is zero', function () {
                expect( vec.isZero() ).to.equal( true );
                expect( vec2.isZero() ).to.equal( false );
            } );
        } );

        describe( '#isEqual()', function () {
            var vec1, vec2, vec3;

            before(function () {
                vec1 = PVector( 100, 100 );
                vec2 = PVector( 100, 120 );
                vec3 = PVector( 100, 120 );
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
                vec = PVector( 100, 200 );
                ret = vec.toString();
            } );

            it( 'should return a string representation of the vector', function () {
                expect( ret ).to.be.a( 'string' );
                expect( ret ).to.have.string( '{ x: 100, y: 200, z: 0 }' );
            } );
        } );

        describe( '#toObject()', function () {
            var vec, ret;

            before( function() {
                vec = PVector( 100, 200 );
                ret = vec.toObject();
            } );

            it( 'should return an object representation of the vector', function() {
                expect( ret ).to.be.instanceof( Object );
                expect( ret ).to.eql( { x: 100, y: 200, z: 0 } );
            } );
        } );

        describe( '#toArray()', function () {
            var vec, ret;

            before( function() {
                vec = PVector( 100, 200 );
                ret = vec.toArray();
            } );

            it( 'should return an array representation of the vector', function() {
                expect( ret ).to.be.instanceof( Array );
                expect( ret ).to.eql( [ 100, 200, 0 ] );
            } );
        } );
    
    } );

} );