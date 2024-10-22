"use server";

import fs from "fs";
import path from "path";

export async function getStringFromFile(fileName: string, directory: string) {
    const string = fs.readFileSync(
        path.join(process.cwd(), directory, fileName),
        "utf-8",
    );

    return string;
}
