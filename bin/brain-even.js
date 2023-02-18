#!/usr/bin/env node

import nameRequest from "../src/functions/nameRequest.js";
import greetings from "../src/functions/greetings.js";
import brainEvenGame from "../src/games/brainEvenGame.js";

greetings();

const userName = nameRequest();
brainEvenGame(userName);