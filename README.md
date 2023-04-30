# Todo Code Challenge

## Introduction

This project implements a todo display system.

All of the todos are displayed, and each todo could be displayed with relevant details at a dedicated page.

The todos data source is the `jsonplaceholder.typicode.com` website.

This project is deployed via GitHub pages, and available at this address: `https://davidbucodes.github.io/todo-challenge/`.

## Code Frameworks

### App rendering and compiling

- `React`: This project utilizes the React framework to render the UI
- `Redux Toolkit`: The state management is implemented using the Redux Toolkit framework. API calls are implemented and cached using RTK Queries.
- `Vite`: Compile and bundles the code.
- `styled-components`: Framework to style JSX components in JS.
- `react-router-dom`: Used to implement the routes navigation system of the app.

### App and API mocking

- `Storybook`: Used to preview the code pages and components, and enables simulations of various inputs to the rendered elements.
- `msw`: Mocked server for testing and previewing purposes.

### Testing frameworks

- `Jest`: Testing framework that manages the tests lifecycle. Tests code coverage is available at the `./coverage/lcov-report/index.html` file after running the tests.
- `@testing-library`: Testing utilities to test rendered UI components and pages.
- `Cypress`: Used for E2E testing of expected usage scenarios of the app.

### Code standard frameworks

- `Eslint`: Framework used to various apply code standards.
- `Prettier`: Framework used to apply readability related code standards.

## NPM scripts

- Launching the app: `npm run start`
- Building the app: `npm run build`
- Serving the app build artifact: `npm run serve`
- Launching the Storybook app: `npm run storybook`
- Building the Storybook app: `npm run build-storybook`
- Running the tests: `npm run test`
- Running the tests in watch mode: `npm run test:watch`
- Launching the Cypress app: `npm run cypress:open`
- Modifying the code with the Prettier framework: `npm run prettier`
- Modifying the code with the Eslint framework: `npm run lint:fix`

## CI/CD

This project is deployed via GitHub pages using GitHub actions.

The deployment workflow tests the code, creates the website bundle and artifact and deploys the artifact to GitHub pages.
