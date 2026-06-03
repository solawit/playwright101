import { test, expect } from '@playwright/test';

  test('main navigation', async ({ page }) => {
   await page.goto('https://www.w3schools.com');
  });