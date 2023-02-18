#!/usr/bin/env node

import nameRequest from "../src/cli.js";
import greetings from "../src/functions/greetings.js";
import brainCalcGame from "../src/games/brainCalcGame.js";

greetings();

const userName = nameRequest();
brainCalcGame(userName);

