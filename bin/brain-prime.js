#!/usr/bin/env node

import nameRequest from '../src/functions/nameRequest.js';
import greetings from '../src/functions/greetings.js';
import brainPrimeGame from '../src/games/brainPrimeGame.js';

greetings();

const userName = nameRequest();
brainPrimeGame(userName);
