import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export interface LoginUser {
    type: string;
    email: string;
    password: string;
}

export function readLoginData(): LoginUser[] {

    const filePath = path.join(__dirname, "../test-data/LoginData.csv");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    }) as LoginUser[];

}