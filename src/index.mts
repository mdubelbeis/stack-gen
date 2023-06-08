#!/opt/homebrew/bin/node
import chalk from "chalk";
import { FRAMEWORKS } from "./data/data.mjs";
// const { FRAMEWORKS, CLI_COMMANDS } = require("./data/data");

for (const framework of FRAMEWORKS) {
  // const cli_command = CLI_COMMANDS[framework];
  console.log(chalk.blue(framework));
}
