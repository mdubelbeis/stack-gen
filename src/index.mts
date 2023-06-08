#!/opt/homebrew/bin/node

import * as readline from "node:readline/promises";
import { execSync } from "child_process";
import { stdin as input, stdout as output } from "node:process";
import chalk from "chalk";
import _ from "lodash";
import promptSync from "prompt-sync";
import { FRAMEWORKS, CLI_COMMANDS } from "./data/data.mjs";
import { CLIENT_RENEG_LIMIT } from "tls";
import { clear } from "console";
// const { FRAMEWORKS, CLI_COMMANDS } = require("./data/data");

// RANDOMIZE FRAMEWORK
const randomIndex = Math.floor(Math.random() * FRAMEWORKS.length);
const randomFramework = _.startCase(_.toLower(FRAMEWORKS[randomIndex]));

const rl = readline.createInterface({ input, output });

const bannerSequence =
  chalk.green(" * ") + chalk.blue(" ~ ") + chalk.green(" * ");

const header = chalk.bgBlue.bold(" Stack Generator  ");
const banner = bannerSequence.repeat(4);

const subHeader = chalk.blue(" Please select a framework to generate: ");

const menu = () => {
  return `
${banner}
${chalk.blue(`${bannerSequence}${header}${bannerSequence}`)}
${banner}

${chalk.bold(subHeader)}

${chalk.hex("#DEADED")("1. React")}
${chalk.hex("#DEADED")("2. Vue")}
${chalk.hex("#DEADED")("3. Svelte")}
${chalk.hex("#DEADED")("4. Next")}
${chalk.hex("#DEADED")("5. Qwik")}
${chalk.hex("#DEADED")("6. Solid")}
${chalk.hex("#DEADED")("7. Astro")}
${chalk.hex("#DEADED")("9. Nuxt")}
${chalk.hex("#DEADED")("10. Sveltekit")}
${chalk.hex("#DEADED")("11. Solidstart")}
${chalk.hex("#DEADED")("12. Qwikcity")}
${chalk.hex("#DEADED")("13. Random")}
${chalk.red("14. Exit")}

${chalk.blue("Please enter your selection: ")}`;
};

const main = async () => {
  const answer = await rl.question(menu());
  switch (answer) {
    case "1":
      console.log(chalk.bgBlue("Installing React..."));
      const stack = CLI_COMMANDS.react; // Example CLI command

      try {
        const command = `cd ~/Desktop && ${stack}`;
        execSync(command, { stdio: "inherit" });
      } catch (error) {
        console.error("Error executing command:", error);
      }
      // CLI_COMMANDS.react; -- Need to get this to write
      break;
    case "2":
      console.log(chalk.blue("Vue"));
      break;
    case "3":
      console.log(chalk.blue("Svelte"));
      break;
    case "4":
      console.log(chalk.blue("Next"));
      break;
    case "5":
      console.log(chalk.blue("Qwik"));
      break;
    case "6":
      console.log(chalk.blue("Solid"));
      break;
    case "7":
      console.log(chalk.blue("Astro"));
      break;
    case "9":
      console.log(chalk.blue("Nuxt"));
      break;
    case "10":
      console.log(chalk.blue("Sveltekit"));
      break;
    case "11":
      console.log(chalk.blue("Solidstart"));
      break;
    case "12":
      console.log(chalk.blue("Qwikcity"));
      break;
    case "13":
      console.log(chalk.blue(randomFramework));
      break;
    case "14":
      console.log(chalk.blue("Exit"));
      break;
    default:
      console.log(chalk.red("Invalid selection"));
      break;
  }

  rl.close();
  console.log("Goodbye!");
  return -1;
};

main();
