# Rule Engine API

A simple API for managing rules, including creating, combining, evaluating, updating, and deleting rules.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pswitchy/Rule-Engine/rule-engine-api.git
   ```

2. Navigate into the project directory:
   ```bash
   cd rule-engine-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Usage

To use the API, start the server and send HTTP requests to the endpoints defined below. You can use tools like Postman or curl to interact with the API.

## Endpoints

### Create Rule

- **URL**: `/api/rules/create_rule`
- **Method**: POST
- **Body**:
  ```json
  {
    "rule_string": "your rule here"
  }
  ```
- **Response**:
  ```json
  {
    "rule_id": "generated rule ID"
  }
  ```

## Combine Rules

Combines multiple rules into a single rule.

**Endpoint:** POST /api/rules/combine_rules

### Request Body

```json
{
  "rules": [
    "age > 30 AND department = 'Sales'",
    "age < 25 AND department = 'Marketing'"
  ]
}
```

### Response

```json
{
  "combined_rule_tree": {
    ...
  }
}
```

## Evaluate Rule

Evaluates a rule against provided data.

**Endpoint:** POST /api/rules/evaluate_rule

### Request Body

```json
{
  "rule_tree": {
    ...
  },
  "data": {
    "age": 35,
    "department": "Sales",
    "salary": 60000,
    "experience": 3
  }
}
```

### Response

```json
{
  "result": true
}
```

### Update Rule

- **URL**: `/api/rules/update_rule/:id`
- **Method**: PUT
- **Body**:
  ```json
  {
    "rule_string": "updated rule here"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Rule updated successfully"
  }
  ```

### Delete Rule

- **URL**: `/api/rules/delete_rule/:id`
- **Method**: DELETE
- **Response**:
  ```json
  {
    "message": "Rule deleted successfully"
  }
  ```

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `axios`: Promise-based HTTP client for the browser and Node.js
- `body-parser`: Node.js body parsing middleware
- `cors`: Middleware to enable CORS (Cross-Origin Resource Sharing)
- `mongoose`: MongoDB object modeling tool

To install the dependencies, use:
```bash
npm install express axios body-parser cors mongoose
```
