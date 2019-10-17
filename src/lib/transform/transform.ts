function makeToFn(fromCase: FromCase) {
    return (toCase: ToCase) => {
        const transformFn: TransformFn = (
            variableMap: VariableMap
        ): VariableMap => {
            const variableNames = Object.keys(variableMap);
            const newVariableMap: VariableMap = {};
            variableNames.forEach((variableName: string) => {
                const newVariableName = toCase.to(fromCase.from(variableName));
                newVariableMap[newVariableName] = variableMap[variableName];
            }, {});
            return newVariableMap;
        };
        return transformFn;
    };
}

export function transform(fromCase: FromCase) {
    return {
        to: makeToFn(fromCase),
    };
}
