import { createElement } from 'react'
import { render } from 'react-testing-library'
import Roman, { romanize } from '../src/main'

describe('Transforms from a number to an roman numeral', () => {
  test('Explicit function', () => {
    expect(romanize(512)).toBe('DXII')
    expect(romanize(10)).toBe('X')
    expect(romanize(1)).toBe('I')
  })

  test('Render React component', () => {
    const { getByText } = render(createElement(Roman, { children: 512 }))
    expect(getByText('DXII')).toBeTruthy()
  })
})
