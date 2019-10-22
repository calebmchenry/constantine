/* eslint-disable */
// path params
export const FIZZ_PARAM = 'fizz';
export const BAZ_PARAM='baz';

// paths
export const FOO = "/foo";
export const FOO_BAR = `/foo/bar`;
export const FOO_101_BAR = '/foo/101/bar'
// export const COMMENTED_CONSTANT = "/commented/constant";
/**
 * export const COMMENTED_CONSTANT = "/commented/constant";
 */
export const FOO_FIZZ = FOO + `/{${ FIZZ_PARAM }}`;
export const POW = `/pow/${{BAZ_PARAM}}`

export const FOO_FIZZ2 = FOO + '/{' + FIZZ_PARAM + '}';
export const POW2 = '/pow/{' + BAZ_PARAM  + "}"
