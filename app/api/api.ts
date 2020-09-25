import * as express from 'express';
import {SearchClient} from "../lib/utmc_paper_search/client";

const app = express();
const cors = require('cors')
const client = new SearchClient();

app.use(cors());
app.use('/pdf', express.static(__dirname + '/../pdf'));

app.get('/search', function (req, res) {
    client.search(req.query.q).then(result => {
        res.send(result);
    });
});

app.listen(3000);