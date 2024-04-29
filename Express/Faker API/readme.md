
# Faker API Project

## Overview
The Faker API Project is an Express.js application designed to generate fake data for users and companies. It serves as a valuable tool for developers who need mock data to test and develop applications, ensuring that real user data is not required for development purposes.

## Detailed Descriptions
### Component 1: User Data Generation
**Functionality**: Generates fake data for user profiles, which includes names, emails, phone numbers, and passwords.
**Parameters**: 
- None required; data is generated randomly.

### Component 2: Company Data Generation
**Functionality**: Creates fake data for companies, including company names and addresses.
**Parameters**: 
- None required; data is generated randomly.

### Component 3: Combined User and Company Data Generation
**Functionality**: Simultaneously generates data for both a user and a company, returned in a single JSON response.
**Parameters**: 
- None required; data is generated randomly.

## Usage Instructions
Follow these steps to set up and use the Faker API:
1. Clone the repository from GitHub to your local machine: https://github.com/PFKimmerle/MERN
2. Navigate to the project directory in your command line interface.
3. Install the required dependencies: npm install
4. Start the server: node server.js
5. Access the API endpoints via a browser or API testing tool like Postman at:
   - http://localhost:3000/api/users/new for new user data.
   - http://localhost:3000/api/companies/new for new company data.
   - http://localhost:3000/api/user/company for combined user and company data.

## Resources
- [Express.js Documentation](https://expressjs.com/)
- [Faker.js on GitHub](https://github.com/marak/Faker.js/)
- [Postman API Testing](https://www.postman.com/)

## License Information
This project is released under the MIT License. Details can be found in the LICENSE file within the repository.
