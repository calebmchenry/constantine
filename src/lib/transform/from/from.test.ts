import {
    fromSnakeCase,
    fromPascalCase,
    fromCapsCase,
    fromCamelCase,
} from './from';

describe('fromCamelCase', () => {
    it('should parse camelCase', () => {
        const variableName = 'camelCase';
        const universalCase = 'camel case';
        expect(fromCamelCase(variableName)).toBe(universalCase);
    });

    it('should parse single word variable names', () => {
        const variableName = 'foo';
        const universalCase = 'foo';
        expect(fromCamelCase(variableName)).toBe(universalCase);
    });

    it('should parse multiple word variable names', () => {
        const variableName = 'fooBarBazMultipleWords';
        const universalCase = 'foo bar baz multiple words';
        expect(fromCamelCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with numbers', () => {
        const variableName = 'math101AnswerKey';
        const universalCase = 'math 101 answer key';
        expect(fromCamelCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with capitalized acronyms', () => {
        // End of word
        let variableName = 'userID';
        let universalCase = 'user id';
        expect(fromCamelCase(variableName)).toBe(universalCase);

        // Middle of word
        variableName = 'newXMLParser';
        universalCase = 'new xml parser';
        expect(fromCamelCase(variableName)).toBe(universalCase);

        // Beginning of word
        variableName = 'httpRequest';
        universalCase = 'http request';
        expect(fromCamelCase(variableName)).toBe(universalCase);
    });
});

describe('fromCapsCase', () => {
    it('should parse CAPS_CASE', () => {
        const variableName = 'CAPS_CASE';
        const universalCase = 'caps case';
        expect(fromCapsCase(variableName)).toBe(universalCase);
    });

    it('should parse single word variable names', () => {
        const variableName = 'FOO';
        const universalCase = 'foo';
        expect(fromCapsCase(variableName)).toBe(universalCase);
    });

    it('should parse multiple word variable names', () => {
        const variableName = 'FOO_BAR_BAZ_MULTIPLE_WORDS';
        const universalCase = 'foo bar baz multiple words';
        expect(fromCapsCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with numbers', () => {
        const variableName = 'MATH_101_ANSWER_KEY';
        const universalCase = 'math 101 answer key';
        expect(fromCapsCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with capitalized acronyms', () => {
        // End of word
        let variableName = 'USER_ID';
        let universalCase = 'user id';
        expect(fromCapsCase(variableName)).toBe(universalCase);

        // Middle of word
        variableName = 'NEW_XML_PARSER';
        universalCase = 'new xml parser';
        expect(fromCapsCase(variableName)).toBe(universalCase);

        // Beginning of word
        variableName = 'HTTP_REQUEST';
        universalCase = 'http request';
        expect(fromCapsCase(variableName)).toBe(universalCase);
    });
});

describe('fromPascalCase', () => {
    it('should parse PascalCase', () => {
        const variableName = 'PascalCase';
        const universalCase = 'pascal case';
        expect(fromPascalCase(variableName)).toBe(universalCase);
    });

    it('should parse single word variable names', () => {
        const variableName = 'Foo';
        const universalCase = 'foo';
        expect(fromPascalCase(variableName)).toBe(universalCase);
    });

    it('should parse multiple word variable names', () => {
        const variableName = 'FooBarBazMultipleWords';
        const universalCase = 'foo bar baz multiple words';
        expect(fromPascalCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with numbers', () => {
        const variableName = 'Math101AnswerKey';
        const universalCase = 'math 101 answer key';
        expect(fromPascalCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with capitalized acronyms', () => {
        // End of word
        let variableName = 'UserID';
        let universalCase = 'user id';
        expect(fromPascalCase(variableName)).toBe(universalCase);

        // Middle of word
        variableName = 'NewXMLParser';
        universalCase = 'new xml parser';
        expect(fromPascalCase(variableName)).toBe(universalCase);

        // Beginning of word
        variableName = 'HTTPRequest';
        universalCase = 'http request';
        expect(fromPascalCase(variableName)).toBe(universalCase);
    });
});

describe('fromSnakeCase', () => {
    it('should parse snake_case', () => {
        const variableName = 'snake_case';
        const universalCase = 'snake case';
        expect(fromSnakeCase(variableName)).toBe(universalCase);
    });

    it('should parse single word variable names', () => {
        const variableName = 'foo';
        const universalCase = 'foo';
        expect(fromSnakeCase(variableName)).toBe(universalCase);
    });

    it('should parse multiple word variable names', () => {
        const variableName = 'Foo_bar_baz_multiple_words';
        const universalCase = 'foo bar baz multiple words';
        expect(fromSnakeCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with numbers', () => {
        const variableName = 'math_101_answer_key';
        const universalCase = 'math 101 answer key';
        expect(fromSnakeCase(variableName)).toBe(universalCase);
    });

    it('should parse variable names with capitalized acronyms', () => {
        // End of word
        let variableName = 'user_ID';
        let universalCase = 'user id';
        expect(fromSnakeCase(variableName)).toBe(universalCase);

        // Middle of word
        variableName = 'new_XML_parser';
        universalCase = 'new xml parser';
        expect(fromSnakeCase(variableName)).toBe(universalCase);

        // Beginning of word
        variableName = 'HTTP_request';
        universalCase = 'http request';
        expect(fromSnakeCase(variableName)).toBe(universalCase);
    });
});
