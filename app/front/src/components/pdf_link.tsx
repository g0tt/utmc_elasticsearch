import * as React from 'react';
import * as path from 'path';

interface Props {
    path: string;
}

export class PdfLink extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const filename = path.basename(this.props.path);
        return <span>
            <a href={`http://localhost:3000/pdf/${filename}`}>{this.props.path}</a>
        </span>;
    }
}