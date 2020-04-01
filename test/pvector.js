const expect = require('chai').expect
const PVector = require('../index')

const EPSILON = 0.0001

describe('Static methods', () => {
    describe('Instanciation methods', () => {
        describe('#PVector.Constructor', () => {
            let x, y, z
            let v, v1a, v1b, v2a, v2b, v3a, v3b

            before(() => {
                x = 100
                y = 200
                z = 300

                v = PVector()

                v1a = new PVector(x, y)
                v1b = new PVector(x, y, z)

                // Use Constructor without the `new` keyword
                v2a = PVector(x, y)
                v2b = PVector(x, y, z)

                // Create a new vector from an object
                v3a = PVector({
                    x: x,
                    y: y
                })

                v3b = PVector({
                    x: x,
                    y: y,
                    z: z
                })
            })

            it('should return an instance of PVector', () => {
                expect(v).to.be.an.instanceof(PVector)
                expect(v1a).to.be.an.instanceof(PVector)
                expect(v1b).to.be.an.instanceof(PVector)
                expect(v2a).to.be.an.instanceof(PVector)
                expect(v2b).to.be.an.instanceof(PVector)
                expect(v3a).to.be.an.instanceof(PVector)
                expect(v3b).to.be.an.instanceof(PVector)
            })

            it('should have axis properties', () => {
                expect(v).to.have.property('x', 0)
                expect(v).to.have.property('y', 0)
                expect(v).to.have.property('z', 0)

                expect(v1a).to.have.property('x', x)
                expect(v1a).to.have.property('y', y)
                expect(v1a).to.have.property('z', 0)

                expect(v1b).to.have.property('x', x)
                expect(v1b).to.have.property('y', y)
                expect(v1b).to.have.property('z', z)

                expect(v2a).to.have.property('x', x)
                expect(v2a).to.have.property('y', y)
                expect(v2a).to.have.property('z', 0)

                expect(v2b).to.have.property('x', x)
                expect(v2b).to.have.property('y', y)
                expect(v2b).to.have.property('z', z)

                expect(v3a).to.have.property( 'x', x )
                expect(v3a).to.have.property( 'y', y )
                expect(v3a).to.have.property( 'z', 0 )

                expect(v3b).to.have.property( 'x', x )
                expect(v3b).to.have.property( 'y', y )
                expect(v3b).to.have.property( 'z', z )
            })
        })

        describe('#PVector.fromAngle', () => {
            let angle, v

            before(() => {
                angle = Math.random() * 2 * Math.PI
                v = PVector.fromAngle(angle)
            })

            it('should return an instance of PVector', () => {
                expect(v).to.be.an.instanceof(PVector)
            })

            it('should have x and y axis from angle', () => {
                expect(Math.abs(v.x - Math.cos(angle))).to.lte(EPSILON)
                expect(Math.abs(v.y - Math.sin(angle))).to.lte(EPSILON)
                expect(v).to.have.property('z', 0)
            })
        })

        describe('#PVector.random2D', () => {
            let v

            before(() => {
                v = PVector.random2D()
            })

            it('should return an instance of PVector', () => {
                expect(v).to.be.an.instanceof(PVector)
            })

            it('should have random x and y axis', () => {
                expect(v).to.have.property('x').to.lt(1)
                expect(v).to.have.property('y').to.lt(1)
                expect(v).to.have.property('z').to.equal(0)
            })

            it('should have a magnitude of ~1', () => {
                expect(Math.abs(1 - Math.sqrt(v.x * v.x + v.y * v.y))).to.lte(EPSILON)
            })
        })

        describe('#PVector.random3D', () => {
            let v

            before(() => {
                v = PVector.random3D()
            })

            it('should return an instance of PVector', () => {
                expect(v).to.be.an.instanceof(PVector)
            })

            it('should have random x, y and z axis', () => {
                expect(v).to.have.property('x').to.lt(1)
                expect(v).to.have.property('y').to.lt(1)
                expect(v).to.have.property('z').to.lt(1)
            })

            it('should have a magnitude of ~1', () => {
                expect(Math.abs(1 - Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z))).to.lte(EPSILON)
            })
        })

        describe('#PVector.random', () => {
            let v, v2, v3
            let a, b

            before(() => {
                a = PVector(2, -5, 5)
                b = PVector(7, 4, -5)
                v = PVector.random()
                v2 = PVector.random(a)
                v3 = PVector.random(a, b)
            })

            it('should return an instance of PVector', () => {
                expect(v).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should have random x, y and z axis', () => {
                expect(v).to.have.property('x').to.gte(0)
                expect(v).to.have.property('x').to.lt(1)
                expect(v).to.have.property('y').to.gte(0)
                expect(v).to.have.property('y').to.lt(1)
                expect(v).to.have.property('z').to.gte(0)
                expect(v).to.have.property('z').to.lt(1)

                expect(v2).to.have.property('x').to.gte(0)
                expect(v2).to.have.property('x').to.lt(a.x)
                expect(v2).to.have.property('y').to.lte(0)
                expect(v2).to.have.property('y').to.gt(a.y)
                expect(v2).to.have.property('z').to.gte(0)
                expect(v2).to.have.property('z').to.lte(a.z)

                expect(v3).to.have.property('x').to.gte(a.x)
                expect(v3).to.have.property('x').to.lt(b.x)
                expect(v3).to.have.property('y').to.gte(a.y)
                expect(v3).to.have.property('y').to.lt(b.y)
                expect(v3).to.have.property('z').to.lte(a.z)
                expect(v3).to.have.property('z').to.gt(b.z)
            })
        })
    })

    describe('Utility methods', () => {
        describe('#PVector.angleBetween', () => {
            let v1, v2, angle

            before(() => {
                v1 = PVector(0, 50)
                v2 = PVector(50, 0)
                angle = PVector.angleBetween(v1, v2)
            })

            it('should return a Number', () => {
                expect(typeof angle).to.eql('number')
            })

            it('should be the angle between 0 and 2 * Pi', () => {
                expect(angle).to.gte(0)
                expect(angle).to.lte(Math.PI * 2)
                expect(Math.abs(Math.PI / 2 - angle)).to.lte(EPSILON)
            })
        })

        describe('#PVector.radians2degrees', () => {
            let ret

            before(() => {
                ret = PVector.radians2degrees(Math.PI / 2)
            })

            it('should return a Number', () => {
                expect(typeof ret).to.eql('number')
            })

            it('should return the angle in degrees', () => {
                expect(ret).to.eql(90)
            })
        })

        describe('#PVector.degrees2radians', () => {
            let ret

            before(() => {
                ret = PVector.degrees2radians(90)
            })

            it('should return a Number', () => {
                expect(typeof ret).to.eql('number')
            })

            it('should return the angle in radians', () => {
                expect(ret).to.eql(Math.PI / 2)
            })
        })

        describe('#PVector.lerpVal', () => {
            let ret

            before(() => {
                ret = PVector.lerpVal(10, 20, 0.75)
            })

            it('should return a Number', () => {
                expect(typeof ret).to.eql('number')
            })

            it('should return the lerped value', () => {
                expect(ret).to.eql(17.5)
            })
        })
    })
})

describe('Prototype methods', () => {
    describe('Manipulation methods', () => {
        describe('#clone()', () => {
            let v1, v2

            before(function () {
                v1 = PVector(42, 21)
                v2 = v1.clone()
            })

            it('should return a clone of a vector', function () {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v2).to.not.equal(v1)
            })

            it('should have the same values as the original', function () {
                expect(v1.x).to.equal(v2.x)
                expect(v1.y).to.equal(v2.y)
            })
        })

        describe('#set()', () => {
            let v1, v3, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector().set(x, y, z)
                v3 = PVector().set({ x: x, y: y, z: z })
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should have axis values set according to parameters', () => {
                expect(v1).to.have.property('x', x)
                expect(v1).to.have.property('y', y)
                expect(v1).to.have.property('z', z)

                expect(v3).to.have.property('x', x)
                expect(v3).to.have.property('y', y)
                expect(v3).to.have.property('z', z)
            })
        })

        describe('#setX()', () => {
            let v1, v3, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector().setX(x)
                v3 = PVector().setX({ x: x, y: y, z: z })
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should have X axis values set according to parameters', () => {
                expect(v1).to.have.property('x', x)
                expect(v1).to.have.property('y', 0)
                expect(v1).to.have.property('z', 0)

                expect(v3).to.have.property('x', x)
                expect(v3).to.have.property('y', 0)
                expect(v3).to.have.property('z', 0)
            })
        })

        describe('#setY()', () => {
            let v1, v3, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector().setY(y)
                v3 = PVector().setY({ x: x, y: y, z: z })
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should have Y axis values set according to parameters', () => {
                expect(v1).to.have.property('x', 0)
                expect(v1).to.have.property('y', y)
                expect(v1).to.have.property('z', 0)

                expect(v3).to.have.property('x', 0)
                expect(v3).to.have.property('y', y)
                expect(v3).to.have.property('z', 0)
            })
        })

        describe('#setZ()', () => {
            let v1, v3, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector().setZ(z)
                v3 = PVector().setZ({ x: x, y: y, z: z })
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should have Z axis values set according to parameters', () => {
                expect(v1).to.have.property('x', 0)
                expect(v1).to.have.property('y', 0)
                expect(v1).to.have.property('z', z)

                expect(v3).to.have.property('x', 0)
                expect(v3).to.have.property('y', 0)
                expect(v3).to.have.property('z', z)
            })
        })

        describe('#invert()', () => {
            let v1, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector(x, y, z).invert()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should have axis values inverted', () => {
                expect(v1).to.have.property('x', -x)
                expect(v1).to.have.property('y', -y)
                expect(v1).to.have.property('z', -z)
            })
        })

        describe('#invertX()', () => {
            let v1, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector(x, y, z).invertX()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should have X axis value inverted', () => {
                expect(v1).to.have.property('x', -x)
                expect(v1).to.have.property('y', y)
                expect(v1).to.have.property('z', z)
            })
        })

        describe('#invertY()', () => {
            let v1, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector(x, y, z).invertY()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should have Y axis value inverted', () => {
                expect(v1).to.have.property('x', x)
                expect(v1).to.have.property('y', -y)
                expect(v1).to.have.property('z', z)
            })
        })

        describe('#invertZ()', () => {
            let v1, x, y, z

            before(() => {
                x = 100
                y = 200
                z = 300

                v1 = PVector(x, y, z).invertZ()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should have Z axis value inverted', () => {
                expect(v1).to.have.property('x', x)
                expect(v1).to.have.property('y', y)
                expect(v1).to.have.property('z', -z)
            })
        })

        describe('#norm()', () => {
            let v1

            before(() => {
                v1 = PVector(100, 200, 300).norm()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should have a magnitude of ~1', () => {
                expect(Math.abs(v1.x - 0.2672612419124244)).to.lte(EPSILON)
                expect(Math.abs(v1.y - 0.5345224838248488)).to.lte(EPSILON)
                expect(Math.abs(v1.z - 0.8017837257372732)).to.lte(EPSILON)
                expect(Math.abs(v1.mag() - 1)).to.lte(EPSILON)
            })
        })

        describe('#setMag()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).setMag(10)
                v2 = PVector(4, 5, 3).setMag(PVector(11, 0, 0))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the vector\'s magnitude to the passed value or magnitude of the passed vector', () => {
                expect(Math.abs(10 - v1.mag())).to.lte(EPSILON)
                expect(Math.abs(11 - v2.mag())).to.lte(EPSILON)
            })
        })

        describe('#minMag()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(4, 5, 3).minMag(10)
                v2 = PVector(11, 0, 0).minMag(10)
                v3 = PVector(4, 5, 3).minMag(PVector(0, 0, 15))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should modify the vector if its magnitude is less than the passed value or magnitude of the passed vector', () => {
                expect(Math.abs(10 - v1.mag())).to.lte(EPSILON)
                expect(Math.abs(11 - v2.mag())).to.lte(EPSILON)
                expect(Math.abs(15 - v3.mag())).to.lte(EPSILON)
            })
        })

        describe('#maxMag()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(4, 5, 3).maxMag(5)
                v2 = PVector(11, 0, 0).maxMag(15)
                v3 = PVector(4, 5, 3).maxMag(PVector(0, 0, 5))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should modify the vector if its magnitude is greater than the passed value', () => {
                expect(Math.abs(5 - v1.mag())).to.lte(EPSILON)
                expect(Math.abs(11 - v2.mag())).to.lte(EPSILON)
                expect(Math.abs(5 - v3.mag())).to.lte(EPSILON)
            })
        })

        describe('#clampMag()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(4, 5, 3).clampMag(10, 15)
                v2 = PVector(11, 0, 0).clampMag(8, 10)
                v3 = PVector(54, 5, 3).clampMag(PVector(0, 0, 15), PVector(0, 35, 0))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should constrain the vector\'s magnitude between the passed values or magnitudes of the passed vectors', () => {
                expect(Math.abs(10 - v1.mag())).to.lte(EPSILON)
                expect(Math.abs(10 - v2.mag())).to.lte(EPSILON)
                expect(Math.abs(35 - v3.mag())).to.lte(EPSILON)
            })
        })

        describe('#min()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).min(4)
                v2 = PVector(4, 5, 3).min(PVector(2, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the minimum value for each axis', () => {
                    expect(v1.toArray()).to.eql([ 4, 5, 4 ])
                    expect(v2.toArray()).to.eql([ 4, 6, 4 ])
            })
        })

        describe('#minX()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).minX(3)
                v2 = PVector(4, 5, 3).minX(PVector(5, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the minimum value for the X axis', () => {
                    expect(v1.x).to.eql(4)
                    expect(v2.x).to.eql(5)
            })
        })

        describe('#minY()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).minY(3)
                v2 = PVector(4, 5, 3).minY(PVector(5, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the minimum value for the Y axis', () => {
                    expect(v1.y).to.eql(5)
                    expect(v2.y).to.eql(6)
            })
        })

        describe('#minZ()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).minZ(3)
                v2 = PVector(4, 5, 3).minZ(PVector(5, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the minimum value for the Z axis', () => {
                expect(v1.z).to.eql(3)
                expect(v2.z).to.eql(4)
            })
        })

        describe('#max()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).max(4)
                v2 = PVector(4, 5, 3).max(PVector(2, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the maximum value for each axis', () => {
                expect(v1.toArray()).to.eql([ 4, 4, 3 ])
                expect(v2.toArray()).to.eql([ 2, 5, 3 ])
            })
        })

        describe('#maxX()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).maxX(3)
                v2 = PVector(4, 5, 3).maxX(PVector(5, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the maximum value for the X axis', () => {
                    expect(v1.x).to.eql(3)
                    expect(v2.x).to.eql(4)
            })
        })

        describe('#maxY()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).maxY(3)
                v2 = PVector(4, 5, 3).maxY(PVector(5, 6, 4))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the maximum value for the Y axis', () => {
                    expect(v1.y).to.eql(3)
                    expect(v2.y).to.eql(5)
            })
        })

        describe('#maxZ()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 5, 3).maxZ(3)
                v2 = PVector(4, 5, 3).maxZ(PVector(5, 6, 2))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should set the maximum value for the Z axis', () => {
                    expect(v1.z).to.eql(3)
                    expect(v2.z).to.eql(2)
            })
        })

        describe('#clamp()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 8, 3).clamp(4, 6)
                v2 = PVector(4, 8, 3).clamp(PVector(2, 6, 4), PVector(3, 7, 5))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should constrain the value of each axis', () => {
                    expect(v1.toArray()).to.eql([ 4, 6, 4 ])
                    expect(v2.toArray()).to.eql([ 3, 7, 4 ])
            })
        })

        describe('#clampX()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 8, 3).clampX(4, 6)
                v2 = PVector(4, 8, 3).clampX(PVector(2, 6, 4), PVector(3, 7, 5))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should constrain the value of X axis', () => {
                    expect(v1.toArray()).to.eql([ 4, 8, 3 ])
                    expect(v2.toArray()).to.eql([ 3, 8, 3 ])
            })
        })

        describe('#clampY()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 8, 3).clampY(4, 6)
                v2 = PVector(4, 8, 3).clampY(PVector(2, 6, 4), PVector(3, 7, 5))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should constrain the value of Y axis', () => {
                    expect(v1.toArray()).to.eql([ 4, 6, 3 ])
                    expect(v2.toArray()).to.eql([ 4, 7, 3 ])
            })
        })

        describe('#clampZ()', () => {
            let v1, v2

            before(() => {
                v1 = PVector(4, 8, 3).clampZ(4, 6)
                v2 = PVector(4, 8, 3).clampZ(PVector(2, 6, 4), PVector(3, 7, 5))
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
                expect(v2).to.be.an.instanceof(PVector)
            })

            it('should constrain the value of Z axis', () => {
                    expect(v1.toArray()).to.eql([ 4, 8, 4 ])
                    expect(v2.toArray()).to.eql([ 4, 8, 4 ])
            })
        })

        describe('#rotateTo()', () => {
            let v1, mag

            before(() => {
                v1 = PVector(10, -10, 0)
                mag = v1.mag()
                v1.rotateTo(Math.PI / 4)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should rotate the vector to the angle passed while keeping its magnitude', () => {
                expect(v1.toFixed(5).toArray()).to.eql([ 10, 10, 0 ])
            })
        })

        describe('#rotateBy()', () => {
            let v1

            before(() => {
                v1 = PVector(10, 10, 0).rotateBy(Math.PI / 2)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should add the angle passed to the rotation of the vector while keeping its magnitude', () => {
                expect(v1.toFixed(5).toArray()).to.eql([ -10, 10, 0 ])
            })
        })

        describe('#round()', () => {
            let v1

            before(() => {
                v1 = PVector(4.213, 5.455, 3.687).round()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should round axis values', () => {
                expect(v1.toArray()).to.eql([ 4, 5, 4 ])
            })
        })

        describe('#floor()', () => {
            let v1

            before(() => {
                v1 = PVector(4.213, 5.455, 3.687).floor()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should floor axis values', () => {
                expect(v1.toArray()).to.eql([ 4, 5, 3 ])
            })
        })

        describe('#ceil()', () => {
            let v1

            before(() => {
                v1 = PVector(4.213, 5.455, 3.687).ceil()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should ceil axis values', () => {
                expect(v1.toArray()).to.eql([ 5, 6, 4 ])
            })
        })

        describe('#toFixed()', () => {
            let v1

            before(() => {
                v1 = PVector(4.211233, 5.445645, 3.687527).toFixed(3)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should round axis values to a certain precision', () => {
                expect(v1.toArray()).to.eql([ 4.211, 5.446, 3.688 ])
            })
        })

        describe('#zero()', () => {
            let v1

            before(() => {
                v1 = PVector(4.211233, 5.445645, 3.687527).zero()
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should have axis values equal to 0', () => {
                expect(v1.toArray()).to.eql([ 0, 0, 0 ])
            })
        })

    })

    describe('Vector operations methods', () => {

        describe('#add()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().add(PVector(20, 30, 10))
                v3 = v2.clone().add(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should add another vector\'s axis or the given scalar to each vector\'s axis', () => {
                expect(v2.toString()).to.eql('{ x: 30, y: 40, z: 35 }')
                expect(v3.toString()).to.eql('{ x: 35, y: 45, z: 40 }')
            })
        })

        describe('#addX()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().addX(PVector(20, 30, 10))
                v3 = v2.clone().addX(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should add another vector\'s X axis or the given scalar to this vector\'s X axis', () => {
                expect(v2.toString()).to.eql('{ x: 30, y: 10, z: 25 }')
                expect(v3.toString()).to.eql('{ x: 35, y: 10, z: 25 }')
            })
        })

        describe('#addY()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().addY(PVector(20, 30, 10))
                v3 = v2.clone().addY(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', () => {
                expect(v2.toString()).to.eql('{ x: 10, y: 40, z: 25 }')
                expect(v3.toString()).to.eql('{ x: 10, y: 45, z: 25 }')
            })
        })

        describe('#addZ()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().addZ(PVector(20, 30, 10))
                v3 = v2.clone().addZ(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', () => {
                expect(v2.toString()).to.eql('{ x: 10, y: 10, z: 35 }')
                expect(v3.toString()).to.eql('{ x: 10, y: 10, z: 40 }')
            })
        })

        describe('#sub()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().sub(PVector(20, 30, 10))
                v3 = v2.clone().sub(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should substract another vector\'s axis or the given scalar from each vector\'s axis', () => {
                expect(v2.toString()).to.eql('{ x: -10, y: -20, z: 15 }')
                expect(v3.toString()).to.eql('{ x: -15, y: -25, z: 10 }')
            })
        })

        describe('#subX()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().subX(PVector(20, 30, 10))
                v3 = v2.clone().subX(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should substract another vector\'s X axis or the given scalar from this vector\'s X axis', () => {
                expect(v2.toString()).to.eql('{ x: -10, y: 10, z: 25 }')
                expect(v3.toString()).to.eql('{ x: -15, y: 10, z: 25 }')
            })
        })

        describe('#subY()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().subY(PVector(20, 30, 10))
                v3 = v2.clone().subY(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', () => {
                expect(v2.toString()).to.eql('{ x: 10, y: -20, z: 25 }')
                expect(v3.toString()).to.eql('{ x: 10, y: -25, z: 25 }')
            })
        })

        describe('#subZ()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 10, 25)
                v2 = v1.clone().subZ(PVector(20, 30, 10))
                v3 = v2.clone().subZ(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should add another vector\'s Y axis or the given scalar to this vector\'s Y axis', () => {
                expect(v2.toString()).to.eql('{ x: 10, y: 10, z: 15 }')
                expect(v3.toString()).to.eql('{ x: 10, y: 10, z: 10 }')
            })
        })

        describe('#mult()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(1, 2, 5)
                v2 = v1.clone().mult(PVector(2, 3, 2))
                v3 = v2.clone().mult(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should multiply another vector\'s axis or the given scalar with each vector\'s axis', () => {
                expect(v2.toString()).to.eql('{ x: 2, y: 6, z: 10 }')
                expect(v3.toString()).to.eql('{ x: 10, y: 30, z: 50 }')
            })
        })

        describe('#multX()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(1, 2, 5)
                v2 = v1.clone().multX(PVector(2, 3, 2))
                v3 = v2.clone().multX(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should substract another vector\'s X axis or the given scalar from this vector\'s X axis', () => {
                expect(v2.toString()).to.eql('{ x: 2, y: 2, z: 5 }')
                expect(v3.toString()).to.eql('{ x: 10, y: 2, z: 5 }')
            })
        })

        describe('#multY()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(1, 2, 5)
                v2 = v1.clone().multY(PVector(2, 3, 2))
                v3 = v2.clone().multY(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should substract another vector\'s Y axis or the given scalar from this vector\'s Y axis', () => {
                expect(v2.toString()).to.eql('{ x: 1, y: 6, z: 5 }')
                expect(v3.toString()).to.eql('{ x: 1, y: 30, z: 5 }')
            })
        })

        describe('#multZ()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(1, 2, 5)
                v2 = v1.clone().multZ(PVector(2, 3, 2))
                v3 = v2.clone().multZ(5)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should substract another vector\'s Y axis or the given scalar from this vector\'s Y axis', () => {
                expect(v2.toString()).to.eql('{ x: 1, y: 2, z: 10 }')
                expect(v3.toString()).to.eql('{ x: 1, y: 2, z: 50 }')
            })
        })

        describe('#div()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(20, 30, 10)
                v2 = v1.clone().div(PVector(10, 10, 5))
                v3 = v2.clone().div(2)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should divide this vector\'s axis by another\'s ones or by the given scalar', () => {
                expect(v2.toString()).to.eql('{ x: 2, y: 3, z: 2 }')
                expect(v3.toString()).to.eql('{ x: 1, y: 1.5, z: 1 }')
            })
        })

        describe('#divX()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(20, 30, 10)
                v2 = v1.clone().divX(PVector(10, 10, 5))
                v3 = v2.clone().divX(2)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should divide this vector\'s X axis by another one\'s or by the given scalar', () => {
                expect(v2.toString()).to.eql('{ x: 2, y: 30, z: 10 }')
                expect(v3.toString()).to.eql('{ x: 1, y: 30, z: 10 }')
            })
        })

        describe('#divY()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(20, 30, 10)
                v2 = v1.clone().divY(PVector(10, 10, 5))
                v3 = v2.clone().divY(2)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should divide this vector\'s Y axis by another one\'s or by the given scalar', () => {
                expect(v2.toString()).to.eql('{ x: 20, y: 3, z: 10 }')
                expect(v3.toString()).to.eql('{ x: 20, y: 1.5, z: 10 }')
            })
        })

        describe('#divZ()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(20, 30, 10)
                v2 = v1.clone().divZ(PVector(10, 10, 5))
                v3 = v2.clone().divZ(2)
            })

            it('should return an instance of PVector', () => {
                expect(v2).to.be.an.instanceof(PVector)
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should divide this vector\'s Z axis by another one\'s or by the given scalar', () => {
                expect(v2.toString()).to.eql('{ x: 20, y: 30, z: 2 }')
                expect(v3.toString()).to.eql('{ x: 20, y: 30, z: 1 }')
            })
        })

        describe('#lerp()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 15, 20)
                v2 = v1.clone().lerp(PVector(20, 20, 10), 0.5)
                v3 = v1.clone().lerp(30, 0.5)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should perform a linear interpolation towards another vector\'s axis', () => {
                expect(v2.toArray()).to.eql([ 15, 17.5, 15 ])
                expect(v3.toArray()).to.eql([ 20, 22.5, 25 ])
            })
        })

        describe('#lerpX()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 15, 20)
                v2 = v1.clone().lerpX(PVector(20, 20, 10), 0.5)
                v3 = v1.clone().lerpX(30, 0.5)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should perform a linear interpolation towards another vector\'s X axis', () => {
                expect(v2.toArray()).to.eql([ 15, 15, 20 ])
                expect(v3.toArray()).to.eql([ 20, 15, 20 ])
            })
        })
        
        describe('#lerpY()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 15, 20)
                v2 = v1.clone().lerpY(PVector(20, 20, 10), 0.5)
                v3 = v1.clone().lerpY(30, 0.5)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should perform a linear interpolation towards another vector\'s Y axis', () => {
                expect(v2.toArray()).to.eql([ 10, 17.5, 20 ])
                expect(v3.toArray()).to.eql([ 10, 22.5, 20 ])
            })
        })
        
        describe('#lerpZ()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 15, 20)
                v2 = v1.clone().lerpZ(PVector(20, 20, 10), 0.5)
                v3 = v1.clone().lerpZ(30, 0.5)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should perform a linear interpolation towards another vector\'s Z axis', () => {
                expect(v2.toArray()).to.eql([ 10, 15, 15 ])
                expect(v3.toArray()).to.eql([ 10, 15, 25 ])
            })
        })

        describe('#cross()', () => {
            let v1, v2, v3

            before(() => {
                v1 = PVector(10, 20, 2)
                v2 = PVector(60, 80, 6)
                v3 = v1.clone().cross(v2)
            })

            it('should return an instance of PVector', () => {
                expect(v3).to.be.an.instanceof(PVector)
            })

            it('should return a vector composed of the cross product between two vectors.', () => {
                expect(v3.toArray()).to.eql([ -40, 360, -24800 ])
            })
        })

        describe('#projectOnto()', () => {
            let v1, v2, var3, selfRet, perpRet, paraRet, middleRet

            before(function () {
                v1 = new PVector(100, 0)
                v2 = new PVector(100, 100)
                v3 = new PVector(0,100)
                v4 = new PVector(200,0)
                selfRet = v1.projectOnto(v1)
                perpRet = v1.clone().projectOnto(v3)
                paraRet = v1.clone().projectOnto(v4)
                middleRet = v1.clone().projectOnto(v2)
            })

            it('should return an instance of PVector', function () {
                expect(selfRet).to.equal(v1)
            })

            it('should project same vector onto itself without change', () => {
                expect(selfRet).to.have.property('x',100)
                expect(selfRet).to.have.property('y',0)
            })

            it('should project orthogonal vectors into a zero-length vector', function () {
                expect(perpRet).to.have.property('x',0)
                expect(perpRet).to.have.property('y',0)
            })

            it('should project parallel vectors into a vector of same direction and magnitude', function () {
                expect(paraRet).to.have.property('x', 100)
                expect(paraRet).to.have.property('y', 0)
            })

            it('should project non-orthogonal non-parallel vectors correctly', function () {
                expect(middleRet).to.have.property('x', 50)
                expect(middleRet).to.have.property('y', 50)
            })
        })

        describe('#func()', () => {
            let v1

            before(() => {
                function double(v){
                    v.x *= 2
                    v.y *= 2
                    v.z *= 2
                }

                v1 = PVector(4, 5, 3).func(double)
            })

            it('should return an instance of PVector', () => {
                expect(v1).to.be.an.instanceof(PVector)
            })

            it('should apply a function taking a vector as argument to this vector', () => {
                expect(v1.toArray()).to.eql([ 8, 10, 6 ])
            })
        })

    })

    describe('Utility methods', () => {

        describe('#mag()', () => {
            let v1, mag, mag2, mag3

            before(() => {
                v1 = PVector(4, 3, 0)
                mag = v1.mag()
                mag2 = v1.mag(10).mag()
                mag3 = v1.mag(PVector(0,0,20)).mag()
            })

            it('should return a Number', () => {
                expect(typeof mag).to.eql('number')
                expect(typeof mag2).to.eql('number')
                expect(typeof mag3).to.eql('number')
            })

            it('should set the magnitude if a value or a vector is passed', () => {
                expect(mag).to.eql(5)
                expect(mag2).to.eql(10)
                expect(mag3).to.eql(20)
            })
        })

        describe('#magSq()', () => {
            let v1, magSq

            before(() => {
                v1 = PVector(10, 10, 25)
                magSq = v1.magSq()
            })

            it('should return a Number', () => {
                expect(typeof magSq).to.eql('number')
            })

            it('should return the squared magnitude of the vector', () => {
                expect(magSq).to.eql(825)
            })
        })

        describe('#dist()', () => {
            let v1,  v2, dist

            before(() => {
                v1 = new PVector(100, 50)
                v2 = new PVector(200, 60)
                dist = v1.dist(v2)
            })

            it('should return a Number', () => {
                expect(typeof dist).to.eql('number')
            })

            it('should return the euclidean distance between this vector and another', () => {
                expect(parseFloat(dist.toFixed(1))).to.eql(100.5)
            })
        })

        describe('#distX()', () => {
            let v1,  v2, dist

            before(() => {
                v1 = new PVector(100, 50, 30)
                v2 = new PVector(200, 60, 10)
                dist = v1.distX(v2)
            })

            it('should return a Number', () => {
                expect(typeof dist).to.eql('number')
            })

            it('should return the distance on X axis between this vector and another', () => {
                expect(dist).to.eql(100)
            })
        })

        describe('#distY()', () => {
            let v1,  v2, dist

            before(() => {
                v1 = new PVector(100, 50, 30)
                v2 = new PVector(200, 60, 10)
                dist = v1.distY(v2)
            })

            it('should return a Number', () => {
                expect(typeof dist).to.eql('number')
            })

            it('should return the distance on Y axis between this vector and another', () => {
                expect(dist).to.eql(10)
            })
        })

        describe('#distZ()', () => {
            let v1,  v2, dist

            before(() => {
                v1 = new PVector(100, 50, 30)
                v2 = new PVector(200, 60, 10)
                dist = v1.distZ(v2)
            })

            it('should return a Number', () => {
                expect(typeof dist).to.eql('number')
            })

            it('should return the distance on Z axis between this vector and another', () => {
                expect(dist).to.eql(-20)
            })
        })

        describe('#distSq()', () => {
            let v1,  v2, dist

            before(() => {
                v1 = new PVector(100, 50, 30)
                v2 = new PVector(200, 60, 20)
                dist = v1.distSq(v2)
            })

            it('should return a Number', () => {
                expect(typeof dist).to.eql('number')
            })

            it('should return the squared distance between this vector and another', () => {
                expect(dist).to.eql(10200)
            })
        })

        describe('#manhattanDist()', () => {
            let v1,  v2, dist

            before(() => {
                v1 = new PVector(100, 50)
                v2 = new PVector(200, 60)
                dist = v1.manhattanDist(v2)
            })

            it('should return a Number', () => {
                expect(typeof dist).to.eql('number')
            })

            it('should return the euclidean distance between this vector and another', () => {
                expect(parseFloat(dist.toFixed(1))).to.eql(110)
            })
        })

        describe('#angle2D()', () => {
            let v1, angle

            before(() => {
                v1 = PVector(5, 5)
                angle = v1.angle2D()
            })

            it('should return a Number', () => {
                expect(typeof angle).to.eql('number')
            })

            it('should return the angle 2D of the vector', () => {
                expect(Math.abs(Math.PI / 4 - angle)).to.lte(EPSILON)
            })
        })

        describe('#dot()', () => {
            let v1, v2, dot

            before(() => {
                v1 = new PVector(100, 50)
                v2 = new PVector(200, 60)
                dot = v1.dot(v2)
            })

            it('should return a Number', () => {
                expect(typeof dot).to.eql('number')
            })

            it('should return the dot product of this vector and another', () => {
                expect(dot).to.eql(23000)
            })
        })

    })
    
    describe('Comparison methods', () => {
        describe('#isZero()', function () {
            let v, v2

            before(function () {
                v = PVector(0.00001, 0.00001, 0.00001)
                v2 = PVector(0.0001, 0.0001, 0.0001)
            })

            it('should return true if the vector is zero', function () {
                expect(v.isZero()).to.equal(true)
                expect(v2.isZero()).to.equal(false)
            })
        })

        describe('#isEqualTo()', function () {
            let v1, v2, vec3

            before(function () {
                v1 = PVector(100, 100)
                v2 = PVector(100, 120)
                vec3 = PVector(100, 120)
            })

            it('should return false if the vectors are not the same', function () {
                expect(v1.isEqualTo(v2)).to.equal(false)
            })
            it('should return true if the vectors are the same', function () {
                expect(v2.isEqualTo(vec3)).to.equal(true)
            })
        })

    })

    describe('Conversion methods', () => { 
        describe('#toString()', () => {
            let v, ret

            before(() => {
                v = PVector(100, 200)
                ret = v.toString()
            })

            it('should return a string representation of the vector', function () {
                expect(ret).to.be.a('string')
                expect(ret).to.have.string('{ x: 100, y: 200, z: 0 }')
            })
        })

        describe('#toObject()', function () {
            let v, ret

            before(() => {
                v = PVector(100, 200)
                ret = v.toObject()
            })

            it('should return an object representation of the vector', () => {
                expect(ret).to.be.instanceof(Object)
                expect(ret).to.eql({ x: 100, y: 200, z: 0 })
            })
        })

        describe('#toArray()', function () {
            let v, ret

            before(() => {
                v = PVector(100, 200)
                ret = v.toArray()
            })

            it('should return an array representation of the vector', () => {
                expect(ret).to.be.instanceof(Array)
                expect(ret).to.eql([ 100, 200, 0 ])
            })
        })
    })
})