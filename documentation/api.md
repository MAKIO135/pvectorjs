

<!-- Start index.js -->

# PVectorjs - A JavaScript vector class for common vector operations based on Processing.js PVector class and Victor.js

## PVector(x, y, z, arr, obj)

Constructor. Works without the `new` keyword

### Examples:
    var vec1a = new PVector( 100, 50 );
    console.log( vec1a.toString() );
    // => "{ x: 100, y: 50, z: 0 }"

    var vec1b = new PVector( 100, 50, 12 );
    console.log( vec1a.toString() );
    // => "{ x: 100, y: 50, z: 12 }"

    // Use constructor without the `new` keyword:
    var vec2a = PVector( 42, 17 );
    console.log( vec2a.toString() );
    // => "{ x: 42, y: 17, z: 0 }"

    var vec2b = PVector( 42, 17, 10 );
    console.log( vec2b.toString() );
    // => "{ x: 42, y: 17, z: 10 }"

    // Create a new vector from an array with a length of 2 or 3:
    var vec3a = PVector( [ 4, 12 ] );
    console.log( vec3a.toString() );
    // => "{ x: 4, y: 12, z: 0 }"

    var vec3b = PVector( [ 4, 12, 5 ] );
    console.log( vec3b.toString() );
    // => "{ x: 4, y: 12, z: 5 }"

    // Create a new vector from an object:
    var vec4a = PVector( { x: 30, y: 34 } );
    console.log( vec4b.toString() );
    // => "{ x: 30, y: 34, z: 0 }"

    var vec4b = PVector( { x: 30, y: 34, z: 20 } );
    console.log( vec4d.toString() );
    // => "{ x: 30, y: 34, z: 20 }"

    // Create a new 0 PVector:
    var v = PVector();
    console.log( v.toString() );
    // => "{ x: 0, y: 0, z: 0 }"

### Params:

* **Number** *x* Value of the x axis
* **Number** *y* Value of the y axis
* **Number** *z* Value of the z axis
* **Array** *arr* Array of 2 or 3 values
* **Object** *obj* Object with x, y (and z) properties

### Return:

* **PVector** 

## x

The X axis

### Examples:
    var vec = new PVector(42, 21);

    vec.x;
    // => 42

## y

The Y axis

### Examples:
    var vec = new PVector(42, 21);

    vec.y;
    // => 21

## z

The Z axis

### Examples:
    var vec = new PVector(42, 21, 15);

    vec.z;
    // => 15

# Static Methods

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

## PVector.random2D()

Returns a new 2D unit vector with a random direction.

### Examples:
    var vec = PVector.random2D();

    console.log( vec.toString() );
    // => "[ -0.75006354, -0.6613658, 0.0 ]"

### Return:

* **PVector** 

## PVector.random3D()

Returns a new 3D unit vector with a random direction.

### Examples:
    var vec = PVector.random2D();

    console.log( vec.toString() );
    // => "[ 0.6091097, -0.22805278, -0.7595902 ]"

### Return:

* **PVector** 

## set()

_____      __ 
    / ___/___  / /_
    \__ \/ _ \/ __/
   ___/ /  __/ /_  
  /____/\___/\__/

## clone()

________               
    / ____/ /___  ____  ___ 
   / /   / / __ \/ __ \/ _ \
  / /___/ / /_/ / / / /  __/
  \____/_/\____/_/ /_/\___/

## copy()

______                 
    / ____/___  ____  __  __
   / /   / __ \/ __ \/ / / /
  / /___/ /_/ / /_/ / /_/ / 
  \____/\____/ .___/\__, /  
            /_/    /____/

## toString()

______                                _                 
    / ____/___  ____ _   _____  __________(_)___  ____  _____
   / /   / __ \/ __ \ | / / _ \/ ___/ ___/ / __ \/ __ \/ ___/
  / /___/ /_/ / / / / |/ /  __/ /  (__  ) / /_/ / / / (__  ) 
  \____/\____/_/ /_/|___/\___/_/  /____/_/\____/_/ /_/____/

<!-- End index.js -->

