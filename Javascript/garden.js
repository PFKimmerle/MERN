// Plant class
// Represents a single plant in the garden with various properties and methods to simulate growth and care.
class Plant {
    constructor(type) {
        // Plant type (e.g., 'Rose', 'Tomato')
        this.type = type;
        // Health of the plant, impacts growth, starts at 100
        this.health = 100;
        // Hydration level of the plant, necessary for growth, starts at 50%
        this.hydration = 50;
        // Growth stage of the plant, increases over time and with proper care
        this.growthStage = 0;
    }

    // Water method increases the plant's hydration
    water() {
        this.hydration = Math.min(this.hydration + 30, 100); // Ensures hydration does not exceed 100%
    }

    // Grow method advances the growth stage of the plant based on its current health and hydration
    grow() {
        if (this.hydration > 20) {
            this.growthStage++;
            this.health = Math.max(this.health - 10, 0); // Health decreases as the plant grows, but not below 0
            this.hydration -= 20; // Growing consumes water
        } else {
            this.health -= 15; // Health declines faster without enough water
        }
    }

    // Status method to display the current status of the plant
    status() {
        console.log(`${this.type} - Health: ${this.health}, Hydration: ${this.hydration}, Growth Stage: ${this.growthStage}`);
    }
}

// Garden class
// Manages a collection of plants
class Garden {
    constructor() {
        this.plants = []; // Array to store multiple plants
    }

    // Add a new plant to the garden
    addPlant(plant) {
        this.plants.push(plant);
    }

    // Water all plants in the garden
    waterGarden() {
        this.plants.forEach(plant => plant.water());
    }

    // Check and display the status of all plants in the garden
    checkGarden() {
        this.plants.forEach(plant => plant.status());
    }
}

// Example usage
const myGarden = new Garden();
const rose = new Plant("Rose");
const tomato = new Plant("Tomato");

// Adding plants to the garden
myGarden.addPlant(rose);
myGarden.addPlant(tomato);

// Watering the garden
myGarden.waterGarden();
// Checking the garden's status
myGarden.checkGarden();

// Simulate time passing and plants growing
setInterval(() => {
    myGarden.plants.forEach(plant => plant.grow()); // Each plant grows
    myGarden.checkGarden(); // Update and display the status of each plant
}, 1000); // This interval sets the simulation to update every second
