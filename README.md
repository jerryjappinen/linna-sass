# linna-scss

`linna-scss` is a collection of useful, generic mixins and functions for developing web sites and apps. Designed to be compatible with `linna-vue`, but can be used independently.

## Quick start

Install `linna-scss`:

```sh
npm install linna-scss
```

In your SCSS code, import everything:

```scss
@import 'linna-scss';
```

Or customise with your own variables:

```scss
@import 'linna-scss/shared';
@import './my-variables'; // Override default variables here
@import 'linna-scss/global';
@import 'linna-scss/util';
```

Or pick only what you need:

```scss
// Shared
@import 'linna-scss/variables';
@import 'linna-scss/functions';
@import 'linna-scss/mixins';

@import './my-variables';

// Normalizations and defaults (these output CSS)
@import 'linna-scss/custom-properties';
@import 'linna-scss/normalize';
@import 'linna-scss/defaults';
@import 'linna-scss/util';
```

You might not need all defaults or utilities. You can leave them out to optimise file size:

```scss
@import './defaults/body';
@import './defaults/forms';
@import './defaults/tables';
@import './util/bodytext';
```

### Importing in a JavaScript file

```js
import 'linna-scss/variables'
import 'linna-scss/functions'
import 'linna-scss/mixins'

import './my-variables'

import 'linna-scss/normalize'
import 'linna-scss/defaults'
```
