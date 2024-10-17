# Rule Engine Project

Welcome to the Rule Engine Project! This project determines user eligibility based on attributes such as age, department, income, spend, etc. The system uses an Abstract Syntax Tree (AST) to represent conditional rules and allows for dynamic creation, combination, and modification of these rules.

## Table of Contents

- [Objective](#objective)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Data Structure](#data-structure)
- [Database](#database)
- [Testing](#testing)
- [Frontend Structure](#frontend-structure)
- [Backend Structure](#backend-structure)
- [Contributing](#contributing)
- [License](#license)

## Objective

Develop a simple 3-tier rule engine application (Simple UI, API and Backend, Data) to determine user eligibility based on attributes like age, department, income, spend, etc. The system uses an Abstract Syntax Tree (AST) to represent conditional rules and allows for dynamic creation, combination, and modification of these rules.

## Installation

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)
- MongoDB (running instance or cloud service)

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rule-engine-project.git
   cd rule-engine-project/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory and add your MongoDB connection string.
   ```
   MONGO_URI=mongodb://localhost:27017/rule-engine
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

The backend should now be running on http://localhost:5000.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend should now be running on http://localhost:3000.

## Usage

Once both the backend and frontend servers are running, you can open your browser and navigate to http://localhost:3000. You should see the interface for creating and managing rules.

## API Endpoints

### Create Rule

- Endpoint: `POST /api/rules/create_rule`
- Description: Creates a new rule.
- Request Body:
  ```json
  {
    "rule_string": "your_rule_here"
  }
  ```
- Response:
  ```json
  {
    "rule_id": "generated_rule_id"
  }
  ```

### Combine Rules

- Endpoint: `POST /api/rules/combine_rules`
- Description: Combines multiple rules into a single AST.
- Request Body:
  ```json
  {
    "rules": ["rule1", "rule2"]
  }
  ```
- Response:
  ```json
  {
    "combined_rule_ast": {}
  }
  ```

### Evaluate Rule

- Endpoint: `POST /api/rules/evaluate_rule`
- Description: Evaluates a rule against provided user data.
- Request Body:
  ```json
  {
    "data": {
      "age": 35,
      "department": "Sales",
      "salary": 60000,
      "experience": 3
    }
  }
  ```
- Response:
  ```json
  {
    "result": true
  }
  ```

## Data Structure

The AST is represented using a Node data structure:

- `type`: String indicating the node type ("operator" for AND/OR, "operand" for conditions)
- `left`: Reference to another Node (left child)
- `right`: Reference to another Node (right child for operators)
- `value`: Optional value for operand nodes (e.g., number for comparisons)

## Database

### Choice of Database

MongoDB is used to store rules and application metadata.

### Schema

Rule Schema:

```javascript
const ruleSchema = new mongoose.Schema({
  rule_string: {
    type: String,
    required: true
  },
  ast: {
    type: Object,
    required: true
  }
});
```

### Sample Rules

```json
{
  "rule1": "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)",
  "rule2": "((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)"
}
```

## Testing

### Postman

You can use Postman to test the API endpoints. Import the provided Postman collection (located in the `postman/` directory) and use it to send requests to the backend.

### Jest

For unit testing the backend, this project uses Jest. To run the tests, use the following command:

```bash
npm test
```

## Frontend Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Contains React components.
    - `CreateRule.js`: Component for creating a new rule.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.

## Backend Structure

- `server.js`: Main server file.
- `routes/`: Contains route definitions.
  - `rules.js`: Route for handling rule-related API endpoints.
- `models/`: Contains database models.
  - `Rule.js`: Mongoose model for rules.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
