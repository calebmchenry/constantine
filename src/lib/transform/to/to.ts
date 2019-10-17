export function toCamelCase(variableName: string) {
    const words = variableName.split(' ');
    return words
        .map((word, index) =>
            index === 0 ? word : word.replace(/\w/, c => c.toUpperCase())
        )
        .join('');
}

export function toCapsCase(variableName: string) {
    return variableName
        .split(' ')
        .join('_')
        .toUpperCase();
}

export function toPascalCase(variableName: string) {
    const words = variableName.split(' ');
    return words.map(word => word.replace(/\w/, c => c.toUpperCase())).join('');
}

export function toSnakeCase(variableName: string) {
    return variableName.split(' ').join('_');
}
