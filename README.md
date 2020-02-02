PVectorJS
=========
A JavaScript 2D/3D vector class with chainable methods for common vector operations based on Processing PVector class

[![PVectorJS](pvectorjs.png)](http://jsbin.com/voselic/edit?html,js,output)

## Installation

### Node.js / Browserify

```bash
npm install pvectorjs --save
```

```javascript
const PVector = require('pvectorjs')
const vec = new PVector(42, 1337)
```

### Bower

```bash
bower install pvectorjs --save
```

### Global object

Include the pre-built script.

```html
<script src="./build/pvector.js"></script>
<script>
    const vec = new PVector(42, 1337)
</script>
```

## Build & test

```bash
npm run build
```

```bash
npm test
```

# Documentation
<details>
<summary>
    The <code>PVector(vec_or_x, y, z)</code> constructor
</summary>
Works with or without the `new` keyword.

```javascript
const v1 = new PVector(100, 50)
console.log(v1.toString()) // "{ x: 100, y: 50, z: 0 }"

// Use constructor without the new keyword:
const v2 = PVector(42, 17, 10)
console.log(v2.toString()) // "{ x: 42, y: 17, z: 10 }"

// Create a new vector from an object:
const v3 = PVector({ x: 30, y: 34, z: 20 })
console.log(v3.toString()) // "{ x: 30, y: 34, z: 20 }"

// Create a new 0 PVector:
const v4 = PVector()
console.log(v4.toString()) // "{ x: 0, y: 0, z: 0 }"
```

#### Params:
- `vec_or_x`: **Object_or_Number**, can be an Object with x, y (and z) properties or the value of the X axis
- `y`: **Number**, value of the Y axis
- `z`: **Number**, value of the Z axis

#### Returns:
- a `PVector` Object
</details>

<details>
<summary><code>x</code>, <code>y</code> and <code>z</code> properties</summary>

A `PVector` always has `x`, `y` and `z` properties:
- <code>x</code>: **Number**, the X axis
- <code>y</code>: **Number**, the Y axis
- <code>z</code>: **Number**, the Z axis

```javascript
const v = new PVector(42, 21, 15)
console.log(v.x) // 42
console.log(v.y) // 21
console.log(v.z) // 15
```
</details>

## Static Methods

### Instanciation Methods

<details>
<summary><code>PVector.random2D()</code></summary>

Returns a new 2D unit vector with a random direction.

```javascript
const v = PVector.random2D()
console.log(v.toArray()) // [ -0.75006354, -0.6613658, 0.0 ]
```

#### Returns:
- a `PVector` Object
</details>

<details>
<summary><code>PVector.random3D()</code></summary>
Returns a new 3D unit vector with a random direction.

```javascript
const v = PVector.random3D()
console.log(v.toArray()) // [ 0.6091097, -0.22805278, -0.7595902 ]
```

#### Returns:
- a `PVector` Object
</details>

<details>
<summary><code>PVector.fromAngle(angle)</code></summary>
Calculates and returns a new 2D unit vector from the specified angle value (in radians).

```javascript
const v = PVector.fromAngle(0.01)
console.log(v.toString()) // [ 0.99995, 0.009999833, 0.0 ]
```

#### Params:
- **Number** *angle* The angle in radians

#### Returns:
- **PVector** 
</details>

### Utility Methods
<details>
<summary><code>PVector.angleBetween(v1, v2)</code></summary>

Calculates and returns the angle (in radians) between two vectors.

```javascript
const v1 = new PVector(10, 20)
const v2 = new PVector(60, 80)
const angle = PVector.angleBetween(v1, v2)
console.log(angle)
// 0.1798535
````

#### Params:
- **PVector** *v1* Any variable of type PVector
- **PVector** *v2* Any variable of type PVector

#### Returns:
- **Number** 
</details>

<details>
<summary><code>PVector.radian2degrees(radians)</code></summary>

Converts a value in radians to a value in degrees.

```javascript
const angleRadians = Math.PI / 2
const angleDegrees = PVector.radians2degrees(angleRadians)
console.log(angleDegrees) // 90
```

#### Params:
- **Number** *radians* An angle in radians

#### Returns:
- **Number** 
</details>

<details>
<summary><code>PVector.degrees2radians(degrees)</code></summary>

Converts a value in degrees to a value in radians.

```javascript
const angleDegrees = 90
const angleRadians = PVector.degrees2radian(angleDegrees)
console.log(angleRadians) // 1.5707963267948966
```

#### Params:
- **Number** *degrees* An angle in degrees

#### Returns:
    - **Number** 
</details>

<details>
<summary><code>PVector.lerpVal(a, b, amount)</code></summary>

Calculates a number between two numbers at a specific increment. The amount parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.

```javascript
const foo = PVector.lerpVal(10, 20, 0.75)
console.log(foo) // 17.5
```

#### Params:
- **Number** *a* First value
- **Number** *b* Second value
- **Number** *amount* Number between 0.0 and 1.0

#### Returns:
- **Number** 
</details>

## PVector.prototype Methods

### Manipulation methods

**These functions are chainable.**

<details>
<summary><code>PVector.prototype.clone()</code></summary>

Creates a clone of this vector.

```javascript
const v1 = PVector(10, 10)
const v2 = v1.clone()
v2.toString() // "{ x: 10, y: 10 }"
```

#### Returns:
- **PVector** cloneVec A clone of the vector

<summary><code>PVector.prototype.set(vec_or_x, y, z)</code></summary>

Sets this vector's components from an object, a value or another vector by copying its components

```javascript
const v1 = new PVector(10, 10, 50)
const v2 = new PVector(20, 20, 20)
v2.set(v1)
console.log(v2.toString()) // "{ x: 10, y: 10, z: 50 }"
```

#### Params:
- **Object_or_Number** *vec_or_x* Can be an Object with x, y (and z) properties or the value of the X axis
- **Number** *y* Value of the y axis
- **Number** *z* Value of the z axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.setX(vec_or_x)</code></summary>

Sets this vector's X component from an object, a value or another vector by copying its X component.

```javascript
const v1 = new PVector(10, 10)
const v2 = new PVector(20, 20)
v2.setX(v1) // equals to v2.setX(10)
console.log(v2.toString()) // "{ x: 10, y: 20, z: 0 }"
```

#### Params:
- **Object_or_Number** *vec_or_x* Can be an Object with x, y (and z) properties, or the value of the X axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.setY(vec_or_y)</code></summary>

Same as setX with Y axis.

#### Params:
- **Object_or_Number** *vec_or_y* Can be an Object with x, y (and z) properties, or the value of the Y axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.setZ(vec_or_z)</code></summary>

Same as setX with Z axis.

#### Params:
- **Object_or_Number** *vec_or_z* Can be an Object with x, y and z properties, or the value of the Z axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.invert()</code></summary>

Inverts each axis.

```javascript
const v = new PVector(100, 50)
v.invert()
v.toString() // x:-100, y:-50
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.invertX()</code></summary>

Inverts the X axis.

```javascript
const v = new PVector(100, 50)

v.invertX()
v.toString()
// x:-100, y:50
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.invertY()</code></summary>

Same as invertX with y axis.

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.invertZ()</code></summary>

Same as invertX with Z axis.

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.norm()</code></summary>

Normalize the vector.

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.setMag()</code></summary>

Sets this vector's magnitude to the passed value or to the passed vector's magnitude.

```javascript
const v1 = new PVector(10, 10, 25)
v1.setMag(10)
console.log(v1.toArray()) // [ 3.481553119113957, 3.481553119113957, 8.703882797784892 ]
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.minMag(min)</code></summary>

Sets the minimum for this vector's magnitude. If the magnitude is inferior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.

```javascript
const v1 = new PVector(1, 2, .2)
v1.minMag(5)
console.log(v1.toArray()) // [ 2.2271771, 4.4543543, 0.4454354 ]
```

#### Params:
- **Vector** *min* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.maxMag(max)</code></summary>

Sets the maximum for this vector's magnitude. If the magnitude is superior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.

```javascript
const v1 = new PVector(10, 20, 2)
v1.maxMag(5)
console.log(v1.toArray()) // [ 2.2271771, 4.4543543, 0.4454354 ]
```

#### Params:
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.clampMag(min, max)</code></summary>

Constrains this vector's magnitude to the passed values. If the magnitude is inferior or superior to the passed values, this vector will be scaled to reach the desired range (lower limit if inferior, upper limit if superior). Vectors can also be passed as parameter, their magnitudes will be used for comparison.

```javascript
const v1 = new PVector(1, 1, .2)
v1.clampMag(5, 10)
console.log(v1.toArray()) // [ 2.2271771, 4.4543543, 0.4454354 ]
```

#### Params:
- **Vector** *min* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.min(min, min)</code></summary>

Sets the minimum for each of this vector's axis to the passed value or to each of the passed vector.

```javascript
const v1 = new PVector(15, 10, 25)
v1.min(12)
console.log(v1.toArray()) // [ 15, 12, 25 ]
```

#### Params:
- **Number** *min* 
- **Vector** *min* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.minX(min, min)</code></summary>

Sets the minimum for this vector's X axis to the passed value or to the passed vector's X axis.

```javascript
const v1 = new PVector(15, 10, 25)
v1.minX(20)
console.log(v1.toArray()) // [ 20, 10, 25 ]
```

#### Params:
- **Number** *min* 
- **Vector** *min* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.minY(min, min)</code></summary>

Same as limitX with Y axis.

#### Params:
- **Number** *min* 
- **Vector** *min* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.minZ(min, min)</code></summary>

Same as limitX with Z axis.

#### Params:
- **Number** *min* 
- **Vector** *min* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.max(max, max)</code></summary>

Sets the maximum for each of this vector's axis to the passed value or to each of the passed vector.

```javascript
const v1 = new PVector(15, 10, 25)
v1.max(12)
console.log(v1.toArray()) // [ 12, 10, 12 ]
```

#### Params:
- **Number** *max* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.maxX(max, max)</code></summary>

Sets the maximum for this vector's X axis to the passed value or to the passed vector's X axis.

```javascript
const v1 = new PVector(15, 10, 25)
v1.maxX(12)
console.log(v1.toArray()) // [ 12, 10, 25 ]
```

#### Params:
- **Number** *max* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.maxY(max, max)</code></summary>

Same as limitX with Y axis.

#### Params:
- **Number** *max* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.maxZ(max, max)</code></summary>

Same as limitX with Z axis.

#### Params:
- **Number** *max* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.clamp(min, max)</code></summary>

Constrains each of this vector's axis between the passed min and max.
Min and max can be scalar or vector, in this case each axis will be constrained between the corresponding axis of the passed vectors.

```javascript
const v1 = new PVector(15, 10, 25)
const vmin = new PVector(5, 12, 11)
const vmax = new PVector(35, 18, 20)
v1.clamp(vmin, vmax)
console.log(v1.toArray()) // [ 15, 12, 20 ]
```

#### Params:
- **Vector** *min* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.clampX(min, max)</code></summary>

Constrains this vector's X axis between the passed min and max.
Min and max can be scalar or vector, in this case X axis will be constrained between the X axis of the passed vectors.

```javascript
const v1 = new PVector(15, 10, 25)
const vmin = new PVector(17, 12, 11)
const vmax = new PVector(35, 18, 20)
v1.clampX(vmin, vmax)
console.log(v1.toArray()) // [ 17, 10, 25 ]
```

#### Params:
- **Vector** *min* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.clampY(min, max)</code></summary>

Same as clampX with Y axis.

#### Params:
- **Vector** *min* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.clampZ(min, max)</code></summary>

Same as clampX with Z axis.

#### Params:
- **Vector** *min* 
- **Vector** *max* 

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.rotateTo()</code></summary>

Rotates a vector to the specified angle in radians (2D vectors only), while maintaining the same magnitude.

```javascript
const v = new PVector(10, 20)
v.rotateTo(Math.PI / 2)
console.log(v.toArray()) // [ -20, 9.9999999, 0 ]
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.rotateBy()</code></summary>

Adds the passed angle in radians to the vector's rotation(2D vectors only), while maintaining the same magnitude.

```javascript
const v = new PVector(10, 0)
v.rotateBy(Math.PI / 2)
console.log(v.toArray()) // [ 0, -9.9999999, 0 ]
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.round()</code></summary>

Rounds each of this vector's axis to an integer value.

```javascript
const v = new PVector(100.2254, 50.9786)
v.round()
console.log(v.toString()) // "{ x: 100, y: 51, z: 0 }"
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.floor()</code></summary>

Floors each of this vector's axis to an integer value.

```javascript
const v = new PVector(100.2254, 50.9786)
v.floor()
console.log(v.toString()) // "{ x: 100, y: 50, z: 0 }"
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.ceil()</code></summary>

Ceils each of this vector's axis to an integer value.

```javascript
const v = new PVector(100.2254, 50.9786)
v.ceil()
console.log(v.toString()) // "{ x: 101, y: 51, z: 0 }"
```

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.toFixed(Precision)</code></summary>

Rounds axis to a certain precision.

```javascript
const v = new PVector(100.2254, 50.9786)
v.toFixed(2)
console.log(v.toString()) // "{ x: 100.22, y: 50.97, z: 0 }"
```

#### Params:
- **Number** *Precision* (default: 8)

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.zero()</code></summary>

Sets each of this vector's axis to 0.

```javascript
const v1 = new PVector(10, 10, 25)
v1.zero()
console.log(v1.toArray()) // [ 0, 0, 0 ]
```

#### Returns:
- **PVector** `this`
</details>

### Vector operations

**These functions are chainable.**

<details>
<summary><code>PVector.prototype.add(vec_or_scal)</code></summary>

Adds another vector to this one or adds the given scalar to each vector's axis.

```javascript
const v1 = new PVector(10, 10, 25)
const v2 = new PVector(20, 30, 10)
v1.add(v2)
console.log(v1.toString()) // "{ x: 30, y: 40, z: 35 }"
v1.add(5)
console.log(v1.toString()) // "{ x: 35, y: 45, z: 40 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to add to this one or the scalar to add

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.addX(vec_or_scal)</code></summary>

Adds another vector's X axis to this one or adds the given scalar to this one's X axis.

```javascript
const v1 = new PVector(10, 10, 25)
const v2 = new PVector(20, 30, 10)
v1.addX(v2)
console.log(v1.toString()) // "{ x: 30, y: 10, z: 25 }"
v1.addX(5)
console.log(v1.toString()) // "{ x: 35, y: 10, z: 25 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to add or the scalar to add to this one's X axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.addY(vec_or_scal)</code></summary>

Same as addX with Y axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to add or the scalar to add to this one's Y axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.addZ(vec_or_scal)</code></summary>

Same as addX with Z axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to add or the scalar to add to this one's Z axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.sub(vec_or_scal)</code></summary>

Substracts another vector from this one or substracts the given scalar from each vector's axis.

```javascript
const v1 = new PVector(10, 10, 25)
const v2 = new PVector(20, 30, 10)
v1.sub(v2)
console.log(v1.toString()) // "{ x: -10, y: -20, z: 15 }"
v1.sub(5)
console.log(v1.toString()) // "{ x: -15, y: -25, z: 10 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to substract from this one or the scalar to substract

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.subX(vec_or_scal)</code></summary>

Substracts another vector's X axis from this one or substracts the given scalar from this one's X axis.

```javascript
const v1 = new PVector(10, 10, 25)
const v2 = new PVector(20, 30, 10)
v1.subX(v2)
console.log(v1.toString()) // "{ x: -10, y: 10, z: 25 }"
v1.subX(5)
console.log(v1.toString()) // "{ x: -15, y: 10, z: 25 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to substract or the scalar to substract from this one's X axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.subY(vec_or_scal)</code></summary>

Same as subX with Y axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to substract or the scalar to substract from this one's Y axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.subZ(vec_or_scal)</code></summary>

Same as subX with Z axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to substract or the scalar to substract from this one's Z axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.mult(vec_or_scal)</code></summary>

Multiplies another vector with this one or multiplies the given scalar with each vector's axis.

```javascript
const v1 = new PVector(10, 10, 25)
const v2 = new PVector(20, 30, 10)
v1.mult(v2)
console.log(v1.toString()) // "{ x: 200, y: 300, z: 250 }"
v1.mult(5)
console.log(v1.toString()) // "{ x: 1000, y: 1500, z: 1250 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to multiply with this one or the scalar to multiply

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.multX(vec_or_scal)</code></summary>

Multiplies another vector's X axis with this one or multiplies the given scalar with this one's X axis.

```javascript
const v1 = new PVector(10, 10, 25)
const v2 = new PVector(20, 30, 10)
v1.subX(v2)
console.log(v1.toString()) // "{ x: 200, y: 10, z: 25 }"
v1.subX(5)
console.log(v1.toString()) // "{ x: 1000, y: 10, z: 25 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to multiply or the scalar to multiply with this one's X axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.multY(vec_or_scal)</code></summary>

Same as multX with Y axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to multiply or the scalar to multiply with this one's Y axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.multZ(vec_or_scal)</code></summary>

Same as multX with Z axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to multiply or the scalar to multiply with this one's Z axis

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.div(vec_or_scal)</code></summary>

Divides this vector by another one or divides each vector's axis by the given scalar.

```javascript
const v1 = new PVector(20, 30, 10)
const v2 = new PVector(10, 10, 5)
v1.div(v2)
console.log(v1.toString()) // "{ x: 2, y: 3, z: 2 }"
v1.div(2)
console.log(v1.toString()) // "{ x: 1, y: 1.5, z: 1 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to divide this one by or the scalar to divide by

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.divX(vec_or_scal)</code></summary>

Divides this vector's X axis by another one's or divides this vector's X axis by the given scalar.

```javascript
const v1 = new PVector(20, 30, 10)
const v2 = new PVector(10, 10, 5)
v1.divX(v2)
console.log(v1.toString()) // "{ x: 2, y: 30, z: 10 }"
v1.divX(2)
console.log(v1.toString()) // "{ x: 1, y: 30, z: 10 }"
```

#### Params:
- **PVector** *vec_or_scal* The other vector you want to divide this one's X axis by or the scalar to divide this one's X axis by.

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.divY(vec_or_scal)</code></summary>

Same as divX with Y axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to divide this one's Y axis by or the scalar to divide this one's Y axis by.

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.divZ(vec_or_scal)</code></summary>

Same as divX with Z axis.

#### Params:
- **PVector** *vec_or_scal* The other vector you want to divide this one's Z axis by or the scalar to divide this one's Z axis by.

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.lerp(vec_or_sacl, amount)</code></summary>

Performs a linear interpolation towards another vector. A value can be passed instead of a vector.

```javascript
const v1 = new PVector(100, 100)
const v2 = new PVector(200, 200)
v1.lerp(v2, 0.5)
console.log(v2.toArray()) // [ 150, 150, 0 ]
```

#### Params:
- **PVector** *vec_or_sacl* The other vector or value
- **Number** *amount* The blend amount

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.lerpX(vec_or_scal, amount)</code></summary>

Performs a linear interpolation of this vector's X  towards another vector's X axis. A value can be passed instead of a vector.

```javascript
const v1 = new PVector(100, 100)
const v2 = new PVector(200, 200)
v1.lerpX(v2, 0.7)
console.log(v1.toArray()) // [ 170, 100, 0 ]
v1.lerpX(270, 0.5)
console.log(v1.toArray()) // [ 220, 100, 0 ]
```

#### Params:
- **PVector** *vec_or_scal* The other vector or value
- **Number** *amount* The blend amount

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.lerpY(vec_or_scal, amount)</code></summary>

Same as lerpX with Y axis.

#### Params:
- **PVector** *vec_or_scal* The other vector or value
- **Number** *amount* The blend amount

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.lerpZ(vec_or_scal, amount)</code></summary>

Same as lerpX with Z axis.

#### Params:
- **PVector** *vec_or_scal* The other vector or value
- **Number** *amount* The blend amount

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.cross(v)</code></summary>

Calculates and returns a vector composed of the cross product between two vectors, setting itself to the result.

```javascript
const v = new PVector(10, 20, 2)
const v2 = new PVector(60, 80, 6)
v.cross(v2)
console.log(v.toArray()) // [ -40, 360, -24800 ]
```

#### Params:
- **PVector** *v* The vector to calculate the cross product

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.projectOnto(v)</code></summary>

Projects this vector onto another vector, setting itself to the result.

```javascript
const v = new PVector(100, 0)
const v2 = new PVector(100, 100)
v.projectOnto(v2)
console.log(v.toString()) // "{ x: 50, y: 50, z: 0 }"
```

#### Params:
- **PVector** *v* the vector to calculate the cross product

#### Returns:
- **PVector** `this`
</details>

<details>
<summary><code>PVector.prototype.applyFunc(v)</code></summary>

Applies a function taking a vector as argument to this vector. Allows extending of the library while keeping chaining

```javascript
const doubleXY = pvec => {
    pvec.x *= 2
    pvec.y *= 2
}
const v = new PVector(100, 40)
v.applyFunc(doubleXY)
console.log(v.toString()) // "{ x: 200, y: 80, z: 0 }"
```

#### Params:
- **Function** *f* The function you want to apply to this vector

#### Returns:
- **PVector** `this`
</details>

### Utility methods

**These functions are not chainable**: they return a value, not a PVector.

<details>
<summary><code>PVector.prototype.mag()</code></summary>

Returns the vector's magnitude or alias of `setMag` if a value is passed as parameter.

```javascript
const v1 = new PVector(4, 3)
console.log(v1.mag()) // 5
v1.mag(10)
console.log(v1.mag()) // 10
```
#### Params:
- **Number_or_undefined** *mag* if a parameter is passed, sets the magnitude of the vector

#### Returns:
- **Number_or_this** magnitude_or_this Return magnitude or this if a value is passed as parameter
</details>

<details>
<summary><code>PVector.prototype.magSq()</code></summary>

Returns the vector's squared magnitude.

```javascript
const v1 = new PVector(10, 10, 25)
console.log(v1.magSq()) // 825
```

#### Returns:
- **Number** magnitude
</details>

<details>
<summary><code>PVector.prototype.dist(vector)</code></summary>

Calculates the euclidean distance between this vector and another.

```javascript
const v1 = new PVector(100, 50)
const v2 = new PVector(200, 60)
console.log(v1.dist(v2)) // 100.4987562112089
```

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** distance
</details>

<details>
<summary><code>PVector.prototype.distX(vector)</code></summary>

Calculates the distance of the X axis between this vector and another.

```javascript
const v1 = new PVector(100, 50)
const v2 = new PVector(200, 60)
console.log(v1.distX(v2)) // -100
```

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** distance
</details>

<details>
<summary><code>PVector.prototype.distY(vector)</code></summary>

Same as distX with Y axis.

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** distance
</details>

<details>
<summary><code>PVector.prototype.distZ(vector)</code></summary>

Same as distX with Z axis.

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** distance
</details>

<details>
<summary><code>PVector.prototype.distSq(vector)</code></summary>

Calculates the squared euclidean distance between this vector and another.

```javascript
const v1 = new PVector(100, 50)
const v2 = new PVector(200, 60)
console.log(v1.distSq(v2)) // 10100
```

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** distance
</details>

<details>
<summary><code>PVector.prototype.manhattanDist(vector)</code></summary>

Calculates the Manhattan distance between this vector and another.

```javascript
const v1 = new PVector(100, 50)
const v2 = new PVector(200, 60)
console.log(v1.manhattanDist(v2)) // 110
```

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** distance
</details>

<details>
<summary><code>PVector.prototype.angle2D()</code></summary>

Calculates the angle of rotation in radians for a vector (2D vectors only).

```javascript
const v1 = new PVector(10, 20)
console.log(v1.angle2D()) // 1.1071488
```

#### Returns:
- **Number** angle
</details>

<details>
<summary><code>PVector.prototype.dot(vector)</code></summary>

Calculates the dot product of this vector and another.

```javascript
const v1 = new PVector(100, 50)
const v2 = new PVector(200, 60)
console.log(v1.dot(v2)) // 23000
```

#### Params:
- **PVector** *vector* 

#### Returns:
- **Number** value Dot product
</details>

### Comparison methods

**These functions are not chainable**: they return a value, not a PVector.

<details>
<summary><code>PVector.prototype.isZero()</code></summary>

Returns a true if vector is (0, 0, 0).

```javascript
const v = new PVector(100, 50, 130)
v.zero()
console.log(v.isZero()) // true
```

#### Returns:
- **Boolean** 
</details>

<details>
<summary><code>PVector.prototype.isEqual()</code></summary>

Returns true if each of this vector' axis are the same as another vector's.

```javascript
const v1 = new PVector(100, 50, 70)
const v2 = new PVector(100, 50, 70)
const vec3 = new PVector(100, 10, 70)
console.log(v1.isEqualTo(v2)) // true
console.log(v1.isEqualTo(vec3)) // false
```

#### Returns:
- **Boolean** 
</details>

### Conversion methods

**These functions are not chainable**: they return a value, not a PVector.

<details>
<summary><code>PVector.prototype.toString()</code></summary>

Returns a String representation of this vector's x, y and z axis.

```javascript
const v1 = new PVector(100, 50, 70)
console.log(v1.toString()) // "{ x: 100, y: 50, z: 70 }"
```

#### Returns:
- **String** 
</details>

<details>
<summary><code>PVector.prototype.toObject()</code></summary>

Returns an Object representation of this vector's x, y and z axis.

```javascript
const v1 = new PVector(100, 50, 70)
console.log(v1.toObject()) // { x: 100, y: 50, z: 70 }
```

#### Returns:
- **Object** 
</details>

<details>
<summary><code>PVector.prototype.toArray()</code></summary>

Returns an Array representation of this vector's x, y and z axis.

```javascript
const v1 = new PVector(100, 50, 70)
console.log(v1.toArray()) // [ 100, 50, 70 ]
```

#### Returns:
- **Array** 
</details>

