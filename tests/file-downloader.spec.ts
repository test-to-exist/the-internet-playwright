import { test,  expect } from "@playwright/test";
import * as fs from 'fs'
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

test.describe('File Downloader Tests', () => {
  let filePath: string;

  test.afterEach(() => {
    fs.unlinkSync(filePath);
  })

  test('User should be able to download a file', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/download`);
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', {name: 'some-file.txt' , exact: true}).click(); 
    const download = await downloadPromise;
    const downloadDir = 'downloads';

    filePath = path.join(downloadDir, uuidv4() + '.txt');
    await page.waitForTimeout(10_000);
    await download.saveAs(filePath);
    await page.waitForTimeout(5_000);

    expect(fs.existsSync(filePath)).toBeTruthy();
  });
});