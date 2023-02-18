#!/usr/bin/env node

import nameRequest from "../src/functions/nameRequest.js";
import greetings from "../src/functions/greetings.js";
import brainGcdGame from "../src/games/brainGcdGame.js";


greetings();

const userName = nameRequest();
brainGcdGame(userName);

