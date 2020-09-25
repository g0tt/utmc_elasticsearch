import { SearchClient } from "../lib/utmc_paper_search/client";

const client = new SearchClient();

if (process.argv.length >= 2) {
    client.search(process.argv[process.argv.length - 1]).then(result => {
        console.log(result)
    })
}