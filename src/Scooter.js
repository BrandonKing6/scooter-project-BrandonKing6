class Scooter {
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = user;
    } else if (this.charge <= 20) {
      throw new Error("Scooter needs to charge.");
    } else if (this.isBroken) {
      throw new Error("Scooter needs repair.");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  recharge() {
    let intervalId = setInterval(() => {
      if (this.charge < 100) {
        this.charge += 10;
        console.log(`Charging... ${this.charge}%`);
      } else {
        clearInterval(intervalId);
        console.log("Scooter fully charged!");
      }
    }, 1000);
  }

  requestRepair() {
    console.log("Repair scheduled...");
    setTimeout(() => {
      this.isBroken = false;
      console.log("Repair completed!");
    }, 5000);
  }
}

module.exports = Scooter;
