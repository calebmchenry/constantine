import {
    fromCamelCase,
    fromCapsCase,
    fromPascalCase,
    fromSnakeCase,
} from './from/from';
import { toCamelCase, toCapsCase, toPascalCase, toSnakeCase } from './to/to';

/**
 * universal format - all lower case delimited by spaces
 *
 * Each Case contains a from function and a to function. "from" functions take
 * variables from the specified case to universal format. "to" function take
 * variables from universal format to the specified case.
 */

export const camelCase: FromCase & ToCase = {
    from: fromCamelCase,
    to: toCamelCase,
};

export const CAPS_CASE: FromCase & ToCase = {
    from: fromCapsCase,
    to: toCapsCase,
};

export const PascalCase: FromCase & ToCase = {
    from: fromPascalCase,
    to: toPascalCase,
};

export const snake_case: FromCase & ToCase = {
    from: fromSnakeCase,
    to: toSnakeCase,
};
