import { Client } from '@elastic/elasticsearch';

export class SearchClient {
    private client: Client;

    constructor() {
        this.client = new Client({ node: 'http://localhost:9200' });
    }

    public async getDocument(id: string) {
        const result = await this.client.get({
            id,
            index: 'pdf-test',
        });
        return result.body._source.attachment;
    }

    public async addDocument(path: string, data: string) {
        const result = await this.client.create({
            id: path,
            index: 'pdf-test',
            pipeline: 'pdf',
            type: 'pdf',
            body: {
                'data': data
            }
        });
        console.log(result);
    }

    public async search(query: string) {
        const result = await this.client.search({
            index: 'pdf-test',
            body: {
                query: {
                    query_string: { query }
                }
            }
        });
        return result.body.hits.hits.map(doc => doc._id);
    }

    public async deleteIndex() {
        await this.client.indices.delete({
            index: 'pdf-test'
        });
    }
}