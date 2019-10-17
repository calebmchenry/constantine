const pascalAndCamelRegex = /(?<=[A-Z])(?=[A-Z][a-z])|(?<=[^A-Z])(?=[A-Z])|(?<=[A-Za-z])(?=[^A-Za-z])/;

function fromPascalOrCamelCase(variableName: string) {
    return variableName
        .split(pascalAndCamelRegex)
        .join(' ')
        .toLowerCase();
}

export function fromCamelCase(variableName: string) {
    return fromPascalOrCamelCase(variableName);
}

export function fromCapsCase(variableName: string) {
    return variableName
        .split('_')
        .join(' ')
        .toLowerCase();
}

export function fromPascalCase(variableName: string) {
    return fromPascalOrCamelCase(variableName);
}

export function fromSnakeCase(variableName: string) {
    return variableName
        .split('_')
        .join(' ')
        .toLowerCase();
}
