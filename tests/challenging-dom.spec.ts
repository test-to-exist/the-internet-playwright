import { ChallengingDomPage } from '@pages/challenging-dom-page';
import { MainPage } from '@pages/main-page';
import { expect, test as base } from '@playwright/test';

const test = base.extend<{ challengingDomPage: ChallengingDomPage }>({
  challengingDomPage: async ({ page }, use) => {
    await page.goto(process.env.BASE_URL);
    const mainPage = new MainPage(page);
    const challenginDomPage = await mainPage.challengingDom();
    use(challenginDomPage);
  },
});

test.describe('Challenging Dom Tests', () => {
  test('3 buttons with names changing randomly are visible', async ({ challengingDomPage }) => {
    expect(challengingDomPage.firstButton).toBeVisible();
    expect(challengingDomPage.secondButton).toBeVisible();
    expect(challengingDomPage.thirdButton).toBeVisible();
  });

  test('The table contains specific data', async ({ challengingDomPage }) => {
    
    await expect(challengingDomPage.getColumnHeader('Lorem')).toBeVisible();
    await expect(challengingDomPage.getColumnHeader('Ipsum')).toBeVisible();
    await expect(challengingDomPage.getColumnHeader('Dolor')).toBeVisible();
    await expect(challengingDomPage.getColumnHeader('Sit')).toBeVisible();
    await expect(challengingDomPage.getColumnHeader('Amet')).toBeVisible();
    await expect(challengingDomPage.getColumnHeader('Diceret')).toBeVisible();
    await expect(challengingDomPage.getColumnHeader('Action')).toBeVisible();
    
    await expect(challengingDomPage.getCell('Iuvaret0')).toBeVisible();
    await expect(challengingDomPage.getCell('Apeirian0')).toBeVisible();
    await expect(challengingDomPage.getCell('Adipisci0')).toBeVisible();
    await expect(challengingDomPage.getCell('Definiebas0')).toBeVisible();
    await expect(challengingDomPage.getCell('Consequuntur0')).toBeVisible();
    await expect(challengingDomPage.getCell('Phaedrum0')).toBeVisible();
    await expect(challengingDomPage.getCell('edit delete')).toBeVisible();
  });
});
