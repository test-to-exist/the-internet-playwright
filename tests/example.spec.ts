import { expect, test } from "@playwright/test";
import { MainPage } from "../page-objects/main-page";
import { ABTestPage } from "../page-objects/ab-test-page";
import { AddRemoveElementsPage } from "../page-objects/add-remove-elements-page";
import { InputsPage } from "../page-objects/inputs-page";


test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
});

// test.describe("AB Test", () => {
//   test("should be able to go to the AB test site", async ({ page }) => {
//     const mainPage = new MainPage(page);
//     await mainPage.abTest();
//     const aBTestPage = new ABTestPage(page);
//     await aBTestPage.pageContents();
//   });
// });

// test.describe("Add/Remove Elements Test", () => {

//   test("should be able to go to the \"Add/Remove Elements\" page", async ({ page }) => {
//     const mainPage = new MainPage(page);
//     await mainPage.addRemoveElements();
//     const addRemoveElementsPage = new AddRemoveElementsPage(page);
//     await expect(addRemoveElementsPage.addElementButton).toBeVisible();
//     await expect(addRemoveElementsPage.deleteElementButton).not.toBeVisible();
//   });

//   test("should be able to add and remove one element", async ({ page }) => {
//     const mainPage = new MainPage(page);
//     await mainPage.addRemoveElements();
//     const addRemoveElementsPage = new AddRemoveElementsPage(page);
//     await addRemoveElementsPage.addElement();
//     await expect(addRemoveElementsPage.deleteElementButton).toBeVisible();
//     await addRemoveElementsPage.deleteElement();
//     await expect(addRemoveElementsPage.deleteElementButton).not.toBeVisible();
//   });

//   test("should be able to add and remove two elements", async ({ page }) => {
//     const mainPage = new MainPage(page);
//     await mainPage.addRemoveElements();
//     const addRemoveElementsPage = new AddRemoveElementsPage(page);
//     await addRemoveElementsPage.addElement();
//     await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(1);
//     await addRemoveElementsPage.addElement();
//     await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(2);
//     await addRemoveElementsPage.deleteElement();
//     await expect(addRemoveElementsPage.deleteElementButton).toHaveCount(1);
//     await addRemoveElementsPage.deleteElement();
//     await expect(addRemoveElementsPage.deleteElementButton).not.toBeVisible();
//   });
// });

test.describe("Inputs Test", () => {

  test('Should be able to fill input with numbers', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.inputs();
    const inputsPage = new InputsPage(page);
    await inputsPage.fillInput('123');
  })

});
