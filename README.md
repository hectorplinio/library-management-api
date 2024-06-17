# Library Management API

Library Management API is a backend application that manages the borrowing and returning of books in a library. Users can log in, check book availability, borrow and return books, view their borrowing history, and reserve books.

## Table of Contents

- [Marvel App](#marvel-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Architecture](#architecture)
  - [Folder Structure](#folder-structure)
  - [Development](#development)
    - [Style guide](#style-guide)
    - [Testing](#testing)
    - [Running tests](#running-tests)
  - [After finishing a task](#after-finishing-a-task)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hectorplinio/library-management-api.git
cd marvel-app
```

2. Install the dependencies:

```
npm install
```

Keep in mind that we use `npm` for managing Node packages. If you try installing the dependencies with `yarn`, it will generate a `yarn-lock` file that will likely cause problems with the existing `package-lock.json`.

## Running the Application

To run the application in development mode, use the following command:

```
npm run dev
```

This will start the application on http://localhost:3000.

To build the application for production, use the following command:

```
npm run build
```

And to start the production build:

```
npm start
```

## Architecture

The application is built with Node.js and Express. It follows Clean Architecture principles to ensure clean, maintainable, and scalable code.

### Key Components

- Node.js: JavaScript runtime for server-side programming.
- Express: Web framework for Node.js providing robust features for web and mobile applications.

## Folder Structure

```
library-management-api/
├── src/
│   ├── application/        # Use cases and ports
│   ├── domain/             # Domain models
│   ├── infra/              # Infrastructure implementations and controllers
│   └── index.ts            # Application entry point
├── tests/                  # Test cases
├── .env                    # Environment variables
├── .eslintrc.json          # ESLint configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Development

### Style guide

Before submitting a patch, please make sure that the code is formatted executing this command:

```
npm run format
```

### Testing

Testing is crucial for us and we strive for high coverage of our code.

We encourage you to write tests for every functionality you build and also update the existing ones if they need to.

#### Running tests

Before running the test, install the needed dependencies:

```
npm install
```

Execute all tests with:

```
npm run test
```

Then, in a separate terminal, run the Playwright tests.

## After finishing a task

Before pushing your changes, make sure you run the linter and prettier to ensure the code follows the rules, or the CI pipeline will throw an error and fail:

```
npm run lint:fix
npm run format
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
