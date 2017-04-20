// Uses Jest for testing

const stage3 = require('../src/stage3-methods.js')
const Bike   = stage3.Bike
const Tire   = stage3.Tire

describe('Tire', () => {
    test('has an #isFlat() method', () => {
    const myTire = new Tire()
    expect(typeof myTire.isFlat).toBe('function')
})

test('are not flat by default', () => {
    const myTire = new Tire()
    expect(myTire.isFlat()).toBe(false)
})

test('can be punctured with the #puncture() method', () => {
    const myTire = new Tire()
    expect(typeof myTire.puncture).toBe('function')
})

test('when punctured they become flat', () => {
    const myTire = new Tire()

    expect(myTire.isFlat()).toBe(false)
myTire.puncture()
expect(myTire.isFlat()).toBe(true)
})

test('can be repaired with the #repair() method', () => {
    const myTire = new Tire()
    expect(typeof myTire.repair).toBe('function')
})

test('when repaired they are no longer flat', () => {
    const myTire = new Tire()

    myTire.puncture()
expect(myTire.isFlat()).toBe(true)
myTire.repair()
expect(myTire.isFlat()).toBe(false)
})
})

describe('Bike', () => {
    test('has an #isMoving() method', () => {
    const myBike = new Bike()
    expect(typeof myBike.isMoving).toBe('function')
})

test('are not moving by default', () => {
    const myBike = new Bike()
    expect(myBike.isMoving()).toBe(false)
})

test('has a #pedal() method', () => {
    const myBike = new Bike()
    expect(typeof myBike.pedal).toBe('function')
})

test('when pedaling makes the bike move', () => {
    const myBike = new Bike()

    expect(myBike.isMoving()).toBe(false)
myBike.pedal()
expect(myBike.isMoving()).toBe(true)
})

test('when pedaling will throw an error if there is a flat tire', () => {
    const myBike = new Bike()

    myBike.tires[0].puncture()
expect(() => { myBike.pedal() }).toThrowError("Can't pedal with a flat tire")
})

test('has a #brake() method', () => {
    const myBike = new Bike()
    expect(typeof myBike.brake).toBe('function')
})

test('when braking stops the bike', () => {
    const myBike = new Bike()

    myBike.pedal()
expect(myBike.isMoving()).toBe(true)
myBike.brake()
expect(myBike.isMoving()).toBe(false)
})

test('has a #gearSpeeds() method', () => {
    const myBike = new Bike()
    expect(typeof myBike.gearSpeeds).toBe('function')
})

test('can tell the number of speeds with #gearSpeeds() (assuming the default rings of 3 in front and 7 in back)', () => {
    const myBike = new Bike()
    expect(myBike.gearSpeeds()).toBe(21)
myBike.rings = [2,5]
expect(myBike.gearSpeeds()).toBe(10)
})
})