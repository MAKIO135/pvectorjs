

<!-- Start index.js -->

# PVectorjs - A JavaScript vector class for common vector operations based on Processing.js PVector class and PVector.js

## PVector(vec_or_arr_or_x, y, z)

Works without the `new` keyword.

### Examples:
    var vec1 = new PVector( 100, 50 );
    console.log( vec1.toString() );
    // => "{ x: 100, y: 50, z: 0 }"

    // Use constructor without the new keyword:
    var vec2 = PVector( 42, 17, 10 );
    console.log( vec2.toString() );
    // => "{ x: 42, y: 17, z: 10 }"

    // Create a new vector from an array with a length of 2 or 3:
    var vec3 = PVector( [ 4, 12 ] );
    console.log( vec3.toString() );
    // => "{ x: 4, y: 12, z: 0 }"

    // Create a new vector from an object:
    var vec4 = PVector( { x: 30, y: 34, z: 20 } );
    console.log( vec4.toString() );
    // => "{ x: 30, y: 34, z: 20 }"

    // Create a new 0 PVector:
    var v = PVector();
    console.log( v.toString() );
    // => "{ x: 0, y: 0, z: 0 }"

### Params:

* **Object_or_Array_or_Number** *vec_or_arr_or_x* Can be an Object with x, y (and z) properties, an Array of 2 or 3 values, or the value of the X axis
* **Number** *y* Value of the Y axis
* **Number** *z* Value of the Z axis

### Return:

* **PVector** 

## x

The X axis

### Examples:
    var vec = new PVector(42, 21, 15);

    vec.x;
    // => 42

## y

The Y axis

### Examples:
    var vec = new PVector(42, 21, 15);

    vec.y;
    // => 21

## z

The Z axis

### Examples:
    var vec = new PVector(42, 21, 15);

    vec.z;
    // => 15

___
# Static Methods

## Instanciation Methods

## PVector.random2D()

Returns a new 2D unit vector with a random direction.

### Examples:
    var vec = PVector.random2D();

    console.log( vec.toArray() );
    // => "[ -0.75006354, -0.6613658, 0.0 ]"

### Return:

* **PVector** 

## PVector.random3D()

Returns a new 3D unit vector with a random direction.

### Examples:
    var vec = PVector.random2D();

    console.log( vec.toArray() );
    // => "[ 0.6091097, -0.22805278, -0.7595902 ]"

### Return:

* **PVector** 

## PVector.fromAngle(angle)

Calculates and returns a new 2D unit vector from the specified angle value (in radians).

### Examples:
    var vec = PVector.fromAngle( 0.01 );

    console.log( vec.toString() );
    // => "[ 0.99995, 0.009999833, 0.0 ]"

### Params:

* **Number** *angle* The angle in radians

### Return:

* **PVector** 

## Utility Methods

## PVector.angleBetween(v1, v2)

Calculates and returns the angle (in radians) between two vectors.

### Examples:
    var v1 = new PVector( 10, 20 );
    var v2 = new PVector( 60, 80 );

    var angle = PVector.angleBetween( v1, v2 );
    console.log( angle );
    // => "0.1798535"

### Params:

* **PVector** *v1* Any variable of type PVector
* **PVector** *v2* Any variable of type PVector

### Return:

* **Number** 

## PVector.radian2degrees(radians)

Converts a value in radians to a value in degrees.

### Examples:
    var angleRadians = Math.PI / 2;
    var angleDegrees = PVector.radians2degrees( angleRadians );
    console.log( angleDegrees );
    // => "90"

### Params:

* **Number** *radians* An angle in radians

### Return:

* **Number** 

## PVector.degrees2radians(degrees)

Converts a value in degrees to a value in radians.

### Examples:
    var angleDegrees = 90;
    var angleRadians = PVector.degrees2radian( angleDegrees );
    console.log( angleRadians );
    // => "1.5707963267948966"

### Params:

* **Number** *degrees* An angle in degrees

### Return:

* **Number** 

## PVector.lerpVal(a, b, amount)

Calculates a number between two numbers at a specific increment. The amount parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.

### Examples:
    var foo = PVector.lerpVal( 10, 20, 0.75 );

    console.log( foo );
    // => "17.5"

### Params:

* **Number** *a* First value
* **Number** *b* Second value
* **Number** *amount* Number between 0.0 and 1.0

### Return:

* **Number** 

___
# PVector.prototype Methods

## PVector

## Manipulation methods

These functions are chainable.

## PVector.prototype.clone()

Creates a clone of this vector.

### Examples:
    var vec1 = PVector(10, 10);
    var vec2 = vec1.clone();

    vec2.toString();
    // => "{ x: 10, y: 10 }"

### Return:

* **PVector** cloneVec A clone of the vector

## PVector.prototype.set(vec_or_arr_or_x, y, z)

Sets this vector's components from an object, an array, a value or another vector by copying its components

### Examples:
    var vec1 = new PVector( 10, 10, 50 );
    var vec2 = new PVector( 20, 20, 20 );
    vec2.set( vec1 );

    console.log( vec2.toString() );
    // => "{ x: 10, y: 10, z: 50 }"

### Params:

* **Object_or_Array_or_Number** *vec_or_arr_or_x* Can be an Object with x, y (and z) properties, an Array of 2 or 3 values, or the value of the X axis
* **Number** *y* Value of the y axis
* **Number** *z* Value of the z axis

### Return:

* **PVector** `this`

## PVector.prototype.setX(vec_or_arr_or_x)

Sets this vector's X component from an object, an array, a value or another vector by copying its X component.

### Examples:
    var vec1 = new PVector( 10, 10 );
    var vec2 = new PVector( 20, 20 );
    vec2.setX( vec1 );
    // vec2.setX( { x:10, y: 10 } );
    // vec2.setX( [ 10, 10 ] );
    // vec2.setX( 10 );

    console.log( vec2.toString() );
    // => "{ x: 10, y: 20, z: 0 }"

### Params:

* **Object_or_Array_or_Number** *vec_or_arr_or_x* Can be an Object with x, y (and z) properties, an Array of 2 or 3 values, or the value of the X axis

### Return:

* **PVector** `this`

## PVector.prototype.setY(vec_or_arr_or_x)

Same as setX with Y axis.

### Params:

* **Object_or_Array_or_Number** *vec_or_arr_or_x* Can be an Object with x, y (and z) properties, an Array of 2 or 3 values, or the value of the Y axis

### Return:

* **PVector** `this`

## PVector.prototype.setZ(vec_or_arr_or_x)

Same as setX with Z axis.

### Params:

* **Object_or_Array_or_Number** *vec_or_arr_or_x* Can be an Object with x, y and z properties, an Array of 3 values, or the value of the Z axis

### Return:

* **PVector** `this`

## PVector.prototype.invert()

Inverts each axis.

### Examples:
    var vec = new PVector(100, 50);

    vec.invert();
    vec.toString();
    // => x:-100, y:-50

### Return:

* **PVector** `this`

## PVector.prototype.invertX()

Inverts the X axis.

### Examples:
    var vec = new PVector(100, 50);

    vec.invertX();
    vec.toString();
    // => x:-100, y:50

### Return:

* **PVector** `this`

## PVector.prototype.invertY()

Same as invertX with y axis.

### Return:

* **PVector** `this`

## PVector.prototype.invertZ()

Same as invertX with Z axis.

### Return:

* **PVector** `this`

## PVector.prototype.norm()

Normalize the vector.

### Return:

* **PVector** `this`

## PVector.prototype.setMag()

Sets this vector's magnitude to the passed value or to the passed vector's magnitude.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );

    vec1.setMag( 10 );
    console.log( vec1.toArray() );
    // => [ 0, 0, 0 ]

### Return:

* **PVector** `this`

## PVector.prototype.minMag(min)

Sets the minimum for this vector's magnitude. If the magnitude is inferior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.

### Examples:
    var vec1 = new PVector( 1, 2, .2 );

    vec1.minMag( 5 );
    console.log( vec1.toArray() );
    // => [ 2.2271771, 4.4543543, 0.4454354 ]

### Params:

* **Vector** *min* 

### Return:

* **PVector** `this`

## PVector.prototype.maxMag(max)

Sets the maximum for this vector's magnitude. If the magnitude is superior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.

### Examples:
    var vec1 = new PVector( 10, 20, 2 );

    vec1.maxMag( 5 );
    console.log( vec1.toArray() );
    // => [ 2.2271771, 4.4543543, 0.4454354 ]

### Params:

* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.maxMag(min, max)

Constrains this vector's magnitude to the passed values. If the magnitude is inferior or superior to the passed values, this vector will be scaled to reach the desired range (lower limit if inferior, upper limit if superior). Vectors can also be passed as parameter, their magnitudes will be used for comparison.

### Examples:
    var vec1 = new PVector( 1, 1, .2 );

    vec1.clampMag( 5, 10 );
    console.log( vec1.toArray() );
    // => [ 2.2271771, 4.4543543, 0.4454354 ]

### Params:

* **Vector** *min* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.min(min, min)

Sets the minimum for each of this vector's axis to the passed value or to each of the passed vector.

### Examples:
    var vec1 = new PVector( 15, 10, 25 );

    vec1.min( 12 );
    console.log( vec1.toArray() );
    // => [ 15, 12, 25 ]

### Params:

* **Number** *min* 
* **Vector** *min* 

### Return:

* **PVector** `this`

## PVector.prototype.minX(min, min)

Sets the minimum for this vector's X axis to the passed value or to the passed vector's X axis.

### Examples:
    var vec1 = new PVector( 15, 10, 25 );

    vec1.minX( 20 );
    console.log( vec1.toArray() );
    // => [ 20, 10, 25 ]

### Params:

* **Number** *min* 
* **Vector** *min* 

### Return:

* **PVector** `this`

## PVector.prototype.minY(min, min)

Same as limitX with Y axis.

### Params:

* **Number** *min* 
* **Vector** *min* 

### Return:

* **PVector** `this`

## PVector.prototype.minZ(min, min)

Same as limitX with Z axis.

### Params:

* **Number** *min* 
* **Vector** *min* 

### Return:

* **PVector** `this`

## PVector.prototype.max(max, max)

Sets the maximum for each of this vector's axis to the passed value or to each of the passed vector.

### Examples:
    var vec1 = new PVector( 15, 10, 25 );

    vec1.max( 12 );
    console.log( vec1.toArray() );
    // => [ 12, 10, 12 ]

### Params:

* **Number** *max* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.maxX(max, max)

Sets the maximum for this vector's X axis to the passed value or to the passed vector's X axis.

### Examples:
    var vec1 = new PVector( 15, 10, 25 );

    vec1.maxX( 12 );
    console.log( vec1.toArray() );
    // => [ 12, 10, 25 ]

### Params:

* **Number** *max* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.maxY(max, max)

Same as limitX with Y axis.

### Params:

* **Number** *max* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.maxZ(max, max)

Same as limitX with Z axis.

### Params:

* **Number** *max* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.clamp(min, max)

Constrains each of this vector's axis between the passed min and max.
Min and max can be scalar or vector, in this case each axis will be constrained between the corresponding axis of the passed vectors.

### Examples:
    var vec1 = new PVector( 15, 10, 25 );
    var vmin = new PVector( 5, 12, 11 );
    var vmax = new PVector( 35, 18, 20 );

    vec1.clamp( vmin, vmax );
    console.log( vec1.toArray() );
    // => [ 15, 12, 20 ]

### Params:

* **Vector** *min* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.clampX(min, max)

Constrains this vector's X axis between the passed min and max.
Min and max can be scalar or vector, in this case X axis will be constrained between the X axis of the passed vectors.

### Examples:
    var vec1 = new PVector( 15, 10, 25 );
    var vmin = new PVector( 17, 12, 11 );
    var vmax = new PVector( 35, 18, 20 );

    vec1.clampX( vmin, vmax );
    console.log( vec1.toArray() );
    // => [ 17, 10, 25 ]

### Params:

* **Vector** *min* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.clampY(min, max)

Same as clampX with Y axis.

### Params:

* **Vector** *min* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.clampZ(min, max)

Same as clampX with Z axis.

### Params:

* **Vector** *min* 
* **Vector** *max* 

### Return:

* **PVector** `this`

## PVector.prototype.rotateTo()

Rotates a vector to the specified angle in radians (2D vectors only), while maintaining the same magnitude.

### Examples:
    var vec = new PVector( 10, 20 );

    vec.rotate( Math.PI / 2 );
    console.log( vec.toArray() );
    // => " [ -20, 9.9999999, 0 ]"

### Return:

* **PVector** `this`

## PVector.prototype.rotateBy()

Adds the passed angle in radians to the vector's rotation(2D vectors only), while maintaining the same magnitude.

### Examples:
    var vec = new PVector( 10, 0 );

    vec.rotateBy( Math.PI / 2 );
    console.log( vec.toArray() );
    // => " [ 0, -9.9999999, 0 ]"

### Return:

* **PVector** `this`

## PVector.prototype.unfloat()

Rounds each of this vector's axis to an integer value.

### Examples:
    var vec = new PVector( 100.2254, 50.9786 );

    vec.unfloat();
    console.log( vec.toString() );
    // => "{ x: 100, y: 50, z: 0 }"

### Return:

* **PVector** `this`

## PVector.prototype.toFixed(Precision)

Rounds axis to a certain precision.

### Examples:
    var vec = new PVector( 100.2254, 50.9786 );

    vec.toFixed( 2 );
    console.log( vec.toString() );
    // => "{ x: 100.22, y: 50.97, z: 0 }"

### Params:

* **Number** *Precision* (default: 8)

### Return:

* **PVector** `this`

## PVector.prototype.zero()

Sets each of this vector's axis to 0.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );

    vec1.zero();
    console.log( vec1.toArray() );
    // => [ 0, 0, 0 ]

### Return:

* **PVector** `this`

## Vector operations

These functions are chainable.

## PVector.prototype.add(vec_or_scal)

Adds another vector to this one or adds the given scalar to each vector's axis.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );
    var vec2 = new PVector( 20, 30, 10 );

    vec1.add( vec2 );
    console.log( vec1.toString() );
    // => "{ x: 30, y: 40, z: 35 }"

    vec1.add( 5 );
    console.log( vec1.toString() );
    // => "{ x: 35, y: 45, z: 40 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to add to this one or the scalar to add

### Return:

* **PVector** `this`

## PVector.prototype.addX(vec_or_scal)

Adds another vector's X axis to this one or adds the given scalar to this one's X axis.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );
    var vec2 = new PVector( 20, 30, 10 );

    vec1.addX( vec2 );
    console.log( vec1.toString() );
    // => "{ x: 30, y: 10, z: 25 }"

    vec1.addX( 5 );
    console.log( vec1.toString() );
    // => "{ x: 35, y: 10, z: 25 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to add or the scalar to add to this one's X axis

### Return:

* **PVector** `this`

## PVector.prototype.addY(vec_or_scal)

Same as addX with Y axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to add or the scalar to add to this one's Y axis

### Return:

* **PVector** `this`

## PVector.prototype.addZ(vec_or_scal)

Same as addX with Z axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to add or the scalar to add to this one's Z axis

### Return:

* **PVector** `this`

## PVector.prototype.sub(vec_or_scal)

Substracts another vector from this one or substracts the given scalar from each vector's axis.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );
    var vec2 = new PVector( 20, 30, 10 );

    vec1.sub( vec2 );
    console.log( vec1.toString() );
    // => "{ x: -10, y: -20, z: 15 }"

    vec1.sub( 5 );
    console.log( vec1.toString() );
    // => "{ x: -15, y: -25, z: 10 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to substract from this one or the scalar to substract

### Return:

* **PVector** `this`

## PVector.prototype.subX(vec_or_scal)

Substracts another vector's X axis from this one or substracts the given scalar from this one's X axis.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );
    var vec2 = new PVector( 20, 30, 10 );

    vec1.subX( vec2 );
    console.log( vec1.toString() );
    // => "{ x: -10, y: 10, z: 25 }"

    vec1.subX( 5 );
    console.log( vec1.toString() );
    // => "{ x: -15, y: 10, z: 25 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to substract or the scalar to substract from this one's X axis

### Return:

* **PVector** `this`

## PVector.prototype.subY(vec_or_scal)

Same as subX with Y axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to substract or the scalar to substract from this one's Y axis

### Return:

* **PVector** `this`

## PVector.prototype.subZ(vec_or_scal)

Same as subX with Z axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to substract or the scalar to substract from this one's Z axis

### Return:

* **PVector** `this`

## PVector.prototype.mult(vec_or_scal)

Multiplies another vector with this one or multiplies the given scalar with each vector's axis.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );
    var vec2 = new PVector( 20, 30, 10 );

    vec1.mult( vec2 );
    console.log( vec1.toString() );
    // => "{ x: 200, y: 300, z: 250 }"

    vec1.mult( 5 );
    console.log( vec1.toString() );
    // => "{ x: 1000, y: 1500, z: 1250 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to multiply with this one or the scalar to multiply

### Return:

* **PVector** `this`

## PVector.prototype.multX(vec_or_scal)

Multiplies another vector's X axis with this one or multiplies the given scalar with this one's X axis.

### Examples:
    var vec1 = new PVector( 10, 10, 25 );
    var vec2 = new PVector( 20, 30, 10 );

    vec1.subX( vec2 );
    console.log( vec1.toString() );
    // => "{ x: 200, y: 10, z: 25 }"

    vec1.subX( 5 );
    console.log( vec1.toString() );
    // => "{ x: 1000, y: 10, z: 25 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to multiply or the scalar to multiply with this one's X axis

### Return:

* **PVector** `this`

## PVector.prototype.multY(vec_or_scal)

Same as multX with Y axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to multiply or the scalar to multiply with this one's Y axis

### Return:

* **PVector** `this`

## PVector.prototype.multZ(vec_or_scal)

Same as multX with Z axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to multiply or the scalar to multiply with this one's Z axis

### Return:

* **PVector** `this`

## PVector.prototype.div(vec_or_scal)

Divides this vector by another one or divides each vector's axis by the given scalar.

### Examples:
    var vec1 = new PVector( 20, 30, 10 );
    var vec2 = new PVector( 10, 10, 5 );

    vec1.div( vec2 );
    console.log( vec1.toString() );
    // => "{ x: 2, y: 3, z: 2 }"

    vec1.div( 2 );
    console.log( vec1.toString() );
    // => "{ x: 1, y: 1.5, z: 1 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to divide this one by or the scalar to divide by

### Return:

* **PVector** `this`

## PVector.prototype.divX(vec_or_scal)

Divides this vector's X axis by another one's or divides this vector's X axis by the given scalar.

### Examples:
    var vec1 = new PVector( 20, 30, 10 );
    var vec2 = new PVector( 10, 10, 5 );

    vec1.divX( vec2 );
    console.log( vec1.toString() );
    // => "{ x: 2, y: 30, z: 10 }"

    vec1.divX( 2 );
    console.log( vec1.toString() );
    // => "{ x: 1, y: 30, z: 10 }"

### Params:

* **PVector** *vec_or_scal* The other vector you want to divide this one's X axis by or the scalar to divide this one's X axis by.

### Return:

* **PVector** `this`

## PVector.prototype.divY(vec_or_scal)

Same as divX with Y axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to divide this one's Y axis by or the scalar to divide this one's Y axis by.

### Return:

* **PVector** `this`

## PVector.prototype.divZ(vec_or_scal)

Same as divX with Z axis.

### Params:

* **PVector** *vec_or_scal* The other vector you want to divide this one's Z axis by or the scalar to divide this one's Z axis by.

### Return:

* **PVector** `this`

## PVector.prototype.lerp(vec_or_sacl, amount)

Performs a linear interpolation towards another vector. A value can be passed instead of a vector.

### Examples:
    var vec1 = new PVector( 100, 100 );
    var vec2 = new PVector( 200, 200 );

    vec1.lerp( vec2, 0.5 );
    console.log( vec.toArray() );
    // => [ 150, 150, 0 ]

### Params:

* **PVector** *vec_or_sacl* The other vector or value
* **Number** *amount* The blend amount

### Return:

* **PVector** `this`

## PVector.prototype.lerpX(vec_or_scal, amount)

Performs a linear interpolation of this vector's X  towards another vector's X axis. A value can be passed instead of a vector.

### Examples:
    var vec1 = new PVector( 100, 100 );
    var vec2 = new PVector( 200, 200 );

    vec1.lerpX( vec2, 0.7 );
    console.log( vec1.toArray() );
    // => [ 170, 100, 0 ]

    vec1.lerpX( 270, 0.5 );
    console.log( vec.toArray() );
    // => [ 220, 100, 0 ]

### Params:

* **PVector** *vec_or_scal* The other vector or value
* **Number** *amount* The blend amount

### Return:

* **PVector** `this`

## PVector.prototype.lerpY(vec_or_scal, amount)

Same as lerpX with Y axis.

### Params:

* **PVector** *vec_or_scal* The other vector or value
* **Number** *amount* The blend amount

### Return:

* **PVector** `this`

## PVector.prototype.lerpZ(vec_or_scal, amount)

Same as lerpX with Z axis.

### Params:

* **PVector** *vec_or_scal* The other vector or value
* **Number** *amount* The blend amount

### Return:

* **PVector** `this`

## PVector.prototype.cross(vec)

Calculates and returns a vector composed of the cross product between two vectors.

### Examples:
    var vec = new PVector( 10, 20, 2 );
    var vec2 = new PVector( 60, 80, 6 );

    vec.cross( vec2 );
    console.log( vec.toArray() );
    // => "[ -40.0, 60.0, -400.0 ]"

### Params:

* **PVector** *vec* The vector to calculate the cross product

### Return:

* **PVector** `this`

## PVector.prototype.projectOnto(vec)

Projects a vector onto another vector, setting itself to the result.

### Examples:
    var vec = new PVector( 100, 0 );
    var vec2 = new PVector( 100, 100 );

    vec.projectOnto( vec2 );
    console.log( vec.toString() );
    // => "{ x: 50, y: 50, z: 0 }"

### Params:

* **PVector** *vec* the vector to calculate the cross product

### Return:

* **PVector** `this`

## PVector.prototype.applyFunc(vec)

Applies a function taking a vector as argument to this vector. Allows extending of the library while keeping chaining;

### Examples:
    function doubleXY( pvec ){
        pvec.x *= 2;
        pvec.y *= 2;
    }

    var vec = new PVector( 100, 40 );
    vec.func( doubleXY );

    console.log( vec.toString() );
    // => "{ x: 200, y: 80, z: 0 }"

### Params:

* **PVector** *vec* The other vector you want to project this vector onto

### Return:

* **PVector** `this`

## Utility methods

These functions are not chainable in the way they return a value, not a PVector.

## PVector.prototype.mag()

Returns the vector's magnitude or alias of setMag if a value is passed as parameter.

### Examples:
    var vec1 = new PVector( 4, 3 );

    console.log( vec1.mag() );
    // => 5
    
    vec1.mag( 10 );
    console.log( vec1.mag() );
    // => 10

### Return:

* **Number_or_this** magnitude_or_this Return magnitude or this if a value is passed as parameter

## PVector.prototype.magSq()

Returns the vector's squared magnitude.

### Examples:
    var vec1 = new PVector( 4, 3 );

    console.log( vec1.magSq() );
    // => 25

### Return:

* **Number** magnitude

## PVector.prototype.dist(vector)

Calculates the euclidean distance between this vector and another.

### Examples:
    var vec1 = new PVector( 100, 50 );
    var vec2 = new PVector( 200, 60 );

    vec1.dist( vec2 );
    // => 100.4987562112089

### Params:

* **PVector** *vector* 

### Return:

* **Number** distance

## PVector.prototype.distX(vector)

Calculates the distance of the X axis between this vector and another.

### Examples:
    var vec1 = new PVector( 100, 50 );
    var vec2 = new PVector( 200, 60 );

    vec1.distX( vec2 );
    // => -100

### Params:

* **PVector** *vector* 

### Return:

* **Number** distance

## PVector.prototype.distY(vector)

Same as distX with Y axis.

### Params:

* **PVector** *vector* 

### Return:

* **Number** distance

## PVector.prototype.distZ(vector)

Same as distX with Z axis.

### Params:

* **PVector** *vector* 

### Return:

* **Number** distance

## PVector.prototype.distSq(vector)

Calculates the squared euclidean distance between this vector and another.

### Examples:
    var vec1 = new PVector( 100, 50 );
    var vec2 = new PVector( 200, 60 );

    vec1.distSq( vec2 );
    // => 10100

### Params:

* **PVector** *vector* 

### Return:

* **Number** distance

## PVector.prototype.angle2D()

Calculates the angle of rotation in radians for a vector (2D vectors only).

### Examples:
    var vec1 = new PVector( 10, 20 );

    console.log( vec1.angle2D() );
    // => 1.1071488

### Return:

* **Number** angle

## PVector.prototype.dot(vector)

Calculates the dot product of this vector and another.

### Examples:
    var vec1 = new PVector( 100, 50 );
    var vec2 = new PVector( 200, 60 );

    console.log( vec1.dot( vec2 ) );
    // => 23000

### Params:

* **PVector** *vector* 

### Return:

* **Number** value Dot product

## Comparison methods

These functions are not chainable in the way they return a value, not a PVector.

## PVector.prototype.isZero()

Returns a true if vector is ( 0, 0, 0 ).

### Examples:
    var vec = new PVector( 100, 50, 130 );
    vec.zero();
    
    console.log( vec.isZero() );
    // => true

### Return:

* **Boolean** 

## PVector.prototype.isEqual()

Returns true if each of this vector' axis are the same as another vector's.

### Examples:
    var vec1 = new PVector( 100, 50, 70 );
    var vec2 = new PVector( 100, 50, 70 );
    var vec3 = new PVector( 100, 10, 70 );

    console.log( vec1.isEqualTo( vec2 ) );
    // => true

    console.log( vec1.isEqualTo( vec3 ) );
    // => false

### Return:

* **Boolean** 

## Conversion methods

These functions are not chainable in the way they return a value, not a PVector.

## PVector.prototype.toString()

Returns a String representation of this vector's x, y and z axis.

### Examples:
    var vec1 = new PVector( 100, 50, 70 );

    console.log( vec1.toString() );
    // => "{ x: 100, y: 50, z: 70 }"

### Return:

* **String** 

## PVector.prototype.toObject()

Returns an Object representation of this vector's x, y and z axis.

### Examples:
    var vec1 = new PVector( 100, 50, 70 );

    console.log( vec1.toObject() );
    // => { x: 100, y: 50, z: 70 }

### Return:

* **Object** 

## PVector.prototype.toArray()

Returns an Array representation of this vector's x, y and z axis.

### Examples:
    var vec1 = new PVector( 100, 50, 70 );

    console.log( vec1.toArray() );
    // => [ 100, 50, 70 ]

### Return:

* **Array** 

<!-- End index.js -->

