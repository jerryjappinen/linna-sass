# linna-scss

`linna-scss` is a collection of useful, generic mixins and functions for developing web sites and apps. Designed to be compatible with `linna-vue`, but can be used independently.

## Quick start

Install `linna-scss`:

```sh
npm install linna-scss
```

In your SCSS code, import what you need:

```scss
// Import shared code: (these will NOT output any CSS)
@import '~linna-scss/variables';
@import '~linna-scss/functions';
@import '~linna-scss/mixins';

// Override default variables to match your style (see variables.scss)
@import './my-variables';

// Normalizations and defaults: (these output CSS)
@import '~linna-scss/normalize';
@import '~linna-scss/defaults';
@import '~linna-scss/util';

// Then import your own styles
@import './my-styles/my-own-code.scss';
@import './my-styles/utilities/some-util-class.scss';
```

If you prefer, you can pick only specific files from the codebase:

```scss
@import './variables';
@import './functions';
@import './mixins';

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
