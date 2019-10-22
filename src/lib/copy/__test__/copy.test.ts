import fs from 'fs';
import { copy } from '../copy';

const mockedWriteFileSync = jest.fn();
fs.writeFileSync = mockedWriteFileSync;

test('copies js constants to js constants', () => {
    let toFileContent;
    mockedWriteFileSync.mockImplementation(
        (_path: string, fileContent: string) => {
            toFileContent = fileContent;
        }
    );
    copy('./src/lib/copy/__test__/examples/RestConstants.js').to(
        './some/path.js'
    );
    expect(toFileContent).toMatchSnapshot();
});

test('copies java constants to js constants', () => {
    let toFileContent;
    mockedWriteFileSync.mockImplementation(
        (_path: string, fileContent: string) => {
            toFileContent = fileContent;
        }
    );
    copy('./src/lib/copy/__test__/examples/RestConstants.java').to(
        './some/path.js'
    );
    expect(toFileContent).toMatchSnapshot();
});
