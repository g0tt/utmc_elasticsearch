import {SearchClient} from "../lib/utmc_paper_search/client";

const client = new SearchClient();

const get = async (path) => {
    const doc = await client.getDocument(path);
    console.log(doc);
};

if (process.argv.length >= 2) {
    get(process.argv[process.argv.length - 1]);
}