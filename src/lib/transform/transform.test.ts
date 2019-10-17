import { transform } from './transform';
import { PascalCase, camelCase, CAPS_CASE, snake_case } from './cases';

/** ***********
 * Originals
 ************ */
const camelOriginal = {
    foo: 'foo',
    fooBarBaz: 'bar',
    math101ExamKey: 'baz',
    userId: 'fizz',
    newXmlParser: 'buzz',
    httpRequest: 'fooBar',
};
const capsOriginal = {
    FOO: 'foo',
    FOO_BAR_BAZ: 'bar',
    MATH_101_EXAM_KEY: 'baz',
    USER_ID: 'fizz',
    NEW_XML_PARSER: 'buzz',
    HTTP_REQUEST: 'fooBar',
};
const pascalOriginal = {
    Foo: 'foo',
    FooBarBaz: 'bar',
    Math101ExamKey: 'baz',
    UserID: 'fizz',
    NewXMLParser: 'buzz',
    HTTPRequest: 'fooBar',
};
const snakeOriginal = {
    foo: 'foo',
    foo_bar_baz: 'bar',
    math_101_exam_key: 'baz',
    user_ID: 'fizz',
    new_XML_parser: 'buzz',
    HTTP_request: 'fooBar',
};

/** *********
 * Results
 ********** */
const camelResult = {
    foo: 'foo',
    fooBarBaz: 'bar',
    math101ExamKey: 'baz',
    userId: 'fizz',
    newXmlParser: 'buzz',
    httpRequest: 'fooBar',
};
const capsResult = {
    FOO: 'foo',
    FOO_BAR_BAZ: 'bar',
    MATH_101_EXAM_KEY: 'baz',
    USER_ID: 'fizz',
    NEW_XML_PARSER: 'buzz',
    HTTP_REQUEST: 'fooBar',
};
const pascalResult = {
    Foo: 'foo',
    FooBarBaz: 'bar',
    Math101ExamKey: 'baz',
    UserId: 'fizz',
    NewXmlParser: 'buzz',
    HttpRequest: 'fooBar',
};
const snakeResult = {
    foo: 'foo',
    foo_bar_baz: 'bar',
    math_101_exam_key: 'baz',
    user_id: 'fizz',
    new_xml_parser: 'buzz',
    http_request: 'fooBar',
};

describe('transform(camelCase)', () => {
    it('transforms to caps case', () => {
        const transformFn = transform(camelCase).to(CAPS_CASE);
        expect(transformFn(camelOriginal)).toStrictEqual(capsResult);
    });

    it('transforms to pascal case', () => {
        const transformFn = transform(camelCase).to(PascalCase);
        expect(transformFn(camelOriginal)).toStrictEqual(pascalResult);
    });

    it('transforms to snake case', () => {
        const transformFn = transform(camelCase).to(snake_case);
        expect(transformFn(camelOriginal)).toStrictEqual(snakeResult);
    });
});

describe('transform(CAPS_CASE)', () => {
    it('transforms to camel case', () => {
        const transformFn = transform(CAPS_CASE).to(camelCase);
        expect(transformFn(capsOriginal)).toStrictEqual(camelResult);
    });

    it('transforms to pascal case', () => {
        const transformFn = transform(CAPS_CASE).to(PascalCase);
        expect(transformFn(capsOriginal)).toStrictEqual(pascalResult);
    });

    it('transforms to snake case', () => {
        const transformFn = transform(CAPS_CASE).to(snake_case);
        expect(transformFn(capsOriginal)).toStrictEqual(snakeResult);
    });
});

describe('transform(PascalCase)', () => {
    it('transforms to camel case', () => {
        const transformFn = transform(PascalCase).to(camelCase);
        expect(transformFn(pascalOriginal)).toStrictEqual(camelResult);
    });

    it('transforms to caps case', () => {
        const transformFn = transform(PascalCase).to(CAPS_CASE);
        expect(transformFn(pascalOriginal)).toStrictEqual(capsResult);
    });

    it('transforms to snake case', () => {
        const transformFn = transform(PascalCase).to(snake_case);
        expect(transformFn(pascalOriginal)).toStrictEqual(snakeResult);
    });
});

describe('transform(snake_case)', () => {
    it('transforms to camel case', () => {
        const transformFn = transform(snake_case).to(camelCase);
        expect(transformFn(snakeOriginal)).toStrictEqual(camelResult);
    });

    it('transforms to caps case', () => {
        const transformFn = transform(snake_case).to(CAPS_CASE);
        expect(transformFn(snakeOriginal)).toStrictEqual(capsResult);
    });

    it('transforms to pascal case', () => {
        const transformFn = transform(snake_case).to(PascalCase);
        expect(transformFn(snakeOriginal)).toStrictEqual(pascalResult);
    });
});
