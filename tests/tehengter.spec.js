/*
* File: tehengter.spec.js
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft I N
* Date: 2026-05-08
* Github: https://github.com/BenedekSzasz/
* Licenc: MIT
*/

import { test, expect } from '@playwright/test';

const url = 'https://szit.hu/m/tehengter/'

test('A címsor Henger', async ({ page }) => {
    await page.goto(url)
    await expect(page).toHaveTitle(/Henger/)
})

test('A h1 elemben Henger térfogata', async ({ page }) => {
    await page.goto(url)
    const text = page.locator('h1')
    await expect(text).toContainText('Henger térfogata')
})

test('A p elem tartalma', async ({ page }) => {
    await page.goto(url)
    const text = page.locator('p')
    await expect(text).toContainText('Henger térfogatának számítása az alap sugarából és a henger magasságából.')
})