"use strict";
class Bike {
    //expects mountainbike.prototype to be instance of Bike
    //default params = frame = mountain bike and tires = dirt and the shokes  are default at 20 for defaultSagSettings
    //default smaller (20") tires
    // your code here
    //

    class Frame {
  constructor(color='black', size=55, style='street') {
    this.color = color
    this.size = size
    this.style = style
  }
}

class Tire {
  constructor(diameter=22, type='street') {
    this.diameter = diameter
    this.type = type
    this._flat = false
  }

  isFlat() { return this._flat }
  puncture() { this._flat = true }
  repair() { this._flat = false }
}

class DirtTire extends Tire {
  constructor(diameter) {
    super(diameter, 'dirt')
  }
}

class RoadTire extends Tire {
  constructor(diameter) {
    super(diameter, 'road')
  }
}

class Bike {
  constructor(name, price) {
    const defaultRings = [3, 7]
    const defaultBrakes = { 
        front: true, 
        back: true 
    }

    this.name = name
    this.price = price
    this.frame = new Frame()
    this.tires = [new Tire(), new Tire()]
    this.rings = defaultRings
    this.brakes = defaultBrakes
    this.moving = false
  }

  gearSpeeds() { return this.rings[0] * this.rings[1] }

  pedal() {
    if (this.tires[0].isFlat() || this.tires[1].isFlat()) {
      throw Error("Can't pedal with a flat tire")
    }

    this.moving = true
  }

  brake() { this.moving = false }
  isMoving() { return this.moving }
}

class MountainBike extends Bike {
      //using the spread operation so that we can keep adding arguments.
}
  constructor(...args) {
    super(...args)

    this.frame.style = 'mountain'
    this.tires = [new DirtTire(), new DirtTire()]
    this._shocks = 20
  }

  get shocks() { return this._shocks }
  adjustShocks(newSetting) { this._shocks = newSetting }
}

class BMXBike extends Bike {
  constructor(...args) {
    super(...args)

    this.brakes = { front: false, back: true }
    this.tires = [new Tire(20), new Tire(20)]
  }
}

class RacingBike extends Bike {
  constructor(...args) {
    super(...args)

    this.frame.style = 'racing'
    this.tires = [new RoadTire(), new RoadTire()]
    this.rings = [3, 10]
  }
}

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike
}
