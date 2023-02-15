#!/usr/bin/env node

import nameRequest from '../src/cli.js';
import cliBrainEven from "../src/cliBrainEven.js";

console.log('Welcome to the Brain Games!');

const userName = nameRequest();
cliBrainEven(userName);