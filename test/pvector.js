var expect = require( 'chai' ).expect;
var PVector = require( '../index' );

var EPSILON = 0.0001;

describe( 'static methods', function() {

    describe( 'new PVector', function() {
        var x, y, z;
        var vec1a, vec1b, vec2a, vec2b, vec3a, vec3b, vec4a, vec4b;

        before( function() {
            x = 100;
            y = 200;
            z = 300;

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

    describe( '#fromAngle()', function() {
        var angle, vec;

        before( function() {
            angle = Math.random() * 2 * Math.PI;
            vec = PVector.fromAngle( angle );
        } );

        it( 'should return an instance of PVector', function() {
            expect( vec ).to.be.an.instanceof( PVector );
        } );

        it( 'should have axis from angle', function() {
            expect( Math.abs( vec.x - Math.cos( angle ) ) ).to.lte( EPSILON );
            expect( Math.abs( vec.y - Math.sin( angle ) ) ).to.lte( EPSILON );
        } );
    } );

    describe( '#random2D()', function() {
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

    describe( '#random3D()', function() {
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

} );
