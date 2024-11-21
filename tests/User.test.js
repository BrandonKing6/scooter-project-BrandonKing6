const ScooterApp = require('./ScooterApp');
const User = require('./User');
const Scooter = require('./Scooter');

function runTests() {
  try {
    console.log("\n=== Scooter App Testing ===");

    // Initialize the ScooterApp
    const app = new ScooterApp();

    // Test User Registration
    console.log("\n--- User Registration Test ---");
    const user1 = app.registerUser("john_doe", "password123", 25);
    const user2 = app.registerUser("jane_doe", "password456", 30);
    // app.registerUser("john_doe", "password123", 25); // Uncomment to see error: User already registered
    // app.registerUser("too_young", "password789", 16); // Uncomment to see error: Too young to register

    // Test User Login
    console.log("\n--- User Login Test ---");
    app.loginUser("john_doe", "password123");
    // app.loginUser("john_doe", "wrongpassword"); // Uncomment to see error: Incorrect password
    // app.loginUser("unknown_user", "password"); // Uncomment to see error: Username or password is incorrect

    // Test User Logout
    console.log("\n--- User Logout Test ---");
    app.logoutUser("john_doe");
    // app.logoutUser("unknown_user"); // Uncomment to see error: No such user is logged in

    // Test Scooter Creation
    console.log("\n--- Scooter Creation Test ---");
    const scooter1 = app.createScooter("Station A");
    const scooter2 = app.createScooter("Station B");
    // app.createScooter("Unknown Station"); // Uncomment to see error: No such station

    // Test Renting a Scooter
    console.log("\n--- Scooter Rental Test ---");
    app.rentScooter(scooter1, user1);
    // app.rentScooter(scooter1, user2); // Uncomment to see error: Scooter already rented

    // Test Returning a Scooter
    console.log("\n--- Scooter Docking Test ---");
    app.dockScooter(scooter1, "Station A");
    // app.dockScooter(scooter1, "Unknown Station"); // Uncomment to see error: No such station
    // app.dockScooter(scooter1, "Station A"); // Uncomment to see error: Scooter already at station

    // Test Scooter Recharge and Repair
    console.log("\n--- Scooter Maintenance Test ---");
    scooter1.charge = 10; // Simulating low charge
    scooter1.recharge();  // This will charge the scooter incrementally to 100%

    scooter1.isBroken = true; // Simulating a broken scooter
    scooter1.requestRepair(); // This will repair the scooter after 5 seconds

    // Print the app's state
    console.log("\n--- App State Test ---");
    app.print();

  } catch (error) {
    console.error(`Test failed: ${error.message}`);
  }
}

runTests();
