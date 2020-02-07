(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PVector = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function PVector(vec_or_x, y, z) {
    if (arguments.length === 1) {
        return new PVector(
            vec_or_x.x || 0,
            vec_or_x.y || 0,
            vec_or_x.z || 0
        );
    }

    if (! (this instanceof PVector)) {
        return new PVector(vec_or_x || 0, y || 0, z || 0)
    }

    this.x = vec_or_x || 0
    this.y = y || 0
    this.z = z || 0
}
// Static Instanciation Methods
PVector.fromObject = (object) => new PVector(object)
PVector.fromArray = (arr) => new PVector(...arr)
PVector.fromAngle = (angle) => new PVector(Math.cos(angle), Math.sin(angle))
PVector.random2D = () => PVector.fromAngle(Math.random() * Math.PI * 2)
PVector.random3D = () => {
    const angle = Math.random() * Math.PI * 2
    const vz = Math.random() * 2 - 1
    const mult = Math.sqrt(1 - vz * vz)
    const vx = mult * Math.cos(angle)
    const vy = mult * Math.sin(angle)
    return new PVector(vx, vy, vz)
}
PVector.random = (vmax_or_vmin, vmax) => {
    const v = PVector(Math.random(), Math.random(), Math.random())
    if (!(vmax_or_vmin instanceof PVector)) return v
    if (!(vmax instanceof PVector)) return v.mult(vmax_or_vmin)
    return v.mult(vmax.clone().sub(vmax_or_vmin)).add(vmax_or_vmin)
}

// Static Utility Methods
PVector.angleBetween = (v1, v2) =>  Math.acos(v1.dot(v2) / Math.sqrt(v1.magSq() * v2.magSq()))
PVector.radians2degrees = (radians) => radians * (180 / Math.PI)
PVector.degrees2radians = (degrees) => degrees / (180 / Math.PI)
PVector.lerpVal = (a, b, amount) => a + (b - a) * amount

PVector.prototype = {
    // Manipulation methods
    clone: function() {
        return new PVector(this.x, this.y, this.z)
    },
    set: function(vec_or_x, y, z) {
        if (arguments.length === 1) {
            this.set(vec_or_x.x || 0,
                vec_or_x.y || 0,
                vec_or_x.z || 0)
        } 
        else {
            this.x = vec_or_x || 0
            this.y = y || 0
            this.z = z || 0
        }
        return this
    },
    setX: function(vec_or_x) {
        if (typeof vec_or_x === 'number') this.x = vec_or_x
        else this.x = vec_or_x.x
        return this
    },
    setY: function(vec_or_y) {
        if (typeof vec_or_y === 'number') this.y = vec_or_y
        else this.y = vec_or_y.y
        return this
    },
    setZ: function(vec_or_z) {
        if (typeof vec_or_z === 'number') this.z = vec_or_z
        else this.z = vec_or_z.z
        return this
    },
    invert: function() {
        this.x *= -1
        this.y *= -1
        this.z *= -1
        return this
    },
    invertX: function() {
        this.x *= -1
        return this
    },
    invertY: function() {
        this.y *= -1
        return this
    },
    invertZ: function() {
        this.z *= -1
        return this
    },
    norm: function() {
        const m = this.magSq()
        if (m > 0) this.div(Math.sqrt(m))
        return this
    },
    setMag: function(vec_or_scal) {
        if (vec_or_scal instanceof PVector) vec_or_scal = vec_or_scal.mag()
        if (this.magSq() === 0) return this.set(vec_or_scal, 0, 0)
        this.norm()
        this.mult(vec_or_scal)
        return this
    },
    minMag: function(vec_or_scal) {
        if (vec_or_scal instanceof PVector) vec_or_scal = vec_or_scal.mag()
        if (this.magSq() < vec_or_scal * vec_or_scal) {
            this.norm()
            this.mult(vec_or_scal)
        }
        return this
    },
    maxMag: function(vec_or_scal) {
        if (vec_or_scal instanceof PVector) vec_or_scal = vec_or_scal.mag()
        if (this.magSq() > vec_or_scal * vec_or_scal) {
            this.norm();
            this.mult(vec_or_scal)
        }
        return this
    },
    clampMag: function(min, max) {
        this.minMag(min)
        this.maxMag(max)
        return this
    },
    min: function(min) {
        this.minX(min)
        this.minY(min)
        this.minZ(min)
        return this
    },
    minX: function(min) {
        min = min.x || min
        if (this.x < min) this.x = min
        return this
    },
    minY: function(min) {
        min = min.y || min
        if (this.y < min) this.y = min
        return this
    },
    minZ: function(min) {
        min = min.z || min
        if (this.z < min) this.z = min
        return this
    },
    max: function(max) {
        this.maxX(max)
        this.maxY(max)
        this.maxZ(max)
        return this
    },
    maxX: function(max) {
        max = max.x || max
        if (this.x > max) this.x = max
        return this
    },
    maxY: function(max) {
        max = max.y || max
        if (this.y > max) this.y = max
        return this
    },
    maxZ: function(max) {
        max = max.z || max
        if (this.z > max) this.z = max
        return this
    },
    clamp: function(min, max) {
        this.clampX(min, max)
        this.clampY(min, max)
        this.clampZ(min, max)
        return this
    },
    clampX: function(min, max) {
        min = min.x || min
        max = max.x || max
        if (this.x < min) this.x = min
        else if (this.x > max) this.x = max;
        return this
    },
    clampY: function(min, max) {
        min = min.y || min
        max = max.y || max
        if (this.y < min) this.y = min
        else if (this.y > max) this.y = max;
        return this
    },
    clampZ: function(min, max) {
        min = min.z || min
        max = max.z || max
        if (this.z < min) this.z = min
        else if (this.z > max) this.z = max
        return this
    },
    rotateTo: function(angle) {
        const mag = this.mag()
        this.x = Math.cos(angle) * mag
        this.y = Math.sin(angle) * mag
        return this
    },
    rotateBy: function(angle) {
        angle += this.angle2D()
        return this.rotateTo(angle)
    },
    round: function() {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        this.z = Math.round(this.z)
        return this
    },
    floor: function() {
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
        this.z = Math.floor(this.z)
        return this
    },
    ceil: function() {
        this.x = Math.ceil(this.x)
        this.y = Math.ceil(this.y)
        this.z = Math.ceil(this.z)
        return this
    },
    toFixed: function(precision) {
        if (typeof precision === 'undefined') precision = 8
        this.x = parseFloat(this.x.toFixed(precision))
        this.y = parseFloat(this.y.toFixed(precision))
        this.z = parseFloat(this.z.toFixed(precision))
        return this
    },
    zero: function() {
        this.x = this.y = this.z = 0
        return this
    },

    // Vector operations
    add: function(vec_or_scal) {
        this.addX(vec_or_scal)
        this.addY(vec_or_scal)
        this.addZ(vec_or_scal)
        return this
    },
    addX: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.x += vec_or_scal
        else this.x += vec_or_scal.x
        return this
    },
    addY: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.y += vec_or_scal
        else this.y += vec_or_scal.y
        return this
    },
    addZ: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.z += vec_or_scal
        else this.z += vec_or_scal.z
        return this
    },
    sub: function(vec_or_scal) {
        this.subX(vec_or_scal);
        this.subY(vec_or_scal);
        this.subZ(vec_or_scal);
        return this
    },
    subX: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.x -= vec_or_scal
        else this.x -= vec_or_scal.x
        return this
    },
    subY: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.y -= vec_or_scal
        else this.y -= vec_or_scal.y
        return this
    },
    subZ: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.z -= vec_or_scal
        else this.z -= vec_or_scal.z
        return this
    },
    mult: function(vec_or_scal) {
        this.multX(vec_or_scal)
        this.multY(vec_or_scal)
        this.multZ(vec_or_scal)
        return this
    },
    multX: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.x *= vec_or_scal
        else this.x *= vec_or_scal.x
        return this
    },
    multY: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.y *= vec_or_scal
        else this.y *= vec_or_scal.y
        return this
    },
    multZ: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.z *= vec_or_scal
        else this.z *= vec_or_scal.z
        return this
    },
    div: function(vec_or_scal) {
        this.divX(vec_or_scal)
        this.divY(vec_or_scal)
        this.divZ(vec_or_scal)
        return this
    },
    divX: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.x /= vec_or_scal
        else this.x /= vec_or_scal.x
        return this
    },
    divY: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.y /= vec_or_scal
        else this.y /= vec_or_scal.y
        return this
    },
    divZ: function(vec_or_scal) {
        if (typeof vec_or_scal === 'number') this.z /= vec_or_scal
        else this.z /= vec_or_scal.z
        return this
    },
    lerp: function(vec_or_scal, amount) {
        this.lerpX(vec_or_scal, amount)
        this.lerpY(vec_or_scal, amount)
        this.lerpZ(vec_or_scal, amount)
        return this
    },
    lerpX: function(vec_or_scal, amount) {
        if (typeof vec_or_scal === 'number') this.x = PVector.lerpVal(this.x, vec_or_scal, amount)
        else this.x = PVector.lerpVal(this.x, vec_or_scal.x, amount)
        return this
    },
    lerpY: function(vec_or_scal, amount) {
        if (typeof vec_or_scal === 'number') this.y = PVector.lerpVal(this.y, vec_or_scal, amount)
        else this.y = PVector.lerpVal(this.y, vec_or_scal.y, amount)
        return this
    },
    lerpZ: function(vec_or_scal, amount) {
        if (typeof vec_or_scal === 'number') this.z = PVector.lerpVal(this.z, vec_or_scal, amount)
        else this.z = PVector.lerpVal(this.z, vec_or_scal.z, amount)
        return this
    },
    cross: function(vec) {
        this.x = this.y * vec.z - vec.y * this.z
        this.y = this.z * vec.x - vec.z * this.x
        this.z = this.x * vec.y - vec.x * this.y
        return this
    },
    projectOnto: function(vec) {
        const coeff = ((this.x * vec.x) + (this.y * vec.y) + (this.z * vec.z)) / ((vec.x ** 2) + (vec.y ** 2) + (vec.z ** 2))
        this.x = coeff * vec.x
        this.y = coeff * vec.y
        this.z = coeff * vec.z
        return this
    },
    func: function(f) {
        f(this)
        return this
    },

    // Utility methods
    mag: function() {
        if (arguments[0]) {
            return this.setMag(arguments[0])
        }
        return Math.sqrt(this.magSq())
    },
    magSq: function() {
        return this.x ** 2 + this.y ** 2 + this.z ** 2
    },
    dist: function(vec) {
        return Math.sqrt(this.distSq(vec))
    },
    distX: function(vec) {
        return vec.x - this.x
    },
    distY: function(vec) {
        return vec.y - this.y
    },
    distZ: function(vec) {
        return vec.z - this.z
    },
    distSq: function(vec) {
        return this.distX(vec) ** 2 + this.distY(vec) ** 2
    },
    manhattanDist: function(vec) {
        return this.distX(vec) + this.distY(vec) + this.distZ(vec)
    },
    angle2D: function() {
        if (arguments[0]) {
            return this.rotateTo(arguments[0])
        }
        return Math.atan2(this.y, this.x)
    },
    dot: function(vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z
    },
    
    // Comparison methods
    isZero: function() {
        return this.magSq() < 1e-8
    },
    isEqualTo: function(vec, tolerance = 0) {
        return Math.abs(this.x - vec.x) <= tolerance
            && Math.abs(this.y - vec.y) <= tolerance 
            && Math.abs(this.z - vec.z) <= tolerance
    },

    // Conversion methods
    toString: function() {
        return "{ x: " + this.x + ", y: " + this.y + ", z: " + this.z + " }"
    },
    toObject: function() {
        return { x: this.x, y: this.y, z: this.z }
    },
    toArray: function() {
        return [this.x, this.y, this.z]
    }
}

function createPVectorMethod(method) {
    return function(v1, ...args) {
        const v = v1.clone()
        v[method](...args)
        return v
    }
}

for (let method in PVector.prototype) {
    if (PVector.prototype.hasOwnProperty(method) && !PVector.hasOwnProperty(method)) {
        PVector[method] = createPVectorMethod(method)
    }
}

exports = module.exports = PVector
},{}]},{},[1])(1)
});
