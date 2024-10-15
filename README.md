# Automate tests for the internet heroku app using playwright

The goal of this project is to cover the:

https://the-internet.herokuapp.com

site with automated e2e tests using playwright.

# Running Tests

To run the test you would need to first to install packages and install playwright:

```
pnpm install
npx playwright install-deps
npx playwright install
```

Then copy the example.env to the .env file

```
cp example.env .env
```

Then to run tests, run the command:

```
npx playwright test
```
