#!/usr/bin/env node
import program from 'commander';
import { copy } from '../lib/index';

const pkg = require('../../package.json');

program
    .version(pkg.version)
    .option('-f, --from', 'file to copy from')
    .option('-t, --to', 'file to copy to')
    .action(cmd => {
        copy(cmd.from).to(cmd.to);
    });

program.parse(process.argv);
