import { ChallengingDomPage } from '@pages/challenging-dom-page';
import { MainPage } from '@pages/main-page';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  const mainPage = new MainPage(page);
  await mainPage.challengingDomLink.click();
});

test.describe('Challenging Dom Tests', () => {
  test('3 buttons with names changing randomly are visible', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    expect(challengingDomPage.firstButton).toBeVisible();
    expect(challengingDomPage.secondButton).toBeVisible();
    expect(challengingDomPage.thirdButton).toBeVisible();
  });

  test('The table contains specific data', async ({ page }) => {
    const challengingDomPage = new ChallengingDomPage(page);
    expect(await challengingDomPage.getCellFromTheTable(0,0).innerText()).toBe('Lorem');
    expect(await challengingDomPage.getCellFromTheTable(0,1).innerText()).toBe('Ipsum');
    expect(await challengingDomPage.getCellFromTheTable(0,2).innerText()).toBe('Dolor');
    expect(await challengingDomPage.getCellFromTheTable(0,3).innerText()).toBe('Sit');
    expect(await challengingDomPage.getCellFromTheTable(0,4).innerText()).toBe('Amet');
    expect(await challengingDomPage.getCellFromTheTable(0,5).innerText()).toBe('Diceret');
    expect(await challengingDomPage.getCellFromTheTable(0,6).innerText()).toBe('Action');

    expect(await challengingDomPage.getCellFromTheTable(1,0).innerText()).toBe('Iuvaret0');
    expect(await challengingDomPage.getCellFromTheTable(1,1).innerText()).toBe('Apeirian0');
    expect(await challengingDomPage.getCellFromTheTable(1,2).innerText()).toBe('Adipisci0');
    expect(await challengingDomPage.getCellFromTheTable(1,3).innerText()).toBe('Definiebas0');
    expect(await challengingDomPage.getCellFromTheTable(1,4).innerText()).toBe('Consequuntur0');
    expect(await challengingDomPage.getCellFromTheTable(1,5).innerText()).toBe('Phaedrum0');
    expect(await challengingDomPage.getCellFromTheTable(1,6).innerText()).toBe('edit delete');
  });

});
