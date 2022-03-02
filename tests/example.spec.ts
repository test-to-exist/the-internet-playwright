import { test, expect, Page } from "@playwright/test";
import { MainPage } from "../page-objects/main-page";
import { ABTestPage } from "../page-objects/ab-test-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
});

test.describe("AB Test", () => {
  test("should allow me to go to the AB test site", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.abTest();
    const aBTestPage = new ABTestPage(page);
    await aBTestPage.pageContents();
  });
});

// async function createDefaultTodos(page: Page) {
//   for (const item of TODO_ITEMS) {
//     await page.locator('.new-todo').fill(item);
//     await page.locator('.new-todo').press('Enter');
//   }
// }

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction((e) => {
    return JSON.parse(localStorage["react-todos"]).length === e;
  }, expected);
}

async function checkNumberOfCompletedTodosInLocalStorage(
  page: Page,
  expected: number
) {
  return await page.waitForFunction((e) => {
    return (
      JSON.parse(localStorage["react-todos"]).filter((i) => i.completed)
        .length === e
    );
  }, expected);
}

async function checkTodosInLocalStorage(page: Page, title: string) {
  return await page.waitForFunction((t) => {
    return JSON.parse(localStorage["react-todos"])
      .map((i) => i.title)
      .includes(t);
  }, title);
}
