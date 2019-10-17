import { toCamelCase, toCapsCase, toPascalCase, toSnakeCase } from './to';

describe('toCamelCase', () => {
    it('should compose variable names with single word', () => {
        const universalCase = 'foo';
        const camelCase = 'foo';
        expect(toCamelCase(universalCase)).toBe(camelCase);
    });
    it('should compose variable names with multiple words', () => {
        const universalCase = 'foo bar baz multiple words';
        const camelCase = 'fooBarBazMultipleWords';
        expect(toCamelCase(universalCase)).toBe(camelCase);
    });
    it('should compose variable names with numbers', () => {
        const universalCase = 'math 101 exam key';
        const camelCase = 'math101ExamKey';
        expect(toCamelCase(universalCase)).toBe(camelCase);
    });
});

describe('toCapsCase', () => {
    it('should compose variable names with single word', () => {
        const universalCase = 'foo';
        const capsCase = 'FOO';
        expect(toCapsCase(universalCase)).toBe(capsCase);
    });
    it('should compose variable names with multiple words', () => {
        const universalCase = 'foo bar baz multiple words';
        const capsCase = 'FOO_BAR_BAZ_MULTIPLE_WORDS';
        expect(toCapsCase(universalCase)).toBe(capsCase);
    });
    it('should compose variable names with numbers', () => {
        const universalCase = 'math 101 exam key';
        const capsCase = 'MATH_101_EXAM_KEY';
        expect(toCapsCase(universalCase)).toBe(capsCase);
    });
});

describe('toPascalCase', () => {
    it('should compose variable names with single word', () => {
        const universalCase = 'foo';
        const pascalCase = 'Foo';
        expect(toPascalCase(universalCase)).toBe(pascalCase);
    });
    it('should compose variable names with multiple words', () => {
        const universalCase = 'foo bar baz multiple words';
        const pascalCase = 'FooBarBazMultipleWords';
        expect(toPascalCase(universalCase)).toBe(pascalCase);
    });
    it('should compose variable names with numbers', () => {
        const universalCase = 'math 101 exam key';
        const pascalCase = 'Math101ExamKey';
        expect(toPascalCase(universalCase)).toBe(pascalCase);
    });
});

describe('toSnakeCase', () => {
    it('should compose variable names with single word', () => {
        const universalCase = 'foo';
        const snakeCase = 'foo';
        expect(toSnakeCase(universalCase)).toBe(snakeCase);
    });
    it('should compose variable names with multiple words', () => {
        const universalCase = 'foo bar baz multiple words';
        const snakeCase = 'foo_bar_baz_multiple_words';
        expect(toSnakeCase(universalCase)).toBe(snakeCase);
    });
    it('should compose variable names with numbers', () => {
        const universalCase = 'math 101 exam key';
        const snakeCase = 'math_101_exam_key';
        expect(toSnakeCase(universalCase)).toBe(snakeCase);
    });
});
