// Importing express and faker
const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

// Function to create a new User
const createUser = () => {
    return {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
};

// Function to create a new Company
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(), 
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
};

app.get('/api/companies/new', (req, res) => {
    try {
        const company = createCompany();
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: "Failed to generate company data", details: error.message });
    }
});

app.get('/api/user/company', (req, res) => {
    try {
        res.json({
            user: createUser(),
            company: createCompany()
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate user and company data", details: error.message });
    }
});


// API route for creating a new User
app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});

// API route for creating a new Company
app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
});

// API route for creating both a new User and a new Company
app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
