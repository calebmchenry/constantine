import { composeJavascript } from './composeJavascript';

const ComposerMap: ComposerMap = {
    '.js': composeJavascript,
};

export const getComposer = (fileExtension: string): ComposerFn => {
    const composer = ComposerMap[fileExtension];
    if (composer == null) {
        return () => {
            throw new Error(
                `Could not find composer function for ${fileExtension} file extension`
            );
        };
    }
    return composer;
};
