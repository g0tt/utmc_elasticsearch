import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });

const init = async () => {
    try {
        const result = await client.ingest.putPipeline({
            id: "pdf",
            body: {
                "description": "describe pipeline",
                "processors": [
                    {
                        "attachment": {
                            "field": "data",
                            "indexed_chars": -1
                        }
                    }
                ]
            }
        });
        console.log(result)
    } catch (e) {
        console.log(e.meta.body.error);
    }
    return null;
};

init();