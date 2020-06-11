import fs from 'fs';
import express from 'express';
import path from 'path'
import {getMedia} from "./index";
const app: express.Application = express();

app.get('/api/media', function (req, res) {
    const media = getMedia();
    res.send(media);
})

app.listen(5000, function () {
    console.log("App is listening on port 5000!");
});

