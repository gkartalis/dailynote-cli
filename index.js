#! /usr/bin/env node
import fs from "fs";
import { program } from "commander";
import chalk from "chalk";
import { createDirectory, createPath, createFileName } from "./src/helpers.js";
import emoji from "node-emoji";

const main = () => {
  const defaultDirectory = createPath();
  createDirectory(defaultDirectory);
  const defaultFileName = createFileName();
  const defaultDestination = `${defaultDirectory}${defaultFileName}`;

  try {
    fs.openSync(defaultDestination, "a");
    const dirName = `${process.cwd()}${defaultDestination.replace(/^\./, "")}`;
    console.log(
      chalk.green(
        `${emoji.get("tada")}${emoji.get("tada")}${emoji.get(
          "notebook"
        )}${emoji.get("notebook")} A markdown file was successfully created to ${dirName}`
      )
    );
  } catch (error) {
    console.log(chalk.red(err));
  }
};

program
  .description("Create a md file in `./YEAR/Jan/08-Tue.md` path")
  .action(main);
program.parse();
