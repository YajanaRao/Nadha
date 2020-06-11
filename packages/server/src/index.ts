import fs from "fs";
import path from "path";

export function getMedia() {
    const media: any = fs.readFileSync(path.join(__dirname, '../media.json'));
    return JSON.parse(media);
}
