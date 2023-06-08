#!/opt/homebrew/bin/node

import chalk from "chalk";
import _ from "lodash";
import { FRAMEWORKS } from "./data/data.mjs";
import { CLIENT_RENEG_LIMIT } from "tls";
// const { FRAMEWORKS, CLI_COMMANDS } = require("./data/data");

const randomIndex = Math.floor(Math.random() * FRAMEWORKS.length);
const randomFramework = _.startCase(_.toLower(FRAMEWORKS[randomIndex]));
