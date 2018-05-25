#!/usr/bin/env node

import { readFile } from 'fs';

function processFile(error, data) {
  error ? console.log(error) : console.log(data);
}

const messagePath = process.argv[2];
if (!messagePath) throw new Error('No path provided!');

readFile(messagePath, 'utf-8', processFile);
