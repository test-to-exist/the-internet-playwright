import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
});

test.describe("AB Test", () => {
  test("should allow me to go to the AB test site", async ({ page }) => {
    await page.locator("a[href='/abtest']").click();
    await expect(page.locator("p")).toHaveText(
      "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through)."
    );
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
