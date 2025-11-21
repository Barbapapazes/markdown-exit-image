import { expect, it } from 'vitest'
import { resolveOptions } from '../src/options.js'

it('should have default options', () => {
  const options = resolveOptions()

  expect(options.publicFolder).toBe('public')
})

it('should override default options', () => {
  const options = resolveOptions({
    publicFolder: 'static',
  })

  expect(options.publicFolder).toBe('static')
})
