# react-roman

[![Travis][build-badge]][build]

[![npm package][npm-badge]][npm]

[![License][license-badge]][license]

Display numbers in the form of roman numerals.

[build-badge]: https://img.shields.io/travis/lasseborly/react-roman/master.svg?style=flat-square
[build]: https://travis-ci.org/lasseborly/react-roman
[npm-badge]: https://img.shields.io/npm/v/react-roman.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-roman
[license-badge]: https://img.shields.io/npm/l/react-roman.svg?style=flat-square
[license]: https://www.npmjs.com/package/react-roman

## Install

```bash
yarn add react-roman
```

## Usage

```JSX
import React from 'react'
import Roman from 'react-roman'

export default () => <Roman>514</Roman>
```

You can also make usage of the internal `romanize` function if you so desire.

```JSX
import React, { Component } from 'react'
import { romanize } from 'react-roman'

export default class App extends Component {
  onChange = event => {
    console.log(romanize(event.target.value))
  }

  render = () => {
    <div>
      <h1>When was Juluis Caesar assasinated?</h1>
      <input type='number' onChange={this.onChange} />
    </div>
  }
}

```
