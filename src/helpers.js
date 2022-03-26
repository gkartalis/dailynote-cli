import fs from "fs";
import { DateTime } from "luxon";

export const createDirectory = (path) => {
  fs.mkdirSync(path, { recursive: true });
  return;
};

export const createPath = () => {
  return `./Notes/${DateTime.local().toFormat("yyyy/LLL/")}`;
};

export const createFileName = () => `${DateTime.local().toFormat("dd-ccc")}.md`;
