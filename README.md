# Workflow repo for the CA



## Tech Stack & Tools

- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **ESLint** – Linting tool for identifying and fixing JavaScript code issues.
- **Prettier** – Code formatter for consistent style across files.
- **Husky** – Git hooks for enforcing code quality before commits and pushes.
- **Vitest** – Unit testing framework for modern JavaScript projects.
- **Playwright** – End-to-end testing framework for web apps.


## Usage & Commands

### Tailwind CSS
- Tailwind is configured via `tailwind.config.js`.
- To build your CSS, simply run:
	```
	npm run dev
	```
- This will start Tailwind in watch mode and generate the CSS automatically.
- Include the generated CSS file in your HTML.

### ESLint
- To lint your code, run:
	```
	npx eslint .
	```
- ESLint will check your JavaScript files for issues and suggest fixes.

### Prettier
- To format your code, run:
	```
	npx prettier --write .
	```
- Prettier will automatically format your files for consistent style.

### Husky
- Husky is used for Git hooks (e.g., pre-commit).
- Hooks are configured in the `.husky` directory.
- Husky will automatically run checks (like linting or formatting) before commits.



### Vitest
- To run tests, use:
	```
	npm test
	```
- Add your test files following Vitest conventions (e.g., `*.test.js`).


### Playwright
- Playwright is used for end-to-end browser testing.
- To run Playwright tests, use:
	```
	npx playwright test
	```
- To open the Playwright test runner UI:
	```
	npx playwright test --ui
	```
- To run tests and show the actual browser windows (headed mode):
	```
	npx playwright test --headed
	```
- To run tests step by step for debugging:
	```
	npx playwright test --debug
	```
- Test files are usually located in the `tests` or `e2e` directory and follow the `.spec.js` or `.test.js` naming convention.
- **Environment variables for Playwright tests:**
	Add a `.env` file in your project root with:
	```
	TEST_USER_EMAIL=email
	TEST_USER_PASSWORD=password
	```
- See [Playwright documentation](https://playwright.dev/docs/intro) for more details.

