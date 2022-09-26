import { readFileSync } from "fs";

export function loadJson(filePath) {
    const appRoot = require("app-root-path");

    try {
        return JSON.parse(readFileSync(`${appRoot}/${filePath}`, 'utf-8'));
    } catch(err) {
        console.error(err);
    }
}