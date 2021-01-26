class Car {
    gearbox;
    wheels;
    seats;
    windows;
    sidemirrors;
    engine;
    clutch;
    brake;

    constructor(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake) {
        this.gearbox = gearbox;
        this.wheels = wheels;
        this.seats = seats;
        this.windows = windows;
        this.sidemirrors = sidemirrors;
        this.engine = engine;
        this.clutch = clutch;
        this.brake = brake;
    }
    startbrakes() {
        return this.brake + " " + "has been released";
    }

    startGearbox() {
        return this.gearbox + " " + "is set to gear 1";
    }

    startWindows() {
        return this.windows + " " + "windows are locked"; 
    }

    startSidemirrors() {
        return this.sidemirrors + " " + "sidemirros are restored";
    }

    startWheels() {
        return this.wheels + " " + "wheels are in motion";
    }

    startClutch() {
        return this.clutch + " " + "has been released";
    }

    startEngine() {
        return this.engine + " " + "has started";
    }

    startCar() {
        return toyota1.startEngine() + ", " + toyota1.startGearbox() + ", " + toyota1.startClutch() + ", " + toyota1.startbrakes() 
        + ", " + toyota1.startWheels() + ", " + toyota1.startSidemirrors() + " and " + toyota1.startWindows();
    }

}

class Toyota extends Car {
    constructor(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake) {
        super(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake);
    }
}

class Porsche extends Car {
    constructor(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake) {
        super(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake);
    }
}
class Volkswagen extends Car {
    constructor(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake) {
        super(gearbox, wheels, seats, windows, sidemirrors, engine, clutch, brake);
    }
}

const toyota1 = new Car("manual gearbox", 4, 4, 6, 2, "Gasoline engine", "friction clutch", "disk brakes"); 
const porsche = new Car("automatic gearbox", 4, 2, 4, 2, "Porsche Hybrid and Electric Engine", "multi plate clutch",
"drum brakes");
const volkswagen = new Car("automatic gearbox", 4, 4, 6, 2, "Volkswagen Diesel engine", "centrifugal clutch",
"disc brakes");
toyota1.startCar();
porsche.startCar();
volkswagen.startCar();