import * as React from 'react';
import {PdfLink} from "./pdf_link";
const axios = require('axios');

interface State {
    query: string;
    files: string[];
}

export class Search extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            query: "",
            files: [],
        };
    }

    render() {
        return <form>
            <input type="text" placeholder="query" onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.search.bind(this)}>検索</button>
            <ul>
                {this.state.files.map((path: string) =>
                    <li>
                        <PdfLink path={path} />
                    </li>
                )}
            </ul>
        </form>
    }

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            query: event.target.value,
        });
    }

    private async search(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const result = await axios.get('http://localhost:3000/search', {
            params: {
                q: this.state.query,
            }
        });
        this.setState({
            files: result.data,
        });
    }
}