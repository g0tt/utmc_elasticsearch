import { SearchClient } from "../lib/utmc_paper_search/client";
import * as glob from 'glob';
import * as fs from 'fs';

const client = new SearchClient();

const refresh = async () => {
    client.deleteIndex();
    const files = glob.sync(__dirname + '/../pdf/*.pdf');

    files.forEach(file => {
        fs.readFile(file, 'base64', function(err, data) {
            if (err) throw err;
            client.addDocument(file, data);
        });
    })

};

refresh();