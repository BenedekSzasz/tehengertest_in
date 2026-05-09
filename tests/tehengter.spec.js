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

test('input 30, 35 output:98960.16858807848', async ({ page }) => {
    await page.goto(url)
    await page.locator('#radius').fill('30')
    await page.locator('#height').fill('35')
    await page.locator('#calcButton').click()
    const volume = page.locator('#volume')
    await expect(volume).toHaveValue('98960.16858807848')
})

test('input 52, 54 output:458722.7929065672', async ({ page }) => {
    await page.goto(url)
    await page.locator('#radius').fill('52')
    await page.locator('#height').fill('54')
    await page.locator('#calcButton').click()
    const volume = page.locator('#volume')
    await expect(volume).toHaveValue('458722.7929065672')
})

test('input 128, 114 output:5867791.360151329', async ({ page }) => {
    await page.goto(url)
    await page.locator('#radius').fill('128')
    await page.locator('#height').fill('114')
    await page.locator('#calcButton').click()
    const volume = page.locator('#volume')
    await expect(volume).toHaveValue('5867791.360151329')
})

test('input 0, 35 output:0', async ({ page }) => {
    await page.goto(url)
    await page.locator('#radius').fill('0')
    await page.locator('#height').fill('35')
    await page.locator('#calcButton').click()
    const volume = page.locator('#volume')
    await expect(volume).toHaveValue('0')
})

test('input 30, 0 output:0', async ({ page }) => {
    await page.goto(url)
    await page.locator('#radius').fill('30')
    await page.locator('#height').fill('0')
    await page.locator('#calcButton').click()
    const volume = page.locator('#volume')
    await expect(volume).toHaveValue('0')
})
