import * as React from 'react';

interface Props {
    path: string;
}

export class PdfLink extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <span>
            <a href={`file:///${this.props.path}`} target="_blank">{this.props.path}</a>
        </span>;
    }
}