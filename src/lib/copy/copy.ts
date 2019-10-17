import { readFileSync, writeFileSync } from 'fs';
import { extname } from 'path';
import { getParser } from './parsers/parserFactory';
import { getComposer } from './composers/composerFactory';

function makeToFn(variableMap: any) {
    return (path: string): void => {
        // generate file
        const fileExtension = extname(path);
        const generateFn = getComposer(fileExtension);
        const fileContent = generateFn(variableMap);

        // write to file
        writeFileSync(path, fileContent);
    };
}

function makeWithFn(rawVariableMap: VariableMap) {
    return (transform: TransformFn) => {
        const transformedVariableMap = transform(rawVariableMap);
        return {
            to: makeToFn(transformedVariableMap),
        };
    };
}

function copy(path: string) {
    // read file
    const fileContent = readFileSync(path).toString();

    // generate variable map
    const fileExtension = extname(path);
    const parseFn = getParser(fileExtension);
    const variableMap = parseFn(fileContent);

    // make to function
    return {
        with: makeWithFn(variableMap),
        to: makeToFn(variableMap),
    };
}

export { copy };
