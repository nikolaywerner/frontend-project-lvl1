#!/usr/bin/env node

import nameRequest from '../src/functions/nameRequest.js';
import greetings from '../src/functions/greetings.js';
import brainProgressionGame from '../src/games/brainProgressionGame.js';

greetings();

const userName = nameRequest();
brainProgressionGame(userName);
