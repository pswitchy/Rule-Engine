# Rule Engine UI

## Description
Rule Engine UI is a React-based frontend application for managing rules in a rule engine system. It provides a user interface for creating, updating, and deleting rules.

## Features
- Create new rules
- Update existing rules
- Delete rules
- Responsive design using Tailwind CSS

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/pswitchy/Rule-Engine/rule-engine-ui.git
   ```

2. Navigate to the project directory:
   ```
   cd rule-engine-ui
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Dependencies
This project relies on the following key dependencies:

- React: ^18.2.0
- React DOM: ^18.2.0
- Axios: ^1.4.0
- Tailwind CSS: ^3.3.2
- class-variance-authority: ^0.6.0
- clsx: ^1.2.1
- lucide-react: ^0.244.0
- tailwind-merge: ^1.13.2
- tailwindcss-animate: ^1.0.6

For a full list of dependencies, please refer to the `package.json` file.

## Configuration
1. Ensure that your `tailwind.config.js` is properly set up. It should include the necessary configurations for the UI components.

2. Make sure your `src/index.css` file includes the required Tailwind CSS directives.

## Usage
To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production
To build the app for production:

```
npm run build
```

This will create a `build` folder with the production-ready files.

## Contributing
Contributions to the Rule Engine UI are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.
