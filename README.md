# Constantine

[![Build Status](https://travis-ci.org/calebmchenry/constantine.svg?branch=master)](https://travis-ci.org/calebmchenry/constantine)

Constantine is a package for copying constants from one language into a constants file for another language.

## Getting Started

`npm install -D constantine`

```javascript
import { copy } from 'constantine';

const srcFile = './server/src/main/java/constants/RestConstants.java';
const targetFile = './frontend/src/constants/restConstants.js';
copy(srcFile).to(targetFile);
```

Constantine will determine which parser and composer to use based on the file extension of the given paths.

### Transforming Variable Names

Different languages have different variable naming conventions. You can use the `transform` function and some default provided cases to transform variables from one case into a different case.

Provided Cases:

1. `camelCase`
2. `CAPS_CASE`
3. `PascalCase`
4. `snake_case`

```javascript
import {
    copy,
    camelCase,
    CAPS_CASE,
    transform
} from 'constantine';

const srcFile = './server/src/main/java/constants/RestConstants.java';
const targetFile = './frontend/src/constants/restConstants.js';
const transformer = transform(CAPS_CASE).to(camelCase);
copy(srcFile).with(transformer).to(targetFile);
```

You can even make your own custom transformer functions. Your custom transformer will receive an object where the keys are the variable names of the original file and values are those variable's values. Your function should also return and object with variable name to value mappings.

```javascript
import { copy } from 'constantine';

const srcFile = './server/src/main/java/constants/RestConstants.java';
const targetFile = './frontend/src/constants/restConstants.js';

// Example custom transformer
//
// variableMap is an object with the variable names as keys and their
// corresponding values as values. This function also returns an object
// where the keys will be the end result variable names and the values
// will be the values for those variables.
const reverseTransformer = (variableMap) => {
    const variableNames = Object.keys(variableMap);
    return variableNames.reduce((acc, name) => {
        const key = name.split('').reverse().join('');
        acc[key] = variableMap[name];
        return acc;
    }, {})
}
copy(srcFile).with(reverseTransformer).to(targetFile);
/**
 * public static final String FOO_BAR = "/foo/bar";
 *
 * will turn into
 *
 * export const RAB_OOF = "/foo/bar";
 */
```

## CLI

`npm install -g constantine`

`constantine -f ./path/to/file.java -t ./path/to/file.js`

**Note:** the cli does not support variable name transformers

## Language Support

✅ - Done

🛠️ - In Progress

❓ - Might Do

| Language   | From   | To       |
|------------|--------|----------|
| javascript | 🛠️     | 🛠️       |
| java       | 🛠️     | ❓       |
| go         | ❓     | ❓       |
| python     | ❓     | ❓       |

## Development Plans

* Allow custom parsers and composers
* Allow directory paths as arguments to `copy` function
* Add support for other languages
