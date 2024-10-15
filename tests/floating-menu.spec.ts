import { expect, test } from '@playwright/test';

test('After scrolling down the floating menu is still visible', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/floating_menu`);
  const homeLink = page.getByRole('link', { name: 'Home' });
  const newsLink = page.getByRole('link', { name: 'News' });
  const contactLink = page.getByRole('link', { name: 'Contact' });
  const aboutLink = page.getByRole('link', { name: 'About' });

  await expect(homeLink).toBeVisible();
  await expect(newsLink).toBeVisible();
  await expect(contactLink).toBeVisible();
  await expect(aboutLink).toBeVisible();

  const scrollHeight = await page.evaluate(() => {
    return window.document.body.scrollHeight;
  });

  await page.mouse.wheel(0, scrollHeight);

  await expect(homeLink).toBeVisible();
  await expect(newsLink).toBeVisible();
  await expect(contactLink).toBeVisible();
  await expect(aboutLink).toBeVisible();
});
