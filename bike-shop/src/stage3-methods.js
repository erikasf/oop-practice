function Bike(name, price) {
    const defaultRings = [3, 7]
    const defaultBrakes = { front: true, back: true }
    const defaultTires = false;

    this.name = name
    this.price = price
    this.frame = new Frame()
    this.tires = [new Tire(), new Tire()]
    this.rings = defaultRings
    this.brakes = defaultBrakes

}

Bike.prototype.gearSpeeds = function() {
    return this.rings[0] * this.rings[1]
}

Bike.prototype.pedal = function() {
    if (this.tires[0].isFlat()=== true || this.tires[1].isFlat()===true) {
        throw Error("Can't pedal with a flat tire")
    }

    this.moving = true
}

Bike.prototype.brake = function() {
    this._moving = false
}

Bike.prototype.isMoving = function() {
    return this.moving
}

function Frame(color='black', size=55, style='street') {
    this.color = color
    this.size = size
    this.style = style
}

function Tire(diameter=22, type='street') {
    this.diameter = diameter
    this.type = type
    this.flat = false
}

Tire.prototype.isFlat = function() {
    return this.flat
}

Tire.prototype.puncture = function() {
    this.flat = true
}

Tire.prototype.repair = function() {
    this.flat = false
}

module.exports = {
    Bike: Bike,
    Frame: Frame,
    Tire: Tire

}
// class Bike {
//     constructor(tire, frame, rings, brakes) {
//
//         this.name = name,
//             this.tire = new Tire(),
//             this.frame = new Frame(),
//             this.rings = [3, 7],
//             this.brakes = {
//                 front: true,
//                 back: true
//             };
//         constructor__isMoving = function (pedal = true, error, brake, gearSpeeds) {
//             this.pedal = pedal,
//                 this.error = error,
//                 this.brake = brake,
//                 this.gearSpeeds();
//         };
//
//
//         //isMoving (instance of)
//         //pedal (instance of)
//         //error on original
//         //brake is instance of
//         //gearSpeeds instance of
//
//         function Frame(color="black", size=55, style = "street") {
//             this.color = color,
//                 this.size = size,
//                 this.style = style
//
//
//         }
//
// // function isFlat() {
// // myTire['default'] = (!isFlat);
// // };
// //isFlat is instace of
// //puncture is instance of
// //repair is instance of
// //tires are not flat by default
// //describe('Bike', ()+.=>)
// //default not moving
//
// function
//                 this.isFlat = function () {
//                     this['default'] = false
//                 };
//
//                 this.repair = function () {
//                     this.isFlat = false
//                 };
//                 this.puncture = function () {
//                     this.isFlat = true
//                 };
//             }
//
//         }
//
//
//     }
// module.exports = {
//   Bike: Bike,
//   /* Frame: Frame,*/
//    Tire:Tire
// };
