# Target Case Study
App scaffolded by [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents) user guide can be found at the link.

## Table of contents

- [Performance HowTo's](#table-of-contents)
- [Requirements](#requirements)
- [Install](#install)
- [Scripts](#scripts)
- [Supported es6 features](#supported-es6-features)
- [Planned Improvements](#planned-improvements)

## Performance HowTos

- [Render considerations](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f)
- DO not define variables or defaults within the render function itself.
  - `this.props.options || []`
- Bind all class functions in the constructor to this instance or use arrow functions which are automatically context bound
- Avoid using redux & connecting state/props for every component. Push those to container elements, along with business logic. See [ducks modular redux proposal](https://github.com/erikras/ducks-modular-redux) for more details.
- Use internal state instead and only for tracking component/user state not business logic. Give implementing container elements change handler functions with data so that business logic can be handled in the correct places. This will make components truly composable and reusable across applications

## Requirements

- node >= v6
- React >= v16
- Reactstrap

## Install

in command line from root

```bash
npm install
```

Or

```bash
yarn install
```

## Scripts

 npm or yarn

 __Start__ : builds css with node-sass-chokidar and starts webpack development server available at [localhost:3000](http://localhost:3000)

 ```shell
 yarn start
 ```

__Build__ : will run dev or production builds based on `NODE_ENVIRONMENT` variable

```shell
yarn run build
```

__Test__ : runs unit tests through [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) and [Enzyme](https://github.com/airbnb/enzyme) for headless testing. Creates jest [snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html#content) for automated functional testing.

```shell
yarn run test
```

### Supported es6 features

- [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
   ```js
   import Thing from 'thing';
   import * as Thing from './thing';
   import Default, {OtherModule} from 'thing';
   export function Thing () {};
   export class Thing extends OtherThing {}
   export default class Thing {}
   ```
- Object [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

```js

var o = {p: 42, q: true};
var {p, q} = o;
// with defaulting
var {a = 10, b = 5} = {a: 3};
// function example
function drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {}
// rest
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
console.log(rest) //output = { c: 30, d: 40 }
// spread
myFunction(...iterableObj); // function
let objClone = { ...obj }; // object literals

```

- [Arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) functions.
  - `this` is correctly bound for you in

```js

(param1, param2, â€¦, paramN) => { statements }
(param1, param2, â€¦, paramN) => expression
// equivalent to: (param1, param2, â€¦, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters should be written with a pair of parentheses.
() => { statements }

```

## Planned Improvements

- Further separate out markup into components and functions 
- Stub out more user interactions and probably network calls.
- Implement Storybook to develop components in isolation, to create a living style guide with code snippets, test results, and better jest automated functional testing
- Scrap the library for carousel and rewrite one that better suits the vertical thumbnails from the included PSD's. The react-slick library allowed for a quick implementation
but suffers some issues styling and positioning the thumbnails.