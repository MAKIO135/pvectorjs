/**
 * # PVectorjs - A JavaScript vector class for common vector operations based on Processing.js PVector class and Victor.js
 */

/**
 * Constructor. Works without the `new` keyword
 *
 * ### Examples:
 *     var vec1a = new PVector( 100, 50 );
 *     var vec1b = new PVector( 100, 50, 12 );
 *
 *     var vec2a = PVector( 42, 17 );
 *     var vec2b = PVector( 42, 17, 10 );
 *
 *     // Create a new vector from an array
 *     var vec3b = PVector( [ 4, 12 ] );
 *     var vec3d = PVector( [ 4, 12, 5 ] );
 *
 *     // Create a new vector from an object
 *     var vec4b = PVector( { x: 30, y: 34 } );
 *     var vec4d = PVector( { x: 30, y: 34, z: 20 } );
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @param {Number} z Value of the z axis
 * @param {Array} arr Array of 2 or 3 values
 * @param {Object} obj Object with x, y (and z) properties
 * @return {PVector}
 * @api public
 */
function PVector( vec_or_arr_or_x, y, z ) {
    if( arguments.length === 1 ){
        return new PVector( vec_or_arr_or_x.x || vec_or_arr_or_x[ 0 ] || 0, vec_or_arr_or_x.y || vec_or_arr_or_x[ 1 ] || 0, vec_or_arr_or_x.z || vec_or_arr_or_x[ 2 ] || 0 );
    }
    if ( ! ( this instanceof PVector ) ) {
        return new PVector( vec_or_arr_or_x || 0, y || 0, z || 0 );
    }

    /**
     * The X axis
     *
     * ### Examples:
     *     var vec = new PVector(42, 21);
     *
     *     vec.x;
     *     // => 42
     *
     * @api public
     */
    this.x = vec_or_arr_or_x || 0;

    /**
     * The Y axis
     *
     * ### Examples:
     *     var vec = new PVector(42, 21);
     *
     *     vec.y;
     *     // => 21
     *
     * @api public
     */
    this.y = y || 0;

    /**
     * The Z axis
     *
     * ### Examples:
     *     var vec = new PVector(42, 21, 15);
     *
     *     vec.z;
     *     // => 15
     *
     * @api public
     */
    this.z = z || 0;
}

/**
 * # Static Methods
 */

/**
 * Calculates and returns a new 2D unit vector from the specified angle value (in radians).
 *
 * ### Examples:
 *     var vec = PVector.fromAngle( 0.01 );
 *
 *     console.log( vec.toString() );
 *     // => "[ 0.99995, 0.009999833, 0.0 ]"
 *
 * @name PVector.fromAngle
 * @param {Number} angle The angle in radians
 * @return {PVector}

 * @api public
 */
PVector.fromAngle = function( angle ) {
    return new PVector( Math.cos( angle ), Math.sin( angle ) );
};

/**
 *  Returns a new 2D unit vector with a random direction.
 *
 * ### Examples:
 *     var vec = PVector.random2D();
 *
 *     console.log( vec.toString() );
 *     // => "[ -0.75006354, -0.6613658, 0.0 ]"
 *
 * @name PVector.random2D
 * @return {PVector}

 * @api public
 */
PVector.random2D = function() {
    return PVector.fromAngle( Math.random() * Math.PI * 2 );
};

/**
 *  Returns a new 3D unit vector with a random direction.
 *
 * ### Examples:
 *     var vec = PVector.random2D();
 *
 *     console.log( vec.toString() );
 *     // => "[ 0.6091097, -0.22805278, -0.7595902 ]"
 *
 * @name PVector.random3D
 * @return {PVector}

 * @api public
 */
PVector.random3D = function() {
    var angle = Math.random() * Math.PI * 2;
    var vz = Math.random() * 2 - 1;
    var mult = Math.sqrt( 1 - vz * vz );
    var vx = mult * Math.cos( angle );
    var vy = mult * Math.sin( angle );

    return new PVector( vx, vy, vz );
};

exports = module.exports = PVector;
