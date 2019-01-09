import {
  createElement,
  Fragment,
  ReactNode,
  FunctionComponentElement
} from 'react'

export function romanize(value: number): string {
  let lookup: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let roman: string = ''
  let index: string
  for (index in lookup) {
    while (value >= lookup[index]) {
      roman += index
      value -= lookup[index]
    }
  }
  return roman
}

export const Roman = (props: {
  children: number
}): FunctionComponentElement<{ children?: ReactNode }> =>
  createElement(Fragment, null, romanize(props.children))

export default Roman
