import { test,  expect } from "@playwright/test";
import * as fs from 'fs'
import * as appRootPath from 'app-root-path';
import * as path from 'path';
import { v4 } from 'uuid';

let filePath: string;


test.afterEach(() => {
  fs.unlinkSync(filePath);
})

test('User should be able to download a file', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/download`);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', {name: 'some-file.txt' , exact: true}).click(); 
  const download = await downloadPromise;
  const downloadDir = path.join(appRootPath.path, 'downloads');

  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }
  filePath = path.join(downloadDir, v4() + '.txt');
  await download.saveAs(filePath);
  
  await page.waitForTimeout(5000);
  expect(fs.existsSync(filePath)).toBeTruthy();
});