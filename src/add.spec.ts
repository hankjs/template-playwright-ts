import { test, expect } from '@playwright/test'
import { add } from '@/add.ts'

test.describe('hi playwright', () => {
  test('add function', () => {
    expect(add(1, 1)).toBe(2)
  })
})
