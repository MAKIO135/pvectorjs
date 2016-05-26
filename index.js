/**
 * # PVectorjs - A JavaScript vector class for common vector operations based on Processing.js PVector class and PVector.js
 */

/**
 * Works without the `new` keyword.
 *
 * ### Examples:
 *     var vec1 = new PVector( 100, 50 );
 *     console.log( vec1.toString() );
 *     // => "{ x: 100, y: 50, z: 0 }"
 *
 *     // Use constructor without the new keyword:
 *     var vec2 = PVector( 42, 17, 10 );
 *     console.log( vec2.toString() );
 *     // => "{ x: 42, y: 17, z: 10 }"
 *
 *     // Create a new vector from an object:
 *     var vec4 = PVector( { x: 30, y: 34, z: 20 } );
 *     console.log( vec4.toString() );
 *     // => "{ x: 30, y: 34, z: 20 }"
 *
 *     // Create a new 0 PVector:
 *     var v = PVector();
 *     console.log( v.toString() );
 *     // => "{ x: 0, y: 0, z: 0 }"
 *
 * @param {Object_or_Number} vec_or_x Can be an Object with x, y (and z) properties or the value of the X axis
 * @param {Number} y Value of the Y axis
 * @param {Number} z Value of the Z axis
 * @return {PVector}
 * @api public
 */
function PVector( vec_or_x, y, z ) {
    if( arguments.length === 1 ){
        return new PVector(
            vec_or_x.x || 0,
            vec_or_x.y || 0,
            vec_or_x.z || 0
        );
    }
    if ( ! ( this instanceof PVector ) ) {
        return new PVector( vec_or_x || 0, y || 0, z || 0 );
    }

    /**
     * The X axis
     *
     * ### Examples:
     *     var vec = new PVector(42, 21, 15);
     *
     *     vec.x;
     *     // => 42
     *
     * @api public
     */
    this.x = vec_or_x || 0;

    /**
     * The Y axis
     *
     * ### Examples:
     *     var vec = new PVector(42, 21, 15);
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
 * ___
 * # Static Methods
 */

/**
 * ## Instanciation Methods
 */

/**
 *  Returns a new 2D unit vector with a random direction.
 *
 * ### Examples:
 *     var vec = PVector.random2D();
 *
 *     console.log( vec.toArray() );
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
 *     console.log( vec.toArray() );
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
 * ## Utility Methods
 */

/**
 * Calculates and returns the angle (in radians) between two vectors.
 *
 * ### Examples:
 *     var v1 = new PVector( 10, 20 );
 *     var v2 = new PVector( 60, 80 );
 *
 *     var angle = PVector.angleBetween( v1, v2 );
 *     console.log( angle );
 *     // => "0.1798535"
 *
 * @name PVector.angleBetween
 * @param {PVector} v1 Any variable of type PVector
 * @param {PVector} v2 Any variable of type PVector
 * @return {Number}
 * @api public
 */
PVector.angleBetween = function( v1, v2 ) {
    return Math.acos( v1.dot( v2 ) / Math.sqrt( v1.magSq() * v2.magSq() ) );
};

/**
 * Converts a value in radians to a value in degrees.
 *
 * ### Examples:
 *     var angleRadians = Math.PI / 2;
 *     var angleDegrees = PVector.radians2degrees( angleRadians );
 *     console.log( angleDegrees );
 *     // => "90"
 *
 * @name PVector.radian2degrees
 * @param {Number} radians An angle in radians
 * @return {Number}
 * @api public
 */
PVector.radians2degrees = function( radians ) {
    return radians * ( 180 / Math.PI );
};

/**
 * Converts a value in degrees to a value in radians.
 *
 * ### Examples:
 *     var angleDegrees = 90;
 *     var angleRadians = PVector.degrees2radian( angleDegrees );
 *     console.log( angleRadians );
 *     // => "1.5707963267948966"
 *
 * @name PVector.degrees2radians
 * @param {Number} degrees An angle in degrees
 * @return {Number}
 * @api public
 */
PVector.degrees2radians = function( degrees ) {
    return degrees / ( 180 / Math.PI );
};

/**
 * Calculates a number between two numbers at a specific increment. The amount parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.
 *
 * ### Examples:
 *     var foo = PVector.lerpVal( 10, 20, 0.75 );
 *
 *     console.log( foo );
 *     // => "17.5"
 *
 * @name PVector.lerpVal
 * @param {Number} a First value
 * @param {Number} b Second value
 * @param {Number} amount Number between 0.0 and 1.0
 * @return {Number}
 * @api public
 */
PVector.lerpVal = function( a, b, amount ) {
    return a + ( b - a ) * amount;
};


/**
 * ___
 * # PVector.prototype Methods
 */

/**
 * @api private
 */
PVector.prototype = {

    /**
     * ## Manipulation methods
     *
     * These functions are chainable.
     */

    /**
     * Creates a clone of this vector.
     *
     * ### Examples:
     *     var vec1 = PVector(10, 10);
     *     var vec2 = vec1.clone();
     *
     *     vec2.toString();
     *     // => "{ x: 10, y: 10 }"
     *
     * @name PVector.prototype.clone
     * @return {PVector} cloneVec A clone of the vector
     * @api public
     */
    clone: function() {
        return new PVector( this.x, this.y, this.z );
    },

    /**
     * Sets this vector's components from an object, a value or another vector by copying its components
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 50 );
     *     var vec2 = new PVector( 20, 20, 20 );
     *     vec2.set( vec1 );
     *
     *     console.log( vec2.toString() );
     *     // => "{ x: 10, y: 10, z: 50 }"
     *
     * @name PVector.prototype.set
     * @param {Object_or_Number} vec_or_x Can be an Object with x, y (and z) properties or the value of the X axis
     * @param {Number} y Value of the y axis
     * @param {Number} z Value of the z axis
     * @return {PVector} `this`
     * @api public
     */
    set: function( vec_or_x, y, z ) {
        if ( arguments.length === 1 ) {
            this.set( vec_or_x.x || 0,
                vec_or_x.y || 0,
                vec_or_x.z || 0 );
        } else {
            this.x = vec_or_x || 0;
            this.y = y || 0;
            this.z = z || 0;
        }
        return this;
    },

    /**
     * Sets this vector's X component from an object, a value or another vector by copying its X component.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10 );
     *     var vec2 = new PVector( 20, 20 );
     *     vec2.setX( vec1 );
     *     // vec2.setX( 10 );
     *
     *     console.log( vec2.toString() );
     *     // => "{ x: 10, y: 20, z: 0 }"
     *
     * @name PVector.prototype.setX
     * @param {Object_or_Number} vec_or_x Can be an Object with x, y (and z) properties, or the value of the X axis
     * @return {PVector} `this`
     * @api public
     */
    setX: function( vec_or_x ) {
        if ( typeof vec_or_x === 'number' ) { this.x = vec_or_x; }
        else this.x = vec_or_x.x;
        return this;
    },

    /**
     * Same as setX with Y axis.
     *
     * @name PVector.prototype.setY
     * @param {Object_or_Number} vec_or_y Can be an Object with x, y (and z) properties, or the value of the Y axis
     * @return {PVector} `this`
     * @api public
     */
    setY: function( vec_or_y ) {
        if ( typeof vec_or_y === 'number' ) { this.y = vec_or_y; }
        else this.y = vec_or_y.y;
        return this;
    },

    /**
     * Same as setX with Z axis.
     *
     * @name PVector.prototype.setZ
     * @param {Object_or_Number} vec_or_z Can be an Object with x, y and z properties, or the value of the Z axis
     * @return {PVector} `this`
     * @api public
     */
    setZ: function( vec_or_z ) {
        if ( typeof vec_or_z === 'number' ) { this.z = vec_or_z; }
        else this.z = vec_or_z.z;
        return this;
    },

    /**
     * Inverts each axis.
     *
     * ### Examples:
     *     var vec = new PVector(100, 50);
     *
     *     vec.invert();
     *     vec.toString();
     *     // => x:-100, y:-50
     *
     * @name PVector.prototype.invert
     * @return {PVector} `this`
     * @api public
     */
    invert: function() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this;
    },

    /**
     * Inverts the X axis.
     *
     * ### Examples:
     *     var vec = new PVector(100, 50);
     *
     *     vec.invertX();
     *     vec.toString();
     *     // => x:-100, y:50
     *
     * @name PVector.prototype.invertX
     * @return {PVector} `this`
     * @api public
     */
    invertX: function() {
        this.x *= -1;
        return this;
    },

    /**
     * Same as invertX with y axis.
     *
     * @name PVector.prototype.invertY
     * @return {PVector} `this`
     * @api public
     */
    invertY: function() {
        this.y *= -1;
        return this;
    },

    /**
     * Same as invertX with Z axis.
     *
     * @name PVector.prototype.invertZ
     * @return {PVector} `this`
     * @api public
     */
    invertZ: function() {
        this.z *= -1;
        return this;
    },

    /**
     * Normalize the vector.
     *
     * @name PVector.prototype.norm
     * @return {PVector} `this`
     * @api public
     */
    norm: function() {
        var m = this.magSq();
        if ( m > 0 ) {
            this.div( Math.sqrt( m ) );
        }
        return this;
    },

    /**
     * Sets this vector's magnitude to the passed value or to the passed vector's magnitude.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *
     *     vec1.setMag( 10 );
     *     console.log( vec1.toArray() );
     *     // => [ 3.481553119113957, 3.481553119113957, 8.703882797784892 ]
     *
     * @name PVector.prototype.setMag
     * @return {PVector} `this`
     * @api public
     */
    setMag: function( vec_or_scal ) {
        if( vec_or_scal instanceof PVector ){
            vec_or_scal = vec_or_scal.mag();
        }
        if( this.magSq() === 0 ){
            return this.set( vec_or_scal, 0, 0 );
        }
        this.norm();
        this.mult( vec_or_scal );
        return this;
    },

    /**
     * Sets the minimum for this vector's magnitude. If the magnitude is inferior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.
     *
     * ### Examples:
     *     var vec1 = new PVector( 1, 2, .2 );
     *
     *     vec1.minMag( 5 );
     *     console.log( vec1.toArray() );
     *     // => [ 2.2271771, 4.4543543, 0.4454354 ]
     *
     * @name PVector.prototype.minMag
     * @param {Vector} min
     * @return {PVector} `this`
     * @api public
     */
    minMag: function( vec_or_scal ) {
        if( vec_or_scal instanceof PVector ){
            vec_or_scal = vec_or_scal.mag();
        }
        if ( this.magSq() < vec_or_scal * vec_or_scal ) {
            this.norm();
            this.mult( vec_or_scal );
        }
        return this;
    },

    /**
     * Sets the maximum for this vector's magnitude. If the magnitude is superior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 20, 2 );
     *
     *     vec1.maxMag( 5 );
     *     console.log( vec1.toArray() );
     *     // => [ 2.2271771, 4.4543543, 0.4454354 ]
     *
     * @name PVector.prototype.maxMag
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    maxMag: function( vec_or_scal ) {
        if( vec_or_scal instanceof PVector ){
            vec_or_scal = vec_or_scal.mag();
        }
        if ( this.magSq() > vec_or_scal * vec_or_scal ) {
            this.norm();
            this.mult( vec_or_scal );
        }
        return this;
    },

    /**
     * Constrains this vector's magnitude to the passed values. If the magnitude is inferior or superior to the passed values, this vector will be scaled to reach the desired range (lower limit if inferior, upper limit if superior). Vectors can also be passed as parameter, their magnitudes will be used for comparison.
     *
     * ### Examples:
     *     var vec1 = new PVector( 1, 1, .2 );
     *
     *     vec1.clampMag( 5, 10 );
     *     console.log( vec1.toArray() );
     *     // => [ 2.2271771, 4.4543543, 0.4454354 ]
     *
     * @name PVector.prototype.maxMag
     * @param {Vector} min
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    clampMag: function( min, max ) {
        this.minMag( min );
        this.maxMag( max );
        return this;
    },

    /**
     * Sets the minimum for each of this vector's axis to the passed value or to each of the passed vector.
     *
     * ### Examples:
     *     var vec1 = new PVector( 15, 10, 25 );
     *
     *     vec1.min( 12 );
     *     console.log( vec1.toArray() );
     *     // => [ 15, 12, 25 ]
     *
     * @name PVector.prototype.min
     * @param {Number} min
     * @param {Vector} min
     * @return {PVector} `this`
     * @api public
     */
    min: function( min ) {
        this.minX( min );
        this.minY( min );
        this.minZ( min );
        return this;
    },

    /**
     * Sets the minimum for this vector's X axis to the passed value or to the passed vector's X axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 15, 10, 25 );
     *
     *     vec1.minX( 20 );
     *     console.log( vec1.toArray() );
     *     // => [ 20, 10, 25 ]
     *
     * @name PVector.prototype.minX
     * @param {Number} min
     * @param {Vector} min
     * @return {PVector} `this`
     * @api public
     */
    minX: function( min ) {
        min = min.x || min;
        if ( this.x < min ) {
            this.x = min;
        }
        return this;
    },

    /**
     * Same as limitX with Y axis.
     *
     * @name PVector.prototype.minY
     * @param {Number} min
     * @param {Vector} min
     * @return {PVector} `this`
     * @api public
     */
    minY: function( min ) {
        min = min.y || min;
        if ( this.y < min ) {
            this.y = min;
        }
        return this;
    },

    /**
     * Same as limitX with Z axis.
     *
     * @name PVector.prototype.minZ
     * @param {Number} min
     * @param {Vector} min
     * @return {PVector} `this`
     * @api public
     */
    minZ: function( min ) {
        min = min.z || min;
        if ( this.z < min ) {
            this.z = min;
        }
        return this;
    },

    /**
     * Sets the maximum for each of this vector's axis to the passed value or to each of the passed vector.
     *
     * ### Examples:
     *     var vec1 = new PVector( 15, 10, 25 );
     *
     *     vec1.max( 12 );
     *     console.log( vec1.toArray() );
     *     // => [ 12, 10, 12 ]
     *
     * @name PVector.prototype.max
     * @param {Number} max
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    max: function( max ) {
        this.maxX( max );
        this.maxY( max );
        this.maxZ( max );
        return this;
    },

    /**
     * Sets the maximum for this vector's X axis to the passed value or to the passed vector's X axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 15, 10, 25 );
     *
     *     vec1.maxX( 12 );
     *     console.log( vec1.toArray() );
     *     // => [ 12, 10, 25 ]
     *
     * @name PVector.prototype.maxX
     * @param {Number} max
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    maxX: function( max ) {
        max = max.x || max;
        if ( this.x > max ) {
            this.x = max;
        }
        return this;
    },

    /**
     * Same as limitX with Y axis.
     * @name PVector.prototype.maxY
     * @param {Number} max
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    maxY: function( max ) {
        max = max.y || max;
        if ( this.y > max ) {
            this.y = max;
        }
        return this;
    },

    /**
     * Same as limitX with Z axis.
     * @name PVector.prototype.maxZ
     * @param {Number} max
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    maxZ: function( max ) {
        max = max.z || max;
        if ( this.z > max ) {
            this.z = max;
        }
        return this;
    },

    /**
     * Constrains each of this vector's axis between the passed min and max.
     * Min and max can be scalar or vector, in this case each axis will be constrained between the corresponding axis of the passed vectors.
     *
     * ### Examples:
     *     var vec1 = new PVector( 15, 10, 25 );
     *     var vmin = new PVector( 5, 12, 11 );
     *     var vmax = new PVector( 35, 18, 20 );
     *
     *     vec1.clamp( vmin, vmax );
     *     console.log( vec1.toArray() );
     *     // => [ 15, 12, 20 ]
     *
     * @name PVector.prototype.clamp
     * @param {Vector} min
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    clamp: function( min, max ) {
        this.clampX( min, max );
        this.clampY( min, max );
        this.clampZ( min, max );
        return this;
    },

    /**
     * Constrains this vector's X axis between the passed min and max.
     * Min and max can be scalar or vector, in this case X axis will be constrained between the X axis of the passed vectors.
     *
     * ### Examples:
     *     var vec1 = new PVector( 15, 10, 25 );
     *     var vmin = new PVector( 17, 12, 11 );
     *     var vmax = new PVector( 35, 18, 20 );
     *
     *     vec1.clampX( vmin, vmax );
     *     console.log( vec1.toArray() );
     *     // => [ 17, 10, 25 ]
     *
     * @name PVector.prototype.clampX
     * @param {Vector} min
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    clampX: function( min, max ) {
        min = min.x || min;
        max = max.x || max;
        if ( this.x < min ) {
            this.x = min;
        }
        else if ( this.x > max ) {
            this.x = max;
        }
        return this;
    },

    /**
     * Same as clampX with Y axis.
     *
     * @name PVector.prototype.clampY
     * @param {Vector} min
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    clampY: function( min, max ) {
        min = min.y || min;
        max = max.y || max;
        if ( this.y < min ) {
            this.y = min;
        }
        else if ( this.y > max ) {
            this.y = max;
        }
        return this;
    },

    /**
     * Same as clampX with Z axis.
     *
     * @name PVector.prototype.clampZ
     * @param {Vector} min
     * @param {Vector} max
     * @return {PVector} `this`
     * @api public
     */
    clampZ: function( min, max ) {
        min = min.z || min;
        max = max.z || max;
        if ( this.z < min ) {
            this.z = min;
        }
        else if ( this.z > max ) {
            this.z = max;
        }
        return this;
    },

    /**
     * Rotates a vector to the specified angle in radians (2D vectors only), while maintaining the same magnitude.
     *
     * ### Examples:
     *     var vec = new PVector( 10, 20 );
     *
     *     vec.rotateTo( Math.PI / 2 );
     *     console.log( vec.toArray() );
     *     // => " [ -20, 9.9999999, 0 ]"
     *
     * @name PVector.prototype.rotateTo
     * @return {PVector} `this`
     * @api public
     */
    rotateTo: function( angle ) {
        var mag = this.mag();
        this.x = Math.cos( angle ) * mag;
        this.y = Math.sin( angle ) * mag;
        return this;
    },

    /**
     * Adds the passed angle in radians to the vector's rotation(2D vectors only), while maintaining the same magnitude.
     *
     * ### Examples:
     *     var vec = new PVector( 10, 0 );
     *
     *     vec.rotateBy( Math.PI / 2 );
     *     console.log( vec.toArray() );
     *     // => " [ 0, -9.9999999, 0 ]"
     *
     * @name PVector.prototype.rotateBy
     * @return {PVector} `this`
     * @api public
     */
    rotateBy: function( angle ) {
        angle += this.angle2D();
        return this.rotateTo( angle );
    },

    /**
     * Rounds each of this vector's axis to an integer value.
     *
     * ### Examples:
     *     var vec = new PVector( 100.2254, 50.9786 );
     *
     *     vec.round();
     *     console.log( vec.toString() );
     *     // => "{ x: 100, y: 51, z: 0 }"
     *
     * @name PVector.prototype.round
     * @return {PVector} `this`
     * @api public
     */
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    },

    /**
     * Floors each of this vector's axis to an integer value.
     *
     * ### Examples:
     *     var vec = new PVector( 100.2254, 50.9786 );
     *
     *     vec.floor();
     *     console.log( vec.toString() );
     *     // => "{ x: 100, y: 50, z: 0 }"
     *
     * @name PVector.prototype.floor
     * @return {PVector} `this`
     * @api public
     */
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    },

    /**
     * Ceils each of this vector's axis to an integer value.
     *
     * ### Examples:
     *     var vec = new PVector( 100.2254, 50.9786 );
     *
     *     vec.ceil();
     *     console.log( vec.toString() );
     *     // => "{ x: 101, y: 51, z: 0 }"
     *
     * @name PVector.prototype.ceil
     * @return {PVector} `this`
     * @api public
     */
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    },

    /**
     * Rounds axis to a certain precision.
     *
     * ### Examples:
     *     var vec = new PVector( 100.2254, 50.9786 );
     *
     *     vec.toFixed( 2 );
     *     console.log( vec.toString() );
     *     // => "{ x: 100.22, y: 50.97, z: 0 }"
     *
     * @name PVector.prototype.toFixed
     * @param {Number} Precision (default: 8)
     * @return {PVector} `this`
     * @api public
     */
    toFixed: function( precision ) {
        if (typeof precision === 'undefined') { precision = 8; }
        this.x = parseFloat( this.x.toFixed( precision ) );
        this.y = parseFloat( this.y.toFixed( precision ) );
        this.z = parseFloat( this.z.toFixed( precision ) );
        return this;
    },

    /**
     * Sets each of this vector's axis to 0.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *
     *     vec1.zero();
     *     console.log( vec1.toArray() );
     *     // => [ 0, 0, 0 ]
     *
     * @name PVector.prototype.zero
     * @return {PVector} `this`
     * @api public
     */
    zero: function() {
        this.x = this.y = this.z = 0;
        return this;
    },

    /**
     * ## Vector operations
     *
     * These functions are chainable.
     */

    /**
     * Adds another vector to this one or adds the given scalar to each vector's axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *     var vec2 = new PVector( 20, 30, 10 );
     *
     *     vec1.add( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 30, y: 40, z: 35 }"
     *
     *     vec1.add( 5 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 35, y: 45, z: 40 }"
     *
     * @name PVector.prototype.add
     * @param {PVector} vec_or_scal The other vector you want to add to this one or the scalar to add
     * @return {PVector} `this`
     * @api public
     */
    add: function( vec_or_scal ){
        this.addX( vec_or_scal );
        this.addY( vec_or_scal );
        this.addZ( vec_or_scal );
        return this;
    },

    /**
     * Adds another vector's X axis to this one or adds the given scalar to this one's X axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *     var vec2 = new PVector( 20, 30, 10 );
     *
     *     vec1.addX( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 30, y: 10, z: 25 }"
     *
     *     vec1.addX( 5 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 35, y: 10, z: 25 }"
     *
     * @name PVector.prototype.addX
     * @param {PVector} vec_or_scal The other vector you want to add or the scalar to add to this one's X axis
     * @return {PVector} `this`
     * @api public
     */
    addX: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.x += vec_or_scal; }
        else this.x += vec_or_scal.x;
        return this;
    },

    /**
     * Same as addX with Y axis.
     *
     * @name PVector.prototype.addY
     * @param {PVector} vec_or_scal The other vector you want to add or the scalar to add to this one's Y axis
     * @return {PVector} `this`
     * @api public
     */
    addY: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.y += vec_or_scal; }
        else this.y += vec_or_scal.y;
        return this;
    },

    /**
     * Same as addX with Z axis.
     *
     * @name PVector.prototype.addZ
     * @param {PVector} vec_or_scal The other vector you want to add or the scalar to add to this one's Z axis
     * @return {PVector} `this`
     * @api public
     */
    addZ: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.z += vec_or_scal; }
        else this.z += vec_or_scal.z;
        return this;
    },

    /**
     * Substracts another vector from this one or substracts the given scalar from each vector's axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *     var vec2 = new PVector( 20, 30, 10 );
     *
     *     vec1.sub( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: -10, y: -20, z: 15 }"
     *
     *     vec1.sub( 5 );
     *     console.log( vec1.toString() );
     *     // => "{ x: -15, y: -25, z: 10 }"
     *
     * @name PVector.prototype.sub
     * @param {PVector} vec_or_scal The other vector you want to substract from this one or the scalar to substract
     * @return {PVector} `this`
     * @api public
     */
    sub: function( vec_or_scal ){
        this.subX( vec_or_scal );
        this.subY( vec_or_scal );
        this.subZ( vec_or_scal );
        return this;
    },

    /**
     * Substracts another vector's X axis from this one or substracts the given scalar from this one's X axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *     var vec2 = new PVector( 20, 30, 10 );
     *
     *     vec1.subX( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: -10, y: 10, z: 25 }"
     *
     *     vec1.subX( 5 );
     *     console.log( vec1.toString() );
     *     // => "{ x: -15, y: 10, z: 25 }"
     *
     * @name PVector.prototype.subX
     * @param {PVector} vec_or_scal The other vector you want to substract or the scalar to substract from this one's X axis
     * @return {PVector} `this`
     * @api public
     */
    subX: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.x -= vec_or_scal; }
        else this.x -= vec_or_scal.x;
        return this;
    },

    /**
     * Same as subX with Y axis.
     *
     * @name PVector.prototype.subY
     * @param {PVector} vec_or_scal The other vector you want to substract or the scalar to substract from this one's Y axis
     * @return {PVector} `this`
     * @api public
     */
    subY: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.y -= vec_or_scal; }
        else this.y -= vec_or_scal.y;
        return this;
    },

    /**
     * Same as subX with Z axis.
     *
     * @name PVector.prototype.subZ
     * @param {PVector} vec_or_scal The other vector you want to substract or the scalar to substract from this one's Z axis
     * @return {PVector} `this`
     * @api public
     */
    subZ: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.z -= vec_or_scal; }
        else this.z -= vec_or_scal.z;
        return this;
    },

    /**
     * Multiplies another vector with this one or multiplies the given scalar with each vector's axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *     var vec2 = new PVector( 20, 30, 10 );
     *
     *     vec1.mult( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 200, y: 300, z: 250 }"
     *
     *     vec1.mult( 5 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 1000, y: 1500, z: 1250 }"
     *
     * @name PVector.prototype.mult
     * @param {PVector} vec_or_scal The other vector you want to multiply with this one or the scalar to multiply
     * @return {PVector} `this`
     * @api public
     */
    mult: function( vec_or_scal ){
        this.multX( vec_or_scal );
        this.multY( vec_or_scal );
        this.multZ( vec_or_scal );
        return this;
    },

    /**
     * Multiplies another vector's X axis with this one or multiplies the given scalar with this one's X axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *     var vec2 = new PVector( 20, 30, 10 );
     *
     *     vec1.subX( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 200, y: 10, z: 25 }"
     *
     *     vec1.subX( 5 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 1000, y: 10, z: 25 }"
     *
     * @name PVector.prototype.multX
     * @param {PVector} vec_or_scal The other vector you want to multiply or the scalar to multiply with this one's X axis
     * @return {PVector} `this`
     * @api public
     */
    multX: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.x *= vec_or_scal; }
        else this.x *= vec_or_scal.x;
        return this;
    },

    /**
     * Same as multX with Y axis.
     *
     * @name PVector.prototype.multY
     * @param {PVector} vec_or_scal The other vector you want to multiply or the scalar to multiply with this one's Y axis
     * @return {PVector} `this`
     * @api public
     */
    multY: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.y *= vec_or_scal; }
        else this.y *= vec_or_scal.y;
        return this;
    },

    /**
     * Same as multX with Z axis.
     *
     * @name PVector.prototype.multZ
     * @param {PVector} vec_or_scal The other vector you want to multiply or the scalar to multiply with this one's Z axis
     * @return {PVector} `this`
     * @api public
     */
    multZ: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.z *= vec_or_scal; }
        else this.z *= vec_or_scal.z;
        return this;
    },

    /**
     * Divides this vector by another one or divides each vector's axis by the given scalar.
     *
     * ### Examples:
     *     var vec1 = new PVector( 20, 30, 10 );
     *     var vec2 = new PVector( 10, 10, 5 );
     *
     *     vec1.div( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 2, y: 3, z: 2 }"
     *
     *     vec1.div( 2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 1, y: 1.5, z: 1 }"
     *
     * @name PVector.prototype.div
     * @param {PVector} vec_or_scal The other vector you want to divide this one by or the scalar to divide by
     * @return {PVector} `this`
     * @api public
     */
    div: function( vec_or_scal ){
        this.divX( vec_or_scal );
        this.divY( vec_or_scal );
        this.divZ( vec_or_scal );
        return this;
    },

    /**
     * Divides this vector's X axis by another one's or divides this vector's X axis by the given scalar.
     *
     * ### Examples:
     *     var vec1 = new PVector( 20, 30, 10 );
     *     var vec2 = new PVector( 10, 10, 5 );
     *
     *     vec1.divX( vec2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 2, y: 30, z: 10 }"
     *
     *     vec1.divX( 2 );
     *     console.log( vec1.toString() );
     *     // => "{ x: 1, y: 30, z: 10 }"
     *
     * @name PVector.prototype.divX
     * @param {PVector} vec_or_scal The other vector you want to divide this one's X axis by or the scalar to divide this one's X axis by.
     * @return {PVector} `this`
     * @api public
     */
    divX: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.x /= vec_or_scal; }
        else this.x /= vec_or_scal.x;
        return this;
    },

    /**
     * Same as divX with Y axis.
     *
     * @name PVector.prototype.divY
     * @param {PVector} vec_or_scal The other vector you want to divide this one's Y axis by or the scalar to divide this one's Y axis by.
     * @return {PVector} `this`
     * @api public
     */
    divY: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.y /= vec_or_scal; }
        else this.y /= vec_or_scal.y;
        return this;    },

    /**
     * Same as divX with Z axis.
     *
     * @name PVector.prototype.divZ
     * @param {PVector} vec_or_scal The other vector you want to divide this one's Z axis by or the scalar to divide this one's Z axis by.
     * @return {PVector} `this`
     * @api public
     */
    divZ: function( vec_or_scal ){
        if ( typeof vec_or_scal === 'number' ) { this.z /= vec_or_scal; }
        else this.z /= vec_or_scal.z;
        return this;
    },

    /**
     * Performs a linear interpolation towards another vector. A value can be passed instead of a vector.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 100 );
     *     var vec2 = new PVector( 200, 200 );
     *
     *     vec1.lerp( vec2, 0.5 );
     *     console.log( vec.toArray() );
     *     // => [ 150, 150, 0 ]
     *
     * @name PVector.prototype.lerp
     * @param {PVector} vec_or_sacl The other vector or value
     * @param {Number} amount The blend amount 
     * @return {PVector} `this`
     * @api public
     */
    lerp: function( vec_or_scal, amount ){
        this.lerpX( vec_or_scal, amount );
        this.lerpY( vec_or_scal, amount );
        this.lerpZ( vec_or_scal, amount );
        return this;
    },

    /**
     * Performs a linear interpolation of this vector's X  towards another vector's X axis. A value can be passed instead of a vector.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 100 );
     *     var vec2 = new PVector( 200, 200 );
     *
     *     vec1.lerpX( vec2, 0.7 );
     *     console.log( vec1.toArray() );
     *     // => [ 170, 100, 0 ]
     *
     *     vec1.lerpX( 270, 0.5 );
     *     console.log( vec.toArray() );
     *     // => [ 220, 100, 0 ]
     *
     * @name PVector.prototype.lerpX
     * @param {PVector} vec_or_scal The other vector or value
     * @param {Number} amount The blend amount
     * @return {PVector} `this`
     * @api public
     */
    lerpX: function( vec_or_scal, amount ){
        if ( typeof vec_or_scal === 'number' ) { this.x = PVector.lerpVal( this.x, vec_or_scal, amount ); }
        else this.x = PVector.lerpVal( this.x, vec_or_scal.x, amount );;
        return this;
    },

    /**
     * Same as lerpX with Y axis.
     *
     * @name PVector.prototype.lerpY
     * @param {PVector} vec_or_scal The other vector or value
     * @param {Number} amount The blend amount
     * @return {PVector} `this`
     * @api public
     */
    lerpY: function( vec_or_scal, amount ){
        if ( typeof vec_or_scal === 'number' ) { this.y = PVector.lerpVal( this.y, vec_or_scal, amount ); }
        else this.y = PVector.lerpVal( this.y, vec_or_scal.y, amount );;
        return this;
    },

    /**
     * Same as lerpX with Z axis.
     *
     * @name PVector.prototype.lerpZ
     * @param {PVector} vec_or_scal The other vector or value
     * @param {Number} amount The blend amount
     * @return {PVector} `this`
     * @api public
     */
    lerpZ: function( vec_or_scal, amount ){
        if ( typeof vec_or_scal === 'number' ) { this.z = PVector.lerpVal( this.z, vec_or_scal, amount ); }
        else this.z = PVector.lerpVal( this.z, vec_or_scal.z, amount );;
        return this;
    },

    /**
     * Calculates and returns a vector composed of the cross product between two vectors, setting itself to the result.
     *
     * ### Examples:
     *     var vec = new PVector( 10, 20, 2 );
     *     var vec2 = new PVector( 60, 80, 6 );
     *
     *     vec.cross( vec2 );
     *     console.log( vec.toArray() );
     *     // => "[ -40, 360, -24800 ]"
     *
     * @name PVector.prototype.cross
     * @param {PVector} vec The vector to calculate the cross product
     * @return {PVector} `this`
     * @api public
     */
    cross: function( vec ) {
        this.x = this.y * vec.z - vec.y * this.z;
        this.y = this.z * vec.x - vec.z * this.x;
        this.z = this.x * vec.y - vec.x * this.y;
        return this;
    },

    /**
     * Projects this vector onto another vector, setting itself to the result.
     *
     * ### Examples:
     *     var vec = new PVector( 100, 0 );
     *     var vec2 = new PVector( 100, 100 );
     *
     *     vec.projectOnto( vec2 );
     *     console.log( vec.toString() );
     *     // => "{ x: 50, y: 50, z: 0 }"
     *
     * @name PVector.prototype.projectOnto
     * @param {PVector} vec the vector to calculate the cross product
     * @return {PVector} `this`
     * @api public
     */
    projectOnto: function( vec ) {
        var coeff = ( ( this.x * vec.x ) + ( this.y * vec.y ) + ( this.z * vec.z) ) / ( ( vec.x * vec.x ) + ( vec.y * vec.y ) + ( vec.z * vec.z ) );
        this.x = coeff * vec.x;
        this.y = coeff * vec.y;
        this.z = coeff * vec.z;
        return this;
    },

    /**
     * Applies a function taking a vector as argument to this vector. Allows extending of the library while keeping chaining;
     *
     * ### Examples:
     *     function doubleXY( pvec ){
     *         pvec.x *= 2;
     *         pvec.y *= 2;
     *     }
     *
     *     var vec = new PVector( 100, 40 );
     *     vec.func( doubleXY );
     *
     *     console.log( vec.toString() );
     *     // => "{ x: 200, y: 80, z: 0 }"
     *
     * @name PVector.prototype.applyFunc
     * @param {PVector} vec The other vector you want to project this vector onto
     * @return {PVector} `this`
     * @api public
     */
    func: function( f ) {
        f( this );
        return this;
    },

    /**
     * ## Utility methods
     *
     * These functions are not chainable in the way they return a value, not a PVector.
     */

    /**
     * Returns the vector's magnitude or alias of setMag if a value is passed as parameter.
     *
     * ### Examples:
     *     var vec1 = new PVector( 4, 3 );
     *
     *     console.log( vec1.mag() );
     *     // => 5
     *     
     *     vec1.mag( 10 );
     *     console.log( vec1.mag() );
     *     // => 10
     *     
     * @name PVector.prototype.mag
     * @return {Number_or_this} magnitude_or_this Return magnitude or this if a value is passed as parameter
     * @api public
     */
    mag: function() {
        if( arguments[ 0 ] ){
            return this.setMag( arguments[ 0 ] );
        }
        return Math.sqrt( this.magSq() );
    },

    /**
     * Returns the vector's squared magnitude.
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 10, 25 );
     *
     *     console.log( vec1.magSq() );
     *     // => 825
     *     
     * @name PVector.prototype.magSq
     * @return {Number} magnitude
     * @api public
     */
    magSq: function() {
        var x = this.x,
            y = this.y,
            z = this.z;
        return ( x * x + y * y + z * z );
    },

    /**
     * Calculates the euclidean distance between this vector and another.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50 );
     *     var vec2 = new PVector( 200, 60 );
     *
     *     vec1.dist( vec2 );
     *     // => 100.4987562112089
     *
     * @name PVector.prototype.dist
     * @param {PVector} vector
     * @return {Number} distance
     * @api public
     */
    dist: function( vec) {
        return Math.sqrt( this.distSq( vec ) );
    },

    /**
     * Calculates the distance of the X axis between this vector and another.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50 );
     *     var vec2 = new PVector( 200, 60 );
     *
     *     vec1.distX( vec2 );
     *     // => -100
     *
     * @name PVector.prototype.distX
     * @param {PVector} vector
     * @return {Number} distance
     * @api public
     */
    distX: function( vec ) {
        return vec.x - this.x;
    },

    /**
     * Same as distX with Y axis.
     *
     * @name PVector.prototype.distY
     * @param {PVector} vector
     * @return {Number} distance
     * @api public
     */
    distY: function( vec ) {
        return vec.y - this.y;
    },

    /**
     * Same as distX with Z axis.
     *
     * @name PVector.prototype.distZ
     * @param {PVector} vector
     * @return {Number} distance
     * @api public
     */
    distZ: function( vec ) {
        return vec.z - this.z;
    },

    /**
     * Calculates the squared euclidean distance between this vector and another.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50 );
     *     var vec2 = new PVector( 200, 60 );
     *
     *     vec1.distSq( vec2 );
     *     // => 10100
     *
     * @name PVector.prototype.distSq
     * @param {PVector} vector
     * @return {Number} distance
     * @api public
     */
    distSq: function( vec ) {
        var dx = this.distX( vec ),
            dy = this.distY( vec );

        return dx * dx + dy * dy;
    },

    /**
     * Calculates the angle of rotation in radians for a vector (2D vectors only).
     *
     * ### Examples:
     *     var vec1 = new PVector( 10, 20 );
     *
     *     console.log( vec1.angle2D() );
     *     // => 1.1071488
     *
     * @name PVector.prototype.angle2D
     * @return {Number} angle
     * @api public
     */
    angle2D: function() {
        if( arguments[ 0 ] ){
            return this.rotateTo( arguments[ 0 ] );
        }
        return Math.atan2( this.y, this.x );
    },

    /**
     * Calculates the dot product of this vector and another.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50 );
     *     var vec2 = new PVector( 200, 60 );
     *
     *     console.log( vec1.dot( vec2 ) );
     *     // => 23000
     *
     * @name PVector.prototype.dot
     * @param {PVector} vector
     * @return {Number} value Dot product
     * @api public
     */
    dot: function( vec ) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    },

    /**
     * ## Comparison methods
     *
     * These functions are not chainable in the way they return a value, not a PVector.
     */

    /**
     * Returns a true if vector is ( 0, 0, 0 ).
     *
     * ### Examples:
     *     var vec = new PVector( 100, 50, 130 );
     *     vec.zero();
     *     
     *     console.log( vec.isZero() );
     *     // => true
     *
     * @name PVector.prototype.isZero
     * @return {Boolean}
     * @api public
     */
    isZero: function() {
        return this.magSq() < 1e-8;
    },

    /**
     * Returns true if each of this vector' axis are the same as another vector's.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50, 70 );
     *     var vec2 = new PVector( 100, 50, 70 );
     *     var vec3 = new PVector( 100, 10, 70 );
     *
     *     console.log( vec1.isEqualTo( vec2 ) );
     *     // => true
     *
     *     console.log( vec1.isEqualTo( vec3 ) );
     *     // => false
     *
     * @name PVector.prototype.isEqual
     * @return {Boolean}
     * @api public
     */
    isEqual: function( vec ) {
        return this.x === vec.x && this.y === vec.y && this.z === vec.z;
    },

    /**
     * ## Conversion methods
     *
     * These functions are not chainable in the way they return a value, not a PVector.
     */

    /**
     * Returns a String representation of this vector's x, y and z axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50, 70 );
     *
     *     console.log( vec1.toString() );
     *     // => "{ x: 100, y: 50, z: 70 }"
     *
     * @name PVector.prototype.toString
     * @return {String}
     * @api public
     */
    toString: function() {
        return "{ x: " + this.x + ", y: " + this.y + ", z: " + this.z + " }";
    },

    /**
     * Returns an Object representation of this vector's x, y and z axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50, 70 );
     *
     *     console.log( vec1.toObject() );
     *     // => { x: 100, y: 50, z: 70 }
     *
     * @name PVector.prototype.toObject
     * @return {Object}
     * @api public
     */
    toObject: function() {
        return { x: this.x, y: this.y, z: this.z };
    },

    /**
     * Returns an Array representation of this vector's x, y and z axis.
     *
     * ### Examples:
     *     var vec1 = new PVector( 100, 50, 70 );
     *
     *     console.log( vec1.toArray() );
     *     // => [ 100, 50, 70 ]
     *
     * @name PVector.prototype.toArray
     * @return {Array}
     * @api public
     */
    toArray: function() {
        return [ this.x, this.y, this.z ];
    }

};

function createPVectorMethod( method ) {
    return function( v1, v2 ) {
        var v = v1.clone();
        v[ method ]( v2 );
        return v;
    };
}

for ( var method in PVector.prototype ) {
    if ( PVector.prototype.hasOwnProperty( method ) && !PVector.hasOwnProperty( method ) ) {
        PVector[ method ] = createPVectorMethod( method );
    }
}

exports = module.exports = PVector;