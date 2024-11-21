const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  constructor() {
    this.stations = {
      "Station A": [],
      "Station B": [],
      "Station C": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User already registered.");
    } else if (age < 18) {
      throw new Error("Too young to register.");
    } else {
      const newUser = new User(username, password, age);
      this.registeredUsers[username] = newUser;
      console.log(`${username} has been registered.`);
      return newUser;
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (user) {
      user.login(password);
    } else {
      throw new Error("Username or password is incorrect.");
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (user) {
      user.logout();
    } else {
      throw new Error("No such user is logged in.");
    }
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station.");
    } else {
      const newScooter = new Scooter(station);
      this.stations[station].push(newScooter);
      console.log("Created new scooter.");
      return newScooter;
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station.");
    } else if (scooter.station === station) {
      throw new Error("Scooter already at station.");
    } else {
      scooter.dock(station);
      this.stations[station].push(scooter);
      console.log("Scooter is docked.");
    }
  }

  rentScooter(scooter, user) {
    for (const station in this.stations) {
      const index = this.stations[station].indexOf(scooter);
      if (index !== -1) {
        this.stations[station].splice(index, 1);
        scooter.rent(user);
        console.log("Scooter is rented.");
        return;
      }
    }
    throw new Error("Scooter already rented.");
  }

  print() {
    console.log("Registered Users:");
    console.log(this.registeredUsers);

    console.log("Stations:");
    for (const [station, scooters] of Object.entries(this.stations)) {
      console.log(`${station}: ${scooters.length} scooters`);
    }
  }
}

module.exports = ScooterApp;
