
declare module 'pvectorjs' {
    type PVectorOrNumber = PVectorValue | number

    interface PVectorValue {
        /** The x value of a PVector */
        x: number

        /** The y value of a PVector */
        y: number

        /** The z value of a PVector (If a 3d pvector) */
        z?: number
    }

    /**
     * A JavaScript 2D/3D vector class with chainable methods for common vector operations based on Processing PVector class
     */
    export default class PVector implements PVectorValue {
        // Properties
        public x: number
        public y: number
        public z?: number

        constructor(x?: number, y?: number, z?: number)
        constructor(vec: PVectorValue)
    

        // STATIC METHODS

        /**
         * Calculates and returns a new 2D unit vector from the specified angle value (in radians).
         * @param angle the angle in radians
         */
        static fromAngle(angle: number): PVector

        /**
         * Returns a new 2D unit vector with a random direction.
         */
        static random2D(): PVector

        /**
         * Returns a new 3D unit vector with a random direction.
         */
        static random3D(): PVector

        /**
         * Returns a new random vector.
         * @param vmax_or_vmin PVector used as max if 1 argument, as min if 2 (Optional)
         * @param vmax PVector used as max (Optional)
         */
        static random(vmax_or_vmin?: PVector, vmax?: PVector): PVector


        // UTILITY METHODS
        /**
         * Calculates and returns the angle (in radians) between two vectors.
         * @param v1 PVector v1 Any variable of type PVector
         * @param v2 PVector v2 Any variable of type PVector
         */
        static angleBetween(v1: PVector, v2: PVector): number

        /**
         * Converts a value in radians to a value in degrees.
         * @param angleRadians Number radians An angle in radians
         */
        static radian2degrees(angleRadians: number): number
        
        /**
         * Converts a value in degrees to a value in radians.
         * @param degrees Number degrees An angle in degrees
         */
        static degrees2radians(degrees: number): number

        /**
         * Calculates a number between two numbers at a specific increment. The amount parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.
         * @param a Number a First value
         * @param b Number b Second value
         * @param amount Number amount Number between 0.0 and 1.0
         */
        static lerpVal(a: number, b: number, amount: number): number

        //Manipulation methods
        /**
         * Creates a clone of this vector.
         * @returns PVector cloneVec A clone of the vector
         */
        clone(): PVector

        /**
         * Alias for clone method. Creates a clone of this vector.
         * @returns PVector cloneVec A clone of the vector
         */
        copy(): PVector

        /**
         * Sets this vector's components from an object, a value or another vector by copying its components
         * @param vec_or_x Object_or_Number vec_or_x Can be an Object with x, y (and z) properties or the value of the X axis
         * @param y Number y Value of the y axis
         * @param z Number z Value of the z axis
         * @returns PVector this
         */
        set(vec_or_x: PVectorOrNumber, y: number, z: number): PVector

        /**
         * Sets this vector's X component from an object, a value or another vector by copying its X component.
         * @param vec_or_x Object_or_Number vec_or_x Can be an Object with x, y (and z) properties, or the value of the X axis
         * @returns PVector this
         */
        setX(vec_or_x: PVectorOrNumber): PVector

        /**
         * Same as setX with Y axis.
         * @param vec_or_y Object_or_Number vec_or_y Can be an Object with x, y (and z) properties, or the value of the Y axis
         * @returns PVector this
         */
        setY(vec_or_y: PVectorOrNumber): PVector

        /**
         * Same as setX with Z axis.
         * @param vec_or_z Object_or_Number vec_or_z Can be an Object with x, y and z properties, or the value of the Z axis
         * @returns PVector this
         */
        setZ(vec_or_z: PVectorOrNumber): PVector

        /**
         * Inverts each axis.
         * @returns PVector this
         */
        invert(): PVector

        /**
         * Inverts the X axis.
         * @returns PVector this
         */
        invertX(): PVector

        /**
         * Same as invertX with y axis.
         * @returns PVector this
         */
        invertY(): PVector

        /**
         * Same as invertX with Z axis.
         * @returns PVector this
         */
        invertZ(): PVector

        /**
         * Normalize the vector.
         * @returns PVector this
         */
        norm(): PVector

        /**
         * Sets this vector's magnitude to the passed value or to the passed vector's magnitude.
         * @param mag The magnatude to set
         * @returns PVector this
         */
        setMag(mag: PVectorOrNumber): PVector

        /**
         * Sets the minimum for this vector's magnitude. If the magnitude is inferior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.
         * @param min Vector min
         * @returns PVector this
         */
        minMag(min: PVectorOrNumber): PVector

        /**
         * Sets the maximum for this vector's magnitude. If the magnitude is superior to the passed value, this vector will be scaled to the desired magnitude. A vector can also be passed as parameter, its magnitude will be used for comparison.
         * @param Vector max
         * @returns PVector this
         */
        maxMag(max: PVectorOrNumber): PVector

        /**
         * Constrains this vector's magnitude to the passed values. If the magnitude is inferior or superior to the passed values, this vector will be scaled to reach the desired range (lower limit if inferior, upper limit if superior). Vectors can also be passed as parameter, their magnitudes will be used for comparison.
         * @param min Vector min
         * @param max Vector max
         * @returns PVector this
         */
        clampMag(min: number, max: number): PVector

        /**
         * Sets the minimum for each of this vector's axis to the passed value or to each of the passed vector.
         * @param min 
         */
        min(min: PVectorOrNumber): PVector

        /**
         * Sets the minimum for this vector's X axis to the passed value or to the passed vector's X axis.
         * @param min 
         */
        minX(min: PVectorOrNumber): PVector

        /**
         * Same as limitX with Y axis.
         * @param min 
         */
        minY(min: PVectorOrNumber): PVector

        /**
         * Same as limitX with Z axis.
         * @param min 
         */
        minZ(min: PVectorOrNumber): PVector

        /**
         * Sets the maximum for each of this vector's axis to the passed value or to each of the passed vector.
         * @param max 
         */
        max(max: PVectorOrNumber): PVector

        /**
         * Sets the maximum for this vector's X axis to the passed value or to the passed vector's X axis.
         * @param max 
         */
        maxX(max: PVectorOrNumber): PVector

        /**
         * Same as maxX with Y axis.
         * @param max 
         */
        maxY(max: PVectorOrNumber): PVector

        /**
         * Same as maxX with Z axis.
         * @param max 
         */
        maxZ(max: PVectorOrNumber): PVector

        /**
         * Constrains each of this vector's axis between the passed min and max. Min and max can be scalar or vector, in this case each axis will be constrained between the corresponding axis of the passed vectors.
         * @param min 
         * @param max 
         */
        clamp(min: PVectorOrNumber, max: PVectorOrNumber): PVector

        /**
         * Constrains this vector's X axis between the passed min and max. Min and max can be scalar or vector, in this case X axis will be constrained between the X axis of the passed vectors.
         * @param min 
         * @param max 
         */
        clampX(min: PVectorOrNumber, max: PVectorOrNumber): PVector

        /**
         * Same as clampX with Y axis.
         * @param min 
         * @param max 
         */
        clampY(min: PVectorOrNumber, max: PVectorOrNumber): PVector

        /**
         * Same as clampX with Z axis.
         * @param min 
         * @param max 
         */
        clampZ(min: PVectorOrNumber, max: PVectorOrNumber): PVector

        /**
         * Rotates a vector to the specified angle in radians (2D vectors only), while maintaining the same magnitude.
         * @param rad 
         */
        rotateTo(rad: number): PVector

        /**
         * Adds the passed angle in radians to the vector's rotation(2D vectors only), while maintaining the same magnitude.
         * @param rad 
         */
        rotateBy(rad: number): PVector

        /**
         * Rounds each of this vector's axis to an integer value.
         */
        round(): PVector

        /**
         * Floors each of this vector's axis to an integer value.
         */
        floor(): PVector

        /**
         * Ceils each of this vector's axis to an integer value.
         */
        ceil(): PVector

        /**
         * Rounds axis to a certain precision.
         * @param precision Number Precision (default: 8)
         */
        toFixed(precision: number): PVector

        /**
         * Sets each of this vector's axis to 0.
         */
        zero(): PVector

        // Vector Operations
        /**
         * Adds another vector to this one or adds the given scalar to each vector's axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to add to this one or the scalar to add
         */
        add(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Adds another vector's X axis to this one or adds the given scalar to this one's X axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to add or the scalar to add to this one's X axis
         */
        addX(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as addX with Y axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to add or the scalar to add to this one's Y axis
         */
        addY(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as addX with Z axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to add or the scalar to add to this one's Z axis
         */
        addZ(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Substracts another vector from this one or substracts the given scalar from each vector's axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to substract from this one or the scalar to substract
         */
        sub(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Substracts another vector's X axis from this one or substracts the given scalar from this one's X axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to substract or the scalar to substract from this one's X axis
         */
        subX(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as subX with Y axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to substract or the scalar to substract from this one's Y axis
         */
        subY(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as subX with Z axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to substract or the scalar to substract from this one's Z axis
         */
        subZ(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Multiplies another vector with this one or multiplies the given scalar with each vector's axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to multiply with this one or the scalar to multiply
         */
        mult(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Multiplies another vector's X axis with this one or multiplies the given scalar with this one's X axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to multiply or the scalar to multiply with this one's X axis
         */
        multX(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as multX with Y axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to multiply or the scalar to multiply with this one's Y axis
         */
        multY(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as multX with Z axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to multiply or the scalar to multiply with this one's Z axis
         */
        multZ(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Divides this vector by another one or divides each vector's axis by the given scalar.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to divide this one by or the scalar to divide by
         */
        div(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Divides this vector's X axis by another one's or divides this vector's X axis by the given scalar.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to divide this one's X axis by or the scalar to divide this one's X axis by.
         */
        divX(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as divX with Y axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to divide this one's Y axis by or the scalar to divide this one's Y axis by.
         */
        divY(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Same as divX with Z axis.
         * @param vec_or_scal PVector vec_or_scal The other vector you want to divide this one's Z axis by or the scalar to divide this one's Z axis by.
         */
        divZ(vec_or_scal: PVectorOrNumber): PVector

        /**
         * Performs a linear interpolation towards another vector. A value can be passed instead of a vector.
         * @param vec_or_sacl PVector vec_or_sacl The other vector or value
         * @param amount Number amount The blend amount
         */
        lerp(vec_or_sacl: PVectorOrNumber, amount: number): PVector

        /**
         * Performs a linear interpolation of this vector's X towards another vector's X axis. A value can be passed instead of a vector.
         * @param vec_or_scal PVector vec_or_scal The other vector or value
         * @param amount Number amount The blend amount
         */
        lerpX(vec_or_scal: PVectorOrNumber, amount: number): PVector

        /**
         * Same as lerpX with Y axis.
         * @param vec_or_scal PVector vec_or_scal The other vector or value
         * @param amount Number amount The blend amount
         */
        lerpY(vec_or_scal: PVectorOrNumber, amount: number): PVector

        /**
         * Same as lerpX with Z axis
         * @param vec_or_scal PVector vec_or_scal The other vector or value
         * @param amount Number amount The blend amount
         */
        lerpZ(vec_or_scal: PVectorOrNumber, amount: number): PVector

        /**
         * Calculates and returns a vector composed of the cross product between two vectors, setting itself to the result.
         * @param v PVector v The vector to calculate the cross product
         */
        cross(v: PVectorValue): PVector

        /**
         * Projects this vector onto another vector, setting itself to the result.
         * @param v PVector v the vector to calculate the projection
         */
        projectOnto(v: PVectorValue): PVector

        /**
         * 
         * @param v 
         */
        applyFunc(fn: (vec: PVector) => {}): PVector

        // Utility
        /**
         * Returns the vector's magnitude.
         * @returns Return magnitude 
         */
        mag(): number

        /**
         * Alias of setMag if a value is passed as parameter.
         * @param mag Number_or_undefined mag if a parameter is passed, sets the magnitude of the vector
         * @returns magnitude_or_this Return magnitude or this if a value is passed as parameter
         */
        mag(mag: number): PVector;

        /**
         * Returns the vector's squared magnitude.
         */
        magSq(): number

        /**
         * Calculates the euclidean distance between this vector and another.
         * @param vector 
         */
        dist(vector: PVectorValue): number

        /**
         * Calculates the distance of the X axis between this vector and another.
         * @param vector 
         */
        distX(vector: PVectorValue): number

        /**
         * Same as distX with Y axis.
         * @param vector 
         */
        distY(vector: PVectorValue): number

        /**
         * Same as distX with Z axis.
         * @param vector 
         */
        distZ(vector: PVectorValue): number

        /**
         * Calculates the squared euclidean distance between this vector and another.
         * @param vector 
         */
        distSq(vector: PVectorValue): number

        /**
         * Calculates the Manhattan distance between this vector and another
         * @param vector 
         */
        manhattanDist(vector: PVectorValue): number

        /**
         * Calculates the angle of rotation in radians for a vector (2D vectors only).
         */
        angle2D()

        /**
         * Calculates the dot product of this vector and another.
         * @param vector 
         */
        dot(vector: PVectorValue): PVector

        // Comparison
        /**
         * Returns a true if vector is (0, 0, 0).
         */
        isZero(): boolean

        /**
         * Returns true if each of this vector' axis are the same as another vector's.
         */
        isEqualTo(vec: PVectorValue): boolean

        // Conversions
        /**
         * Returns a String representation of this vector's x, y and z axis.
         */
        toString(): string

        /**
         * Returns an Object representation of this vector's x, y and z axis.
         */
        toObject(): PVectorValue

        /**
         * Returns an Array representation of this vector's x, y and z axis.
         */
        toArray(): [number, number, number]
    }
}