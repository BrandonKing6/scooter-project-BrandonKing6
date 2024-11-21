const ScooterApp = require('./ScooterApp');
const User = require('./User');
const Scooter = require('./Scooter');

function runTests() {
  try {
    console.log("\n=== Scooter App Testing ===");


    const app = new ScooterApp();

    console.log("\n--- User Registration Test ---");
    const user1 = app.registerUser("john_doe", "password123", 25);
    const user2 = app.registerUser("jane_doe", "password456", 30);

    console.log("\n--- User Login Test ---");
    app.loginUser("john_doe", "password123");

    console.log("\n--- User Logout Test ---");
    app.logoutUser("john_doe");

    console.log("\n--- Scooter Creation Test ---");
    const scooter1 = app.createScooter("Station A");
    const scooter2 = app.createScooter("Station B");


    console.log("\n--- Scooter Rental Test ---");
    app.rentScooter(scooter1, user1);



    console.log("\n--- Scooter Docking Test ---");
    app.dockScooter(scooter1, "Station A");

    console.log("\n--- Scooter Maintenance Test ---");
    scooter1.charge = 10;
    scooter1.recharge();

    scooter1.isBroken = true;
    scooter1.requestRepair();
   
    console.log("\n--- App State Test ---");
    app.print();

  } catch (error) {
    console.error(`Test failed: ${error.message}`);
  }
}

runTests();
