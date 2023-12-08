

const Car = {
    door: true,
    tyres: true,
    speedometer: true,
    mirror: true,
    brake: true,
}


const EVCar = {
    engine: 'electric'
}


// inherting Car properties with the help of __proto__
EVCar.__proto__ = Car
console.log(EVCar.brake)
console.log(EVCar.door)
console.log(EVCar.speedometer)